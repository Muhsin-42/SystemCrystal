import React, { useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom';
import Main from '../../../components/Users/Main/Main'

// Lazy load the components
const Updates = lazy(() => import('../../../components/Users/Updates/Updates'));
const Testimonials = lazy(() => import('../../../components/Users/Testimonials/Testimonials'));
const GallerySection = lazy(() => import('../../../components/Users/Gallery/GallerySection'));
const ContactUs = lazy(() => import('../../../components/Users/ContactUs/ContactUs'));

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
      <>
      <Main />
        <Suspense fallback={<div>Loading...</div>}>
          <Updates />
          <Testimonials />
          <GallerySection />
          <ContactUs />
        </Suspense>
      </>
    </>
  )
}

export default Home