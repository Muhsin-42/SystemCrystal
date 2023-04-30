import React from 'react'
import './basicDetailsCard.scss'
import { Link } from 'react-router-dom'
const BasicDetailsCard = ({data,text}) => {
  return (
    <>

      <div className="basic-det-card shadow-lg ">
        <span className=" fs-5 text-secondary">EMAIL : {data.email}</span>
        <span className=" fs-5 text-secondary">PHONE 1 : {data.phone1}</span>
        <span className=" fs-5 text-secondary">PHONE 2 : {data.phone2}</span>
        <span className="title fs-3">{text}</span>
      </div>
    </>
  )
}

export default BasicDetailsCard