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
          <Link to="/admin" onClick={toggleMenu}>Dashboard</Link>
          <Link to="/admin/updates" style={{animationDelay: '0.3s'}} onClick={toggleMenu}>Updates</Link>
          <Link to="/admin/testimonials" style={{animationDelay: '0.4s'}} onClick={toggleMenu}>Testimonials</Link>
          <Link to="/admin/gallery" style={{animationDelay: '0.5s'}} onClick={toggleMenu}>Gallery</Link>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
