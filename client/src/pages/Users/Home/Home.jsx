import React, { useEffect } from 'react'
import Updates from '../../../components/Users/Updates/Updates'
import Testimonials from '../../../components/Users/Testimonials/Testimonials'
import GallerySection from '../../../components/Users/Gallery/GallerySection'
import ContactUs from '../../../components/Users/ContactUs/ContactUs'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Main from '../../../components/Users/Main/Main'
const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if(location.hash!==''){
      const element = document.querySelector(location.hash);
      if (element) {
        const elementPosition = element.offsetTop - 100;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location.hash]);
  return (
    <>
        <Main/>
        <Updates/>
        {/* <Testimonials  />
        <GallerySection/>   */}
        <ContactUs/>
    </>
  )
}

export default Home