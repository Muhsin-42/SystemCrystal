import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../utils/axios';
import {  setReviews } from '../../../Redux/store';
import moment from 'moment';
import Swal from 'sweetalert2'
import { ref, deleteObject } from 'firebase/storage'
import { storage } from '../../../firebase/firebase'
const AdminTestimonials = () => {

  const dispatch = useDispatch();
  const reviews = useSelector((state)=>state.reviews);
  const currentUser = useSelector((state)=>state.user);
  const token = useSelector((state)=>state.token);

  const getReviews = async ()=>{
    try {
      const response = await axios.get('api/user/review')
      if(response.status<310){
        console.log('res ',response.data)
        dispatch(setReviews({reviews:response.data}));
      }
    } catch (error) {
      
      console.log('er ',error)
    }
  }

  useEffect(()=>{
    getReviews();
  },[]);

  const deleteReview = async (id)=> {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await axios.delete(`api/admin/review/${id}`,{
            headers :{
              'Content-Type' : 'application/json',
              'Authorization' : `Bearer ${token}`
            }
          })
          if(result.status < 300){
            dispatch(setReviews({ reviews: reviews.filter(review => review._id !== id) }));
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        }
      })
    } catch (error) {
      
    }
  }

  return (
    <>

    <div className='mt-5 pt-5 px-2'  style={{ overflowX: 'auto' }}> 
          <table className='table table-striped' style={{
            // overflowX: 'scroll'
          }}>
      <thead className='thead-dark'>
        <tr>
          <th>No.</th>
          <th>rating</th>
          <th>review</th>
          <th>username</th>
          <th>email</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map((review, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{review.rating}</td>
            <td style={{ minWidth : '200px'}}>{review.reviewMessage}...</td>
            <td >{review.fullname}</td>
            <td >{review.email}</td>
            <td>{ moment(review?.createdAt).format('MMMM DD, YYYY')}</td>
            <td>
              <button className='btn btn-outline-danger' onClick={() => deleteReview(review?._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  )
}

export default AdminTestimonials