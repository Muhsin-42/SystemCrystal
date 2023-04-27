import React from 'react'
import GoogleMapReact from 'google-map-react';
import './contactus.scss'

const ContactUs = () => {
    const center = {
        lat: 37.7749,
        lng: -122.4194
      };
    
      return (
        <>
        <section id='contactus' className="contactus-main my-5">
            <div className="small-line shadow-lg mt-5" />
            <h3 className='text-center mb-5'>Contact us</h3>
            <div className='map' style={{  width: '100%' }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.234717804424!2d54.537475699999995!3d24.3731369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67a75d50c925%3A0xeb77ad6cc8078bad!2sSmart%20Crystal%20Facility%20Management!5e0!3m2!1sen!2sin!4v1682060577092!5m2!1sen!2sin" width={'100%'}  style={{border:0}}  loading="lazy" ></iframe>
            </div>


            <div className="bottom-part m-5">
                <div className="section-1">
                    <span className='title'>CONTACT</span>
                    <button className='px-5 fs-5 my-3'>CALL NOW</button>
                    <span>095 943 9340</span>
                </div>
                <div className="section-2">
                    <span className='title'>ADDRESS</span>
                    <button className='px-5 fs-5 my-3'>GET DIRECTION</button>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit qui iste vitae repudiandae dolores</span>
                </div>
                <div className="section-3">
                    <span className='title'>OPENING HOURS</span>
                    <ul className='my-3'>
                        <li>Mon : 8:00am - 8:00pm</li>
                        <li>Tue : 8:00am - 8:00pm</li>
                        <li>Wed : 8:00am - 8:00pm</li>
                        <li>Thu : 8:00am - 8:00pm</li>
                        <li>Fri : 8:00am - 8:00pm</li>
                        <li>Sat : 8:00am - 8:00pm</li>
                        <li>Sun : 8:00am - 8:00pm</li>
                    </ul>
                </div>
            </div>
        </section>
            </>
      );
}

export default ContactUs