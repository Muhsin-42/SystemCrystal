import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UnProtectedLayout = ({ children}) => {
  const  user =  useSelector(state => state.user);
    console.log(user)
  if(user) return <Navigate to='/admin'/>
  return children;
};

export default UnProtectedLayout;
