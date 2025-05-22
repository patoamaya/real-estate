import './Home.css'
import FormControl from '@mui/material/FormControl'
import { InputLabel, Select, MenuItem, TextField, Button } from '@mui/material'
import depto from '/assets/depto.png'
import casa from '/assets/casa.png'
import local from '/assets/local.png'
import terreno from '/assets/terreno.png'
import { Link } from 'react-router-dom'



const Home = ({datos}) => {
const { handleSubmit, handleChange, noRepeatedCity, noRepeatedProvince} = datos



    return (
        <div>
            <main>
                <section className="home-container-all" data-aos="zoom-in">

                <div className="home-title-search-container" data-aos="fade-up">
                    <h1>Busca tu propiedad ideal.</h1>
                <div className="home-form">
                  <form method='post' onSubmit={handleSubmit}>
                  <FormControl  className='opeacion-container'>
                    <InputLabel>Operacion</InputLabel>
                    <Select
                        labelId="Operacion"
                        autoWidth
                        className='home-input' 
                        label="operacion"
                        name='operacion'
                        defaultChecked
                        onChange={handleChange}
                        defaultValue={''}
                    >
                    <MenuItem value="alquiler">Alquiler</MenuItem>
                    <MenuItem value="venta">Venta</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className='opeacion-container'>
                    <InputLabel>Propiedad</InputLabel>
                    <Select
                        labelId="Propiedad"
                        autoWidth
                        className='home-input' 
                        label="propiedad"
                        name='propiedad'
                        defaultChecked
                        onChange={handleChange}
                        defaultValue={''}
                    >
                    <MenuItem value="casa">Casa</MenuItem>
                    <MenuItem value="departamento">Departamento</MenuItem>
                    <MenuItem value="terreno">Terreno</MenuItem>
                    <MenuItem value="local">Local</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className='opeacion-container'>
                    <InputLabel>Provincia</InputLabel>
                    <Select
                        labelId="provincia"
                        autoWidth
                        className='home-input' 
                        label="provincia"
                        name='provincia'
                        defaultChecked
                        onChange={handleChange}
                        defaultValue={''}
                    >
                    {  
                    noRepeatedProvince.map((dato, index)=>
                        <MenuItem value={dato} key={index}>{dato === 'buenosAires' ? 'Buenos Aires' : dato}</MenuItem>
                    )
                }
                    </Select>
                </FormControl>

                <FormControl className='opeacion-container'>
                    <InputLabel>Ciudad</InputLabel>
                    <Select
                        labelId="ciudad"
                        autoWidth
                        className='home-input' 
                        label="ciudad"
                        name='ciudad'
                        defaultChecked
                        onChange={handleChange}
                        defaultValue={''}
                    >
                    {
                    noRepeatedCity.map((dato, index)=>
                        <MenuItem value={dato} key={index} >{dato}</MenuItem>
                )
            }
                    </Select>
                </FormControl>

                <FormControl className='opeacion-container'>
                    <InputLabel>Moneda</InputLabel>
                    <Select
                        labelId="moneda"
                        autoWidth
                        className='home-input' 
                        label="moneda"
                        name='moneda'
                        defaultChecked
                        onChange={handleChange}
                        defaultValue={''}
                    >
                    <MenuItem value="peso">ARS$</MenuItem>
                    <MenuItem value="dolar">US$</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    className='home-input' 
                    id="ambientes"
                    name='ambientes'
                    label="Ambientes"
                    type="number"
                    onChange={handleChange}
                    />
                <TextField
                    className='home-input' 
                    id="minPrice"
                    name='minPrice'
                    label="Precio minimo"
                    type="number"
                    onChange={handleChange}
                    />
               <TextField
                    id="maxPrice"
                    name='maxPrice'
                    label="Precio maximo"
                    className='home-input' 
                    type="number"
                    onChange={handleChange}
               />

                    <button type='submit' className='home-btn'>Buscar</button>
                  </form> 
                  </div>
                </div>
              </section>
              <section >
                <div className="aboutUs-container" >
                   <div className="aboutUs-cards-container">
                        <div className="card1-house" data-aos="zoom-in">
                            <p>Las mejores casas</p>
                            <Link to="/q?propiedad=casa">
                                <img src={casa} alt="" className='home-card-img'/>
                            </Link>
                        </div>

                        <div className="card2-apartment" data-aos="zoom-in" >
                            <Link to="/q?propiedad=departamento">
                                <img src={depto} alt="" className='home-card-img'/>
                            </Link>
                            <p>Los deptos más lindos</p>
                        </div>

                        <div className="card3-business" data-aos="zoom-in">
                            <p>Los locales más productivos</p>
                            <Link to="/q?propiedad=local">
                                <img src={local} alt="" className='home-card-img'/>
                            </Link>
                        </div>

                        <div className="card4-terrain" data-aos="zoom-in">
                            <Link to="/q?propiedad=terreno">
                                <img src={terreno} alt="" className='home-card-img'/>
                            </Link>
                            <p>Los terrenos más grandes</p>
                        </div>
                   
                   </div>
                </div>
              </section> 
            </main>
        </div>
    )
}

export default Home
