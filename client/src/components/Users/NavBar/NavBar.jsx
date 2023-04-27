import React from 'react'
import './navBar.scss'
import './main.js'
import MenuBar from '../Menu/MenuBar'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <nav id="navbar" className="navbarM ">
        <div className="left-nav">
            <MenuBar />
            <a data-scroll="home" href="#home" className="active mx-5 fs-3 truncate"> Smart Crystal Facility Management </a>
        </div>
        <div className="right-nav">
          <Link className='mx-2' data-scroll="about" to="#about"> CALL NOW </Link>
          <Link className='mx-2' data-scroll="work" to="#work"> GET DIRECTION </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar