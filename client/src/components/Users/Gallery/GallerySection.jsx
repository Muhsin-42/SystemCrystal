import React, { useEffect } from 'react'
import './gallerySection.scss'
import { getStorage, ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import { storage } from '../../../firebase/firebase'
import { setGallery } from '../../../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const GallerySection = () => {

  const gallery = useSelector((state)=>state.gallery)
  const dispatch = useDispatch()

  const getGallery = async ()=>{
    try{
      const galleryRef = ref(storage, 'gallery');
      let galleryList = [];
      
      listAll(galleryRef)
        .then(async (res) => {
          const itemPromises = res?.items?.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            const metadata = await getMetadata(itemRef);
            const uploadDate = metadata.customMetadata.uploadDate;
            const data = { url, uploadDate };
            galleryList.unshift(data);
          });
      
          await Promise.all(itemPromises);
          galleryList.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
          dispatch(setGallery({ gallery: galleryList }));
        })
        .catch((error) => {
          console.error('Error listing images in gallery:', error);
        });
  
    } catch (error) {
      
    }
  }


  useEffect(()=>{
    getGallery();
  },[])



  return (
    <section id='gallery' className='gallery-section m-5'>
        <div className="small-line shadow-lg" />
        <h3 className='text-center m-2'>Gallery</h3>
        <div className="images">
          {
            gallery?.map((image,index)=>{
              return (
                <LazyLoadImage
                  key={image.url}
                  src={image.url}
                  alt='loading image'
                  position="top"
                  effect="blur"
                  width={335} // Adjust the width as needed
                  height={335} // Adjust the height as needed
                />
              )
            })
          }
        </div>
    </section>
  )
}

export default GallerySection