import React from 'react'

function FeaturedItems() {
  return (
    <div>
      <h1 className='text-center m-3'>Featured Items</h1>
      <div className='container-xl d-flex flex-wrap justify-content-center'>
        <div className='card m-2' style={{ width: 400 }}>
          <img src='vegasStrong1.jpg' alt='' className='card-img-top' />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href='#' className='btn btn-danger'>
              View Item
            </a>
          </div>
        </div>
        <div className='card m-2' style={{ width: 400 }}>
          <img src='vegasStrong1.jpg' alt='' className='card-img-top' />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href='#' className='btn btn-danger'>
              View Item
            </a>
          </div>
        </div>
        <div className='card m-2' style={{ width: 400 }}>
          <img src='vegasStrong1.jpg' alt='' className='card-img-top' />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href='#' className='btn btn-danger'>
              View Item
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedItems
