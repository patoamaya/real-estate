import React from 'react'
import './Footer.css'
import { Link, Outlet } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer-container-all'>
            <Outlet/>
            <footer className="footer-container">
             <Link to="https://www.linkedin.com/in/patricio-amaya-dev/" className='footer-link'><p>Sitio Web creado por Patricio Amaya</p></Link>
            </footer>
        </div>
    )
}

export default Footer
