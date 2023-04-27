import React from 'react'
import TestimonialCard from './TestimonialCard'
import './testimonials.scss'
const Testimonials = () => {
  return (
    <section id="testimonials" className='testimonials-main my-5'>
        <div className="small-line shadow-lg" />
        <h3 className='text-center m-2'>Testimonials</h3>
        <div className="testimonies">
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
        </div>

        <div className="last-line m-3">
            <span className='cursor-pointer'>
                WRITE A REVIEW 
                <div className="small-line primary-color-bg "/>
            </span>
            <span className='cursor-pointer'>
                READ MORE 
                <div className="small-line primary-color-bg"/>
            </span>
        </div>
        
    </section>
  )
}

export default Testimonials