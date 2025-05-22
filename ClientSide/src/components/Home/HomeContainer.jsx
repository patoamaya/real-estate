import React, { useContext, useEffect, useState } from 'react'
import Home from './Home'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'
import AOS from 'aos'
import 'aos/dist/aos.css';

const HomeContainer = () => {
  const navigate = useNavigate()
  const {url, objData, handleChange} = useContext(SearchContext)
  const [allData, setAllData] = useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:3000/")
    .then((res)=>setAllData(res.data.allProperties))
    .catch((err)=>console.log(err))
  },[])

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  const handleSubmit= async(e)=>{
    e.preventDefault()
    try{
      await axios.get(url())
      navigate(`/q?${new URLSearchParams(objData).toString()}`)
    } catch(err){
      console.log(err)
    }
  }

  const noRepeatedProvince = [...new Set(allData.map((dato)=> dato.provincia))]
  const noRepeatedCity = [...new Set(allData.map((dato)=> dato.ciudad).sort())]

  const datos={
    handleSubmit,
    handleChange,
    noRepeatedProvince,
    noRepeatedCity,
    AOS
  }
    return (
        <div>
          <Home datos={datos}/>
        </div>
    )
}

export default HomeContainer
