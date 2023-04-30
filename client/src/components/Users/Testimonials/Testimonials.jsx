import React, { useEffect } from 'react'
import TestimonialCard from './TestimonialCard'
import './testimonials.scss'
import AddReview from '../AddReview/AddReview'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../../utils/axios'
import { setReviews } from '../../../Redux/store'
const Testimonials = () => {
    const dispatch = useDispatch();
    const postedReview = useSelector(state=>state.postedReview);
    const reviews = useSelector(state=>state.reviews);

    const getReviews = async () =>{
        try {
            const response = await axios.get('api/user/review');
            if(response.status < 310){
                dispatch(setReviews({reviews: response.data}))
            }
        } catch (error) {
            
        }
    }

    useEffect(()=>{
       getReviews(); 
    },[]);

  return (
    <section id="testimonials" className='testimonials-main my-5'>
        <div className="small-line shadow-lg" />
        <h3 className='text-center m-2'>Testimonials</h3>
        <div className="testimonies">
            {
                reviews?.map((review,index)=>{
                    return (
                        <TestimonialCard key={index} review={review}/>
                    )
                })
            }
        </div>

        <div className="last-line m-3">
            <span className='cursor-pointer'>
                {
                    !postedReview && 
                    <>
                        <AddReview/>
                        <div className="small-line primary-color-bg "/>
                    </>
                }
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