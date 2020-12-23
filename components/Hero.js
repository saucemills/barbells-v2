import React from 'react'

function Hero() {
  return (
    <>
      <div className='card m-0'>
        <img
          className='card-img img-fluid'
          style={{ opacity: 0.9 }}
          src='hero.jpg'
          alt='hero'
        />
        <div className='card-img-overlay text-center d-flex flex-column align-items-center justify-content-end mb-3'>
          <h1 className='card-text text-white text-bolder'>
            HUSTLE IN BUSINESS,
            <br /> GRIND IN FITNESS
          </h1>
          <button className='card-text btn btn-outline-light'>SHOP NOW</button>
        </div>
      </div>
    </>
  )
}

export default Hero
