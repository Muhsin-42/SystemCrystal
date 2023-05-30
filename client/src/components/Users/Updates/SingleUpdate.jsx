import React from 'react'
import './singleUpdate.scss'
import moment from 'moment'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useSelector } from 'react-redux';

const SingleUpdate = ({update}) => {
  const basicDetails = useSelector(state=>state.basicDetails);

  function handleClick() {
    window.open(`tel:${basicDetails?.phone1}`,'_blank');
  } 
  return (
    <>
        <div className="single-update-card shadow-lg">
            <div className="level1">
                <LazyLoadImage
                  src={`${update?.image}`}
                  alt='loading image'
                  position="top"
                  effect="blur"
                  width={335} // Adjust the width as needed
                  height={335} // Adjust the height as needed
                />
            </div>
            <div className="level2 my-3">
              Posted on { moment(update?.createdAt).format('MMMM DD, YYYY')}
            </div>
            <div className="level3">{update.content}</div>
            <div className="level4 cursor-pointer" onClick={handleClick}>CALL NOW</div>
        </div>
    </>
  )
}

export default SingleUpdate