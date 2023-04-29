import React, { useState } from 'react';
import './bottomNav.scss';
import { Link } from 'react-router-dom';
const BottomNav = () => {
  function handleCallClick() {
    window.open('tel:9744700014','_blank');
  }
  function handleDirectionClick() {
    window.open('https://goo.gl/maps/B7qNTox1sQFSg2j7A','_blank');
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
