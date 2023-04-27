import React from 'react'
import './singleUpdate.scss'
const SingleUpdate = () => {
  function handleClick() {
    window.location.href = 'tel:+1234567890';
  }
  return (
    <>
        <div className="single-update-card shadow-lg">
            <div className="level1">
                <img className='img' src={'https://lh3.googleusercontent.com/p/AF1QipOnx_x7CfJHLRHmXPv_OoRWxSLfTvRd12ftuzlJ=w1280-h1280-p-no-v1'} alt="" />
            </div>
            <div className="level2 my-3">
              Posted on April 25, 2023
            </div>
            <div className="level3">Carpet cleaning services specialize in cleaning carpets and may use various methods to clean them. Steam cleaning and dry cleaning are two of the most common methods used in carpet cleaning.</div>
            <div className="level4 cursor-pointer" onClick={handleClick}>CALL NOW</div>
        </div>
    </>
  )
}

export default SingleUpdate