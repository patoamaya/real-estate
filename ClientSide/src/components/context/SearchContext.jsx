import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext()

const SearchContextProvider = ({children})=>{
  const [data, setData] = useState([])
  const [objData, setObjData] = useState({})
  
  const handleChange=(e)=>{
        setObjData({...objData, [e.target.name]: e.target.value})
    }

  const url = ()=>{
    const params = new URLSearchParams()
    objData?.operacion && params.append('operacion', objData.operacion)
    objData?.propiedad && params.append('propiedad', objData.propiedad)
    objData?.provincia && params.append('provincia', objData.provincia)
    objData?.ciudad && params.append('ciudad', objData.ciudad)
    objData?.moneda && params.append('moneda', objData.moneda)
    objData?.minPrice && params.append('minPrice', objData.minPrice)
    objData?.maxPrice && params.append('maxPrice', objData.maxPrice)

    return `http://localhost:3000/q?${params.toString()}`
  }

  useEffect(()=>{
   if( objData.operacion || objData.propiedad || objData.moneda || objData.provincia || objData.ciudad || objData.minPrice || objData.maxPrice){
     axios.get(url())
     .then((res)=>setData(res.data.search))
     .catch((err)=>console.log(err))
    }
    },[JSON.stringify(objData)])

  let datos = {
    data,
    objData,
    url,
    handleChange
}

return <SearchContext.Provider value={datos}>{children}</SearchContext.Provider>
}



export default SearchContextProvider