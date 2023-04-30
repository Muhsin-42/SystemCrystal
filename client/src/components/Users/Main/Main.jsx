import React from 'react'
import './main.scss'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <section id="home" className="main-content">
    <section >
    <div className="content-wrapper w-100 text-center ">
      
        <div className='title-home'> Smart Crystal Facility Management</div>

        <span className='d-block'>Cleaners in Kochi</span>
        <span className='d-block'>Open today until 20:00</span>
        <Link to="#updates"><button  className='quote-btn'>GET QUOTE</button></Link>
    </div>
    </section>
</section>
  )
}

export default Main