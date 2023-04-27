import React, { useState } from 'react';
import './bottomNav.scss';
import { Link } from 'react-router-dom';
import { setLogout } from '../../../Redux/store';
import { useDispatch } from 'react-redux';
const BottomNav = () => {
  const dispatch = useDispatch();

  return (
    <div className="bottom-navigation">
      <Link to="#contact" onClick={()=>dispatch(setLogout())}>Logout</Link>
    </div>
  );
};

export default BottomNav;
