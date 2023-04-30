import React, { useEffect } from 'react'
import DashboardCard from '../../../components/Admin/Card/DashboardCard'
import './adminDashboard.scss'
import AddUpdate from '../Updates/AddUpdate'
import { useDispatch, useSelector } from 'react-redux'
import { setGallery, setUpdates, setReviews, setBasicDetails } from '../../../Redux/store'
import axios from '../../../utils/axios'
import BasicDetailsCard from '../../../components/Admin/BasicDetailsCard/BasicDetailsCard'
const AdminDashboard = () => {
  const dispatch = useDispatch();
  const token = useSelector((state)=>state.token);
  const basicDetails = useSelector((state)=>state.basicDetails);
  const updates = useSelector((state)=>state.updates);
  const gallery = useSelector((state)=>state.gallery);
  const reviews = useSelector((state)=>state.reviews);
  
  const getAllUpdates = async ()=>{
    try {
      const response = await axios.get('api/admin/update',{
        headers :{
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${token}`
        }
      })
      console.log('se', response.data)
      dispatch(setUpdates({updates:response.data}));
      
    } catch (error) {
      console.log('eee32', error)
    }
  }
  const getGallery = async ()=>{
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
  const getReviews = async () =>{
    try {
        const response = await axios.get('api/user/review');
        if(response.status < 310){
            dispatch(setReviews({reviews: response.data}))
        }
    } catch (error) {
        
    }
  }
  const getBasicDetails = async () =>{
    try {
        const response = await axios.get('api/admin/basicDetails');
        if(response.status < 310){
          console.log('res ',response.data)
          dispatch(setBasicDetails({basicDetails: response.data}))
        }
    } catch (error) {
        
    }
  }

  useEffect(()=>{
    getAllUpdates();
    getGallery();
    getReviews();
    getBasicDetails();
  },[]);

  console.log(basicDetails)
  return (
    <div className=' py-5 admin-dashboard'>
      <div className="my-5 cards">
        <DashboardCard data={updates} text={'updates'} link={'/admin/updates'} />
        <DashboardCard data={gallery} text={'gallery'} link={'/admin/gallery'}/>
        <DashboardCard data={reviews} text={'testimonials'} link={'/admin/testimonials'}/>
        <BasicDetailsCard data={basicDetails} text={'Basic Details'} />
      </div>
    </div>
  )
}

export default AdminDashboard