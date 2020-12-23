import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='d-flex justify-content-between container-xl mx-auto'>
        <div className='left'>
          <Link href='/'>
            <a className='navbar-brand fs-2 fw-bold' href='#'>
              <img src='/logo.svg' alt='logo' className='d-inline-block px-2' />
              Barbells and Briefcases
            </a>
          </Link>
        </div>
        <div className='right'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <Link href='/about'>
                <a className='btn btn-outline-light m-3' href='#'>
                  About Us
                </a>
              </Link>
              <Link href='/podcast'>
                <a className='btn btn-outline-light m-3' href='#'>
                  Podcasts
                </a>
              </Link>
              <Link href='/shop'>
                <a className='btn btn-outline-light m-3' href='#'>
                  Shop
                </a>
              </Link>
              <div class='dropdown'>
                <button
                  class='btn btn-outline-light m-3 dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Hello, Guest
                </button>
                <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                  <li>
                    <Link href='/login'>
                      <a class='dropdown-item' href='#'>
                        Login
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/register'>
                      <a class='dropdown-item' href='#'>
                        Register
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
