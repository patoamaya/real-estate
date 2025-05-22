const houseModel = require('../models/houseModel')
const cloudinary = require("../utils/cloudinary")
const streamifier = require ("streamifier");

const ownerController = {
    index : async(req, res)=>{
      try{
        const allProperties = await houseModel.find()
        res.json({allProperties})
      }catch(err){
        console.log(err)
        res.status(500).json({
            message: `Error: ${err}`,
            error: message.err
        })
      }
    },

    post : async(req, res)=>{
        try{
        const { provincia, municipio, ciudad, direccion, precio, operacion, propiedad, ambientes, supTotal, supCubierta, cochera, aptoCredito, habitaciones, antiguedad, descripcion, moneda, banos, best}= req.body

       if(!req.files || req.files.length === 0){
        return res.status(400).json({
            message: 'Debe agregar imagenes para continuar'
        })
       }

       const imgUrls = []

       for(const file of req.files){
        const result = await new Promise((resolve, reject) => {
  const uploadStream = cloudinary.uploader.upload_stream(
    { resource_type: 'auto' },
    (error, result) => {
      if (error) {
        console.log('Error subiendo imagen a Cloudinary:', error);
        return reject(error);
      }
      resolve(result);
    }
  );

  streamifier.createReadStream(file.buffer).pipe(uploadStream);
});

        imgUrls.push({
            url: result.secure_url,
            public_id: result.public_id
        })
       }

       const newProperty = new houseModel({
         provincia, municipio, ciudad, direccion, precio, moneda, operacion, propiedad, imagenes: imgUrls, ambientes, supTotal, supCubierta, cochera, aptoCredito, banos, habitaciones, antiguedad, descripcion, best
       })

       await newProperty.save()
       res.status(200).json({
        message: 'Propiedad añadida con éxito',
        propiedad: newProperty.toObject()
       })
        }catch(err){
            console.log(err)
            res.status(500).json({
                message: `Error al crear la propiedad : ${err}`,
                error: err.message
            })
        }
    },

    update: async(req, res)=>{
        const _id = req.params.id
        const {provincia, municipio, ciudad, direccion, precio, operacion, propiedad, ambientes, supTotal, supCubierta, cochera, aptoCredito, habitaciones, antiguedad, descripcion, moneda, banos, best} = req.body

        console.log(`Archivos recibidos : ${req.files}`)

        const existingProperty = await houseModel.findById(_id)
        let ultimateImages = existingProperty ? existingProperty.imagenes : []

        if (!req.files || req.files.length === 0) {
        } else {
          try {
            const imgUrls = await Promise.all(
              req.files.map((file) => {
                return new Promise((resolve, reject) => {
                  const uploadStream = cloudinary.uploader.upload_stream(
                    { resource_type: 'auto' },  
                    (err, result) => {
                      if (err) {
                        console.log("Error al subir imagen a Cloudinary:", err)
                        reject(err);
                      }
                      console.log("Imagen subida con éxito a Cloudinary:", result)
                      resolve({
                        url: result.secure_url, 
                        public_id: result.public_id
                      })
                    }
                  )
                  streamifier.createReadStream(file.buffer).pipe(uploadStream)
                })
              })
            )
      
            console.log("Imagenes subidas correctamente:", imgUrls)
            ultimateImages = [...ultimateImages, ...imgUrls]
      
          } catch (err) {
            console.log("Error al subir imágenes a Cloudinary:", err)
            return res.status(500).json({ message: "Error al subir imágenes" })
          }
        }
      
        ultimateImages = ultimateImages.filter(img => img && img.url && img.public_id)
        
        const updatedProperty = {provincia, ciudad, municipio, direccion, precio, operacion, propiedad, ambientes, supTotal, supCubierta, cochera, aptoCredito, habitaciones, antiguedad, descripcion, moneda, banos, imagenes: ultimateImages, best
          }

          try{
            const updatedPropertyDoc = await houseModel.findOneAndUpdate({_id}, updatedProperty, {new: true})
            res.status(200).json({message: "Propiedad actualizada con éxito", updatedProperty: updatedPropertyDoc})
          }catch(err){
            console.log("Error al actualizar la propiedad", err)
            res.status(500).json({
                message: "Error al actualizar la propiedad",
                error: err.message
            })
          }
    },

    delete: async(req, res)=>{
        const _id = req.params.id
        try{

        const property = await houseModel.findById(_id)

        if(!house){
            return res.status(404).json({
                message: "Propiedad no encontrada"
            })}
        
        if(property.imagenes && property.imagenes.length > 0){
            for(let img of property.imagenes){
                await cloudinary.uploader.destroy(img.public_id)
            }
        }
        
            const deleted = await houseModel.deleteOne(_id)
            res.status(200).json({
                message:"Borrado con exito", deleted
            })
        }catch(err){
            console.log('Error al borrar la propiedad', err)
            res.status(500).json({
                message: "Error al borrar la propiedad",
                error: err.message
            })
        }
    },

    detail: async(req, res)=>{
        const _id = req.params.id
        try{

            const findById = await houseModel.findById(_id)
            
            res.status(200).json({
                findById
            })
        }catch(err){
            console.log(err)
            res.status(400).json({
                message: "Propiedad no encontrada",
                error: err.message
            })
        }
    }
}

module.exports = ownerController