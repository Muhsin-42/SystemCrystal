import React from 'react'
import SingleUpdate from './SingleUpdate'
import './updates.scss';

const Updates = () => {
  return (
    <>
    <section id="updates" className="updates-main bg-white m-0">
      <div className="">
        <div className="horizontal-line" />
          <h3 className='text-center p-3'>UPDATES</h3>
          <div className="updates">
            <SingleUpdate/>
            <SingleUpdate/>
            <SingleUpdate/>
          </div>
      </div>
    </section>
    </>
  )
}

export default Updates