import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom'
const DashboardCard = ({data,text,link}) => {
  return (
    <>

    <Link to={link}>
      <div className="dashboard-card shadow-lg ">
        <span className="number fs-4 text-secondary">{data.length}</span>
        <span className="title fs-3">{text}</span>
      </div>
    </Link>
    </>
  )
}

export default DashboardCard