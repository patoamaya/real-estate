const houseModel = require('../models/houseModel')

const indexController = {
    index : async(req, res)=>{
        try{
            const allProperties = await houseModel.find()
            res.json({
                allProperties
            })
            }catch(err){
                console.log(err)
                res.status(500).json({
                    message: "Error al encontrar productos",
                    error: err.message
                })
            }
        },

    q: async(req, res)=>{
    
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const {propiedad, provincia, ambientes, municipio, ciudad, operacion, minPrice, maxPrice} = req.query
        let  filter = {}

            
        if(propiedad){
            filter.propiedad = propiedad;
           }
        if(provincia){
            filter.provincia = provincia;
        }
        if(municipio){
            filter.municipio = municipio;
            }
        if(ciudad){
            filter.ciudad = ciudad;
        }
        if(operacion){
            filter.operacion = operacion;
        }
        if(ambientes){
            filter.ambientes = ambientes;
        }
        if(minPrice || maxPrice){
            filter.precio = {}
            if(minPrice){
                filter.precio.$gte = minPrice
            }
            if(maxPrice){
                filter.precio.$lte = maxPrice
            }
        }
       try{
        const search = await houseModel.find(filter)
        .skip((page-1) * limit)
        .limit(limit)
        
        const customSearch = await houseModel.countDocuments(filter)
       
        res.json({
        search,
        totalPages: Math.ceil( customSearch / limit),
        currentPage: (page)
        })

       }catch(err){
        res.status(400).json({
            message: "Error al encontrar propiedades",
            error: err.message
        })
       }
    },

    detail: async(req, res)=>{
        try{
        const {id} = req.params
        const detailedProperty = await houseModel.findById(id);
        res.json({
            detailedProperty
        }) 
        }catch(err){
            return res.status(400).json({
                message : err,
                error: err.message
            })
        }
    }
}



module.exports = indexController