import React, { useState } from 'react';
import './bottomNav.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const BottomNav = () => {

  const dispatch = useDispatch();
  const basicDetails = useSelector(state=>state.basicDetails);


  function handleCallClick() {
    window.open(`tel:${basicDetails?.phone1}`,'_blank');
  }
  function handleDirectionClick() {
    window.open(`${basicDetails?.addressurl}`,'_blank');
  }
  return (
    <div className="bottom-navigation">
      <Link to="#home">Home</Link>
      <Link to="#about" onClick={handleCallClick}>Call</Link>
      <Link to="#contact" onClick={handleDirectionClick}>Direction</Link>
    </div>
  );
};

export default BottomNav;
