import React, { useEffect, useState } from 'react'
import Detail from './Detail'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css';

const DetailContainer = () => {
    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3000/detail/${id}`)
        .then((res)=>setData(res.data.detailedProperty))
        .catch((err)=>console.log(err))
    },[])

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          // once: true, 
        });
      }, []);

    return (
        <div>
            <Detail data={data}/>
        </div>
    )
}

export default DetailContainer
