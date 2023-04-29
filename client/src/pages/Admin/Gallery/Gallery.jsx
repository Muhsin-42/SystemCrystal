import React, { useEffect, useState } from 'react'
import AddImage from './AddImage'
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../utils/axios';
import { setGallery, setUpdates } from '../../../Redux/store';
import moment from 'moment';
import Swal from 'sweetalert2'
import { getStorage, ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import { storage } from '../../../firebase/firebase'

const Gallery = () => {

  const dispatch = useDispatch();
  const gallery = useSelector((state)=>state.gallery);
  const currentUser = useSelector((state)=>state.user);
  const token = useSelector((state)=>state.token);

  const getAllUpdates = async ()=>{

    try{
      const galleryRef = ref(storage, 'gallery');
      let galleryList = [];
      
      listAll(galleryRef)
        .then(async (res) => {
          const itemPromises = res.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            const metadata = await getMetadata(itemRef);
            const uploadDate = metadata.customMetadata.uploadDate;
            const data = { url, uploadDate };
            galleryList.unshift(data);
          });
      
          await Promise.all(itemPromises);
          galleryList.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
          console.log('galleryList:', galleryList);
          dispatch(setGallery({ gallery: galleryList }));
        })
        .catch((error) => {
          console.error('Error listing images in gallery:', error);
        });
  
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getAllUpdates();
  },[]);

  const deleteUpdate = async (id)=> {
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
          if(result.status < 300){
            dispatch(setUpdates({ gallery: gallery.filter(gallery => gallery.url !== url) }));
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
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {gallery.map((image, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td><img src={image.url} height={50} width={50} alt="post" /></td>
            <td>{image?.uploadDate}</td>
            {/* <td>{ moment(image?.uploadDate).format('MMMM DD, YYYY')}</td> */}
            <td>
              <button className='btn btn-outline-danger' onClick={() => deleteUpdate(image.url)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <AddImage/>
    </>
  )
}

export default Gallery