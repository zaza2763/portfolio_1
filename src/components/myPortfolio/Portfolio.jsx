import React from 'react'
import './Portfolio.scss'
import Carousel from 'react-bootstrap/Carousel';
import fotoPortfolio from './../../myPortfolioFoto'

function Portfolio() {
  return (
   
    <div className='portfolio' id='portfolio_marker'>
      <h2 className='portfolio-title'> My portfolio</h2>
      <div className='portfolio-slider'>
        <Carousel>
        {
          fotoPortfolio.map((foto,index) =>(
               <Carousel.Item key={index}>
                  <img
                    className='carousel-img'
                    
                    src={foto.item}
                    alt=''
                  />
                  <Carousel.Caption>
                    <p><a href="https://github.com/zaza2763?tab=repositories">my git</a></p>
                  </Carousel.Caption>
                </Carousel.Item>
            )
          )
        }
        </Carousel>
      </div>
    </div>
  );
}

export default Portfolio;


