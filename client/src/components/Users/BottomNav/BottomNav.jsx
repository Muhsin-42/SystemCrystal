import React, { useState } from 'react';
import './bottomNav.scss';
import { Link } from 'react-router-dom';
const BottomNav = () => {
  function handleCallClick() {
    window.location.href = 'tel:+1234567890';
  }
  function handleDirectionClick() {
    window.location.href = 'https://www.google.com/maps/search/?api=1&query=Space+Needle';
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
