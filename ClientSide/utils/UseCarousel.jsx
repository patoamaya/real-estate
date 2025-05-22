import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const UseCarousel = ({imagenes})=> {
    return (
      <CarouselProvider
        naturalSlideWidth={65}
        naturalSlideHeight={50}
        totalSlides={imagenes.length}
        className='slider-container'
        >
        <Slider>
           
           {
                imagenes.map((img, index)=>
                    <Slide index={index} key={img.url}>
                        <img src={img.url} alt="" className='detail-img' />
                    </Slide>
                )
            } 
        </Slider>
        <div className="btn-slider-container">

        <ButtonBack className='btn-slider'>Anterior</ButtonBack>
        <ButtonNext className='btn-slider'>Siguiente</ButtonNext>
        </div>
      </CarouselProvider>
    );
    
  }


export default UseCarousel