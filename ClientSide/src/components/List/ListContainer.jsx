import React, { useEffect, useState } from 'react'
import List from './List'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const ListContainer = () => {
const [data, setData]= useState([])
const [currentPage, setCurrentPage] = useState(1)
const [totalPages, setTotalPages] = useState()
const [loading, setLoading] = useState(true)

const location = useLocation()

let productsPerPage = 4


useEffect(()=>{
  setLoading(true)
  const url = new URLSearchParams(location.search).toString()
  const fetchData = async()=>{
    try{
      const res = await axios.get(`http://localhost:3000/q?${url}`,{
        params:{
          page: currentPage,
          limit: productsPerPage
        }
      }).then((res)=>{
      setData(res.data.search)
      setCurrentPage(res.data.currentPage)
      setTotalPages(res.data.totalPages)
      setLoading(false)
      }).catch((err)=>console.log(err))
    }catch(err){
      console.log(err)
      setLoading(false)
    }
  }
  fetchData()
},[location.search, currentPage])

const handlePageChange = (newPage)=>{
  if(newPage < 1 || newPage > totalPages) 
      return
  setCurrentPage(newPage)
}



const handleSort = (e)=>{
  let value = e.target.value
  let sortedData
  let dataCopy = [...data]
  if(value === 'minPrice'){
    sortedData = dataCopy.sort((a, b)=>
      a.precio - b.precio
  )
}else if(value === 'maxPrice'){
  sortedData = dataCopy.sort((a, b)=>
    b.precio - a.precio
)
}else if(value === 'minSize'){
  sortedData = dataCopy.sort((a, b)=>
    a.supTotal - b.supTotal
        )
      }else if(value === 'maxSize'){
        sortedData = dataCopy.sort((a, b)=>
          b.supTotal - a.supTotal 
      )
      }   
  setData(sortedData)
}

let datos ={
  data,
  handleSort,
  handlePageChange,
  totalPages,
  currentPage,
  loading
}

  return (
        <div>
          <List datos={datos}/>
        </div>
    )
}

export default ListContainer
