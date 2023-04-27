import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedLayout =  ({children})=>{
    const  user =  useSelector(state => state.user);
  
    if(!user) return <Navigate to='/admin/login'/>
    return children;
  }
  

export default ProtectedLayout;
