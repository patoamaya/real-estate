import React from 'react'
import './Detail.css'
import StraightenIcon from '@mui/icons-material/Straighten';
import GarageIcon from '@mui/icons-material/Garage';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EmailIcon from '@mui/icons-material/Email';
import UseCarousel from '../../../utils/UseCarousel'
import UseCaps from '../../../utils/UseCaps'
import {Link} from 'react-router-dom'
import {Triangle} from 'react-loader-spinner'

const Detail = ({data}) => {
    const {useCaps} = UseCaps()
    let {provincia, ciudad, direccion, precio, moneda, operacion, propiedad, ambientes, supTotal, supCubierta, cochera, banos, aptoCredito, habitaciones, antiguedad, descripcion, imagenes, createdAt } = data
    const date = new Date(createdAt)
    return (
        <div>
            {
              imagenes ?
              <div className="detail-container-all">

                    <div className="detail1-container" data-aos="zoom-out">
                        <div className="detail-img-container">
                            {imagenes &&
                            <UseCarousel imagenes = {imagenes} /> 
                            }
                        </div>
                        <div className="detail-info1-container">
                            <div className="detail-price-property">
                            {useCaps(propiedad === "departamento" ? "depto" : propiedad )} <p className="detail-wall">|</p> {moneda === "peso" ? "$" : "US$"} {precio.toLocaleString()}
                            </div>
                            <ul className="detail-info1-info">
                                <li><b>Operación</b> <p className="detail-info-wall">|</p> {useCaps(operacion)}</li>
                                <li><b>Ubicación</b> <p className="detail-info-wall">|</p> {useCaps(ciudad)}, {useCaps(provincia === "Ciudad Autónoma de Buenos Aires" ? "CABA" : provincia === 'buenosAires' ? 'Buenos Aires' : provincia )}</li>
                                <li><b>Dirección</b> <p className="detail-info-wall">|</p> {useCaps(direccion)}</li>
                                <li><b>Ambientes</b> <p className="detail-info-wall">|</p> {ambientes}</li>
                                <li><b>Anunciada</b> <p className="detail-info-wall">|</p> {date.toLocaleDateString()}</li>
                                <li><Link to="https://wa.me/+541134066776" target='blank' className='detail-info1-btn'><b>Contáctame</b></Link></li>
                            </ul>
                        </div>
                    </div>
                <div className="detail-map-container" data-aos="fade-up">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15592.15810517088!2d-58.39192854918139!3d-34.759435083226265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd2a1814f921f%3A0x1ff108ea8ecb9dd6!2sB1828%20Banfield%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1743967758956!5m2!1ses-419!2sar"  loading="lazy" className='detail-map'></iframe>
                </div>
                <div className="detail-info2-container" data-aos="fade-up">
                    <div className="detail-info2-icons">
                        <ul>
                        <li> <StraightenIcon fontSize='large' sx={{ color: "#B7A15F" }}/><p>{supTotal} m2 Sup. total</p></li>
                        <li><SquareFootIcon  fontSize='large' sx={{ color: "#B7A15F" }}/> <p>{supCubierta} m2 Sup. cubierta</p></li>
                        <li ><GarageIcon fontSize='large' sx={{ color: "#B7A15F" }}/><p>{cochera} cochera/s</p></li>
                        <li><BathtubIcon fontSize='large' sx={{ color: "#B7A15F" }}/><p>{banos} Baño/s</p></li>
                        <li><BedIcon fontSize='large' sx={{ color: "#B7A15F" }}/> <p>{habitaciones} Habitacion/es</p></li>
                        <li><CalendarMonthIcon fontSize='large' sx={{ color: "#B7A15F" }}/><p> {antiguedad} Año/s de antiguedad</p></li>
                        <li><AccountBalanceIcon fontSize='large' sx={{ color: "#B7A15F" }}/><p>{aptoCredito ? "Apto crédito" : "No apto crédito"}</p></li>
                        </ul>
                    </div>
                    <div className="detail-info2-desc">
                        {descripcion}
                    </div>
                    <div className="detail-info2-social">
                        <p>Contacto</p>
                        <ul>
                            <Link to="https://wa.me/+541134066776" target='blank'> <li><WhatsAppIcon fontSize='large' sx={{ color: "#B7A15F" }}/></li> </Link> 
                            <Link to="mailto:patriamayaford@gmail.com" target='blank' > <li><EmailIcon fontSize='large' sx={{ color: "#B7A15F" }}/></li> </Link>
                            <Link to= "https://www.instagram.com/patoamaya/" target='blank'> <li><InstagramIcon fontSize='large' sx={{ color: "#B7A15F" }}/></li> </Link>
                            <Link to= "https://www.facebook.com/Paaaattooo" target='blank'><li><FacebookIcon fontSize='large' sx={{ color: "#B7A15F" }}/></li> </Link>
                            <Link to="https://www.linkedin.com/in/patricio-amaya-dev/" target='blank'><li><LinkedInIcon fontSize='large' sx={{ color: "#B7A15F" }}/></li></Link>
                        </ul>
                    </div>
                </div>
            </div>
                : 
            <div className="loader">
                <Triangle
                    visible={true}
                    height="140"
                    width="140"
                    color="#ffff0077"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />
                    <p>
                        Cargando propiedad
                    </p>

            </div> 
    } 
        </div>
    )
}

export default Detail


