import React from 'react';
import './menu-bar.scss';
import { Link } from 'react-router-dom';

function MenuBar() {
  const toggleMenu = () => document.body.classList.toggle('open');
  return (
    <>
      {/* <button className="burger" onClick={toggleMenu}></button> */}
      <button className="material-symbols-outlined burger" onClick={toggleMenu}> Menu </button>

      <div className="background"></div>
      <div className="menu menu-toggle">
        <div className='nav'>
          <Link to="#home" onClick={toggleMenu}>Home</Link>
          <Link to="#updates" style={{animationDelay: '0.3s'}} onClick={toggleMenu}>Updates</Link>
          <Link to="#testimonials" style={{animationDelay: '0.4s'}} onClick={toggleMenu}>Testimonials</Link>
          <Link to="#gallery" style={{animationDelay: '0.5s'}} onClick={toggleMenu}>Gallery</Link>
          <Link to="#contactus" style={{animationDelay: '0.5s'}} onClick={toggleMenu}>Contact Us</Link>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
