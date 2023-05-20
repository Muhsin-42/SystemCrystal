import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react';
import './contactus.scss'
import { setBasicDetails } from '../../../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../utils/axios';

const ContactUs = () => {

    const dispatch = useDispatch();
    const basicDetails = useSelector(state=>state.basicDetails);
    const getBasicDetails = async () =>{
        try {
            const response = await axios.get('api/admin/basicDetails');
            console.log('res ',response)
            if(response.status < 310){
                dispatch(setBasicDetails({basicDetails: response.data}))
            }
        } catch (error) {
            console.log('err ',error)
            
        }
      }

    useEffect(()=>{
        getBasicDetails();
    },[]);

    function handleCallClick() {
        window.open(`tel:${basicDetails?.phone1}`,'_blank');
      }
      function handleDirectionClick() {
        window.open('https://goo.gl/maps/B7qNTox1sQFSg2j7A','_blank');
      }

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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.7254234624943!2d76.34572761479517!3d10.121546692767888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA3JzE3LjYiTiA3NsKwMjAnNTIuNSJF!5e0!3m2!1sen!2sin!4v1682795128060!5m2!1sen!2sin" width={'100%'}  style={{border:0}}  loading="lazy" title="Google Maps Embedded View" ></iframe>
            </div>


            <div className="bottom-part m-5">
                <div className="section-1">
                    <span className='title'>CONTACT</span>
                    <button className='px-5 fs-5 my-3' onClick={handleCallClick}>CALL NOW</button>
                    <span>{basicDetails?.phone1}</span><br />
                    <span>{basicDetails?.phone2}</span>
                </div>
                <div className="section-2 mb-4">
                    <span className='title'>ADDRESS</span>
                    <button className='px-5 fs-5 my-3' onClick={handleDirectionClick}>GET DIRECTION</button>
                    <span>{basicDetails?.address}</span>
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