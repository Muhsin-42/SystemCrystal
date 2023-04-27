import React from 'react'
import './adminNavBar.scss'
import './main.js'
import MenuBar from '../Menu/MenuBar'
import { Link } from 'react-router-dom'
import { setLogout } from '../../../Redux/store'
import { useDispatch } from 'react-redux'
function AdminNavBar() {
    const dispatch = useDispatch();
  return (
    <>
      <nav id="navbar" className="navbarM ">
        <div className="left-nav">
            <MenuBar />
            <a data-scroll="home" href="#home" className="active mx-5 fs-3 truncate"> ADMIN @ SYSTEM CRYSTAL </a>
        </div>
        <div className="right-nav">
          <Link onClick={()=>dispatch(setLogout())} className='mx-2' data-scroll="about" to="#about"> Logout</Link>
        </div>
      </nav>
    </>
  )
}

export default AdminNavBar