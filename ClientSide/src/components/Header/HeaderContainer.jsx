import React from 'react'
import Header from './Header'
import { useLocation, useNavigate } from 'react-router-dom'

const HeaderContainer = () => {
const location = useLocation()
const navigate = useNavigate()
  const handleNavigate = (e)=>{
    console.log(e.target.value)
    let value = e.target.value
    value === 'operacion'
     ?
     navigate('/')
     : 
     navigate(`/q?operacion=${value}`)
  }
    return (
        <div> 
          <Header handleNavigate={handleNavigate} location={location}/>
        </div>
    )
}

export default HeaderContainer
