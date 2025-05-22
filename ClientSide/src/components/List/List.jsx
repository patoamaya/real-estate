import React from 'react'
import './List.css'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import UseCaps from '../../../utils/UseCaps'
import { Link } from 'react-router-dom'
const {useCaps} = UseCaps()
import {Triangle} from 'react-loader-spinner'

const List = ({datos}) => {
    let {data, handleSort, currentPage, totalPages, handlePageChange, loading} = datos
    console.log(data.length)
    return (
       <main>
        {
             loading ?
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
                      Cargando propiedades
                    </p>
                </div>
            : !loading && data.length != 0 ?
                <div className='list-all'>
                    <div className="list-container-all">
                        <div className="list-sort-container">
                            <FormControl className='list-sort' >
                                <InputLabel>Ordenar</InputLabel>
                                <Select
                                    labelId="Ordenar"
                                    autoWidth
                                    className='home-input' 
                                    label="Ordenar"
                                    name='ordenar'
                                    defaultChecked
                                    onChange={handleSort}
                                    defaultValue={''}
                                >
                                    <MenuItem value="minPrice">Menor precio</MenuItem>
                                    <MenuItem value="maxPrice">Mayor precio</MenuItem>
                                    <MenuItem value="minSize">Menor m2</MenuItem>
                                    <MenuItem value="maxSize">Mayor m2</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    <div className="list-container">
                        {
                            data.map((dato)=>{
                                let {ciudad, provincia, precio, supTotal, imagenes, moneda, operacion, propiedad, _id} = dato
                                return(
                                    <Link to={`/detail/${_id}`} key={_id}>
                                    <div className='list-card-container'  >
                                        <img src={imagenes[0].url} alt="" className="list-card-img" />
                                        <div className="list-card-info">
                                            <h3>{operacion === 'alquiler' ? 'Alq.' : 'Venta'} <p className='wall'>|</p> {moneda === 'peso' ? "AR$" : "US$"} {precio.toLocaleString()} </h3>
                                            <p className='list-card-info-p'>{useCaps(propiedad)}</p>
                                            <p className='list-card-info-p'>{useCaps(provincia === 'buenosAires' ? 'Buenos Aires' : provincia)}</p>
                                            <p className='list-card-info-p'>{useCaps(ciudad)} </p>
                                            <p className='list-card-info-p'>Superficie total: {supTotal} m2</p>
                                        </div>
                                    </div>
                                </Link>
                                ) 
                            })
                        }
                    </div>
                </div>
                <div className="list-pagination">
                    <Button variant="contained" color="secondary" onClick={()=>{handlePageChange(currentPage - 1)}} disabled={currentPage === 1}>
                    anterior
                    </Button>

                        <h3>{currentPage} / {totalPages}</h3>
                    <Button variant="contained" color="secondary" onClick={()=>{handlePageChange(currentPage + 1)}}  disabled={totalPages === currentPage || data.length < 4}>
                    siguiente
                    </Button>
                </div>
            </div>

    
          : data.length === 0 ?
                <div className="empty-data">
                <p data-aos="zoom-in">No se han encontrado propiedades</p>
                <Link to="/" data-aos="zoom-in">Inicio</Link>
                </div>
                : ""
                }
        </main> 
        )
    }

export default List

