import React from 'react'
import './singleUpdate.scss'
import moment from 'moment'
const SingleUpdate = ({update}) => {
  function handleClick() {
    window.location.href = 'tel:9744700014';
  } 
  return (
    <>
        <div className="single-update-card shadow-lg">
            <div className="level1">
                <img className='img' src={`${update?.image}`} alt="loading image" />
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