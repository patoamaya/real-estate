import './Header.css'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../../public/assets/logo.png'


const Header = ({handleNavigate, location}) => {
    return (
        <div className='header-container-all'>
        <header >
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logo} alt="" className='header-logo-img'/>
                    </Link>
                </div>
            <div className="header-items">
                <ul>
                    <Link to="/q?operacion=alquiler">
                    <li>Alquileres</li>
                    </Link>
                    <Link to="/q?operacion=venta">
                    <li>Ventas</li>
                    </Link>
                </ul>
                    <Link to="/q">
                        <button className='header-btn'>Todo</button>
                    </Link>
                </div>
            </div>
        <div className="header-container-mobile">
                <div className="header-select-mobile">
                    <select name="operacion" id="" value={location.pathname === "/" && "operacion"} onChange={handleNavigate}>
                        <option value="operacion">Operacion</option>
                        <option value="alquiler">Alquiler</option>
                        <option value="venta">Venta</option>
                    </select>
                 </div>

                <div className="header-logo-mobile">
                    <Link to="/">
                    <img src={logo} alt="" className='header-logo-img'/>
                    </Link>
                </div>

                <div className="header-all-button-mobile">
                    <Link to="/q">
                        <button className='header-btn'>Todo</button>
                    </Link>
                </div>
            </div>
        </header>
            <Outlet className="outlet"/>
        </div>
    )
}

export default Header
