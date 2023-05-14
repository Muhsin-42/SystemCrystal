import React, { useState } from 'react';
import './bottomNav.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const BottomNav = () => {

  const dispatch = useDispatch();
  const basicDetails = useSelector(state=>state.basicDetails);


  function handleCallClick() {
    window.open(`tel:9744700014`);
  }
  function handleDirectionClick() {
    window.open(`https://goo.gl/maps/B7qNTox1sQFSg2j7A`);
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
