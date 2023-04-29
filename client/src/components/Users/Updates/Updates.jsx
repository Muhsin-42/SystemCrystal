import React, { useEffect } from 'react'
import SingleUpdate from './SingleUpdate'
import './updates.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setUpdates } from '../../../Redux/store';
import axios from '../../../utils/axios';


const Updates = () => {

  const dispatch = useDispatch();
  const updates = useSelector((state)=>state.updates);
  const token = useSelector((state)=>state.token);

  const getAllUpdates = async ()=>{
    try {
      const response = await axios.get('api/admin/update')
      console.log(response.data)
      dispatch(setUpdates({updates:response.data}));
  
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    getAllUpdates();
  },[]);
  
  console.log('first ',updates)
  return (
    <>
    <section id="updates" className="updates-main bg-white m-0">
      <div className="">
        <div className="horizontal-line" />
          <h3 className='text-center p-3'>UPDATES</h3>
          <div className="updates">
            {
              updates?.map((update)=>{
                return (
                  <SingleUpdate key={update._id} update={update}/>
                )
              })
            }
          </div>
      </div>
    </section>
    </>
  )
}

export default Updates