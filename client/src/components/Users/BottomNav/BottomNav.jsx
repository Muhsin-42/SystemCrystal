import React, { useState } from 'react';
import './bottomNav.scss';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
const BottomNav = () => {

  const basicDetails = useSelector(state=>state.basicDetails);


  function handleCallClick() {
    window.open(`tel:${basicDetails?.phone1}`);
  }
  function handleDirectionClick() {
    window.open(`${basicDetails.addressurl}`,'_blank');
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
