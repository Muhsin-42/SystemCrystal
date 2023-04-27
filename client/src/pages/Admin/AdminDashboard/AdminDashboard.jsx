import React from 'react'
import DashboardCard from '../../../components/Admin/Card/DashboardCard'
import './adminDashboard.scss'
import AddUpdate from '../Updates/AddUpdate'
const AdminDashboard = () => {
  return (
    <div className=' py-5 admin-dashboard'>
      <div className="my-5 cards">
        <DashboardCard  />
        <DashboardCard  />
        <DashboardCard  />
        <DashboardCard  />
        <DashboardCard  />
        <DashboardCard  />
        <DashboardCard  />
        <AddUpdate/>
      </div>
    </div>
  )
}

export default AdminDashboard