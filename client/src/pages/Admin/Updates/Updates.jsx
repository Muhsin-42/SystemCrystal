import React, { useEffect, useState } from 'react'
import AddUpdate from './AddUpdate'
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../utils/axios';
import { setUpdates } from '../../../Redux/store';
import moment from 'moment';
import Swal from 'sweetalert2'
import { ref, deleteObject } from 'firebase/storage'
import { storage } from '../../../firebase/firebase'
const Updates = () => {

  const dispatch = useDispatch();
  const updates = useSelector((state)=>state.updates);
  const currentUser = useSelector((state)=>state.user);
  const token = useSelector((state)=>state.token);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUpdates = updates?.slice(indexOfFirstPost, indexOfLastPost);

  const getAllUpdates = async ()=>{
    try {
      const response = await axios.get('api/admin/update',{
        headers :{
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${token}`
        }
      })
      console.log(response.data)
      dispatch(setUpdates({updates:response.data}));
      setTotalPages(Math.ceil(updates.length / 10)); 

    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getAllUpdates();
  },[]);

  const deleteUpdate = async (id,imageUrl)=> {
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
          const storageRef = ref(storage, imageUrl);
          const imageRef = ref(storage, `updates/${storageRef.name}`);
          const result = await axios.delete(`api/admin/update/${id}`,{
            headers :{
              'Content-Type' : 'application/json',
              'Authorization' : `Bearer ${token}`
            }
          })
          if(result.status < 300){
            deleteObject(imageRef)
            dispatch(setUpdates({ updates: updates.filter(update => update._id !== id) }));
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
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>

    <div className='mt-5 pt-5 px-2'  style={{ overflowX: 'auto' }}> 
          <table className='table table-striped' style={{
            // overflowX: 'scroll'
          }}>
      <thead className='thead-dark'>
        <tr>
          <th>No.</th>
          <th>Image</th>
          <th>Description</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {updates.map((update, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td><img src={update.image} height={50} width={50} alt="post" /></td>
            <td style={{ minWidth : '200px'}}>{update.content.slice(0,50)}...</td>
            <td>{ moment(update?.createdAt).format('MMMM DD, YYYY')}</td>
            <td>
              <button className='btn btn-outline-danger' onClick={() => deleteUpdate(update?._id,update?.image)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <AddUpdate/>
    </>
  )
}

export default Updates