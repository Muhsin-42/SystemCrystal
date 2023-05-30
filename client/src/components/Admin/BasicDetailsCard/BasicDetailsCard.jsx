import React, { useState } from 'react'
import './basicDetailsCard.scss'
import { Link } from 'react-router-dom'
import EditBasicDetails from './EditBasicDetails';
const BasicDetailsCard = ({data,text}) => {

  const [toggleEdit,setToggleEdit] = useState(false);

  const handleToggle = () =>{
    setToggleEdit(!toggleEdit);
  }

  return (
    <>

      <div className="basic-det-card shadow-lg ">
        <span className=" fs-5 text-secondary">EMAIL : {data.email}</span>
        <span className=" fs-5 text-secondary">PHONE 1 : {data.phone1}</span>
        <span className=" fs-5 text-secondary">PHONE 2 : {data.phone2}</span>
        <span className="title fs-3">{text}</span>
        <button className='btn btn-outline-danger m-3' data={data} onClick={()=>setToggleEdit(!toggleEdit)}>Edit</button>

      </div>
        {
          toggleEdit && 
            <EditBasicDetails data={data} handleToggle={handleToggle} />
        }
    </>
  )
}

export default BasicDetailsCard

