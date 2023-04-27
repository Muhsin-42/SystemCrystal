import React from 'react'
import './sideBar.scss'
import './main.js'
function SideBar() {
  return (
    <>
    <aside className="sidebar">
      <header>
        <img src="logo.svg" />
        <span> DataHub </span>
      </header>
      <button>
        <span className="material-symbols-outlined"> home </span>
        <span>Home</span>
      </button>
      <button onclick="handleHeaderClicked('tools')">
        <span className="material-symbols-outlined"> build </span>
        <span>Tools</span>
        <span className="material-symbols-outlined"> expand_more </span>
      </button>
      <div id="tools" className="subnav">
        <div className="subnav-inner">
          <button>
            <span>Documents</span>
          </button>
          <button>
            <span>Editor</span>
          </button>
          <button>
            <span>Themes</span>
          </button>
        </div>
      </div>
      <button onclick="handleHeaderClicked('settings')">
        <span className="material-symbols-outlined"> settings </span>
        <span>Settings</span>
        <span className="material-symbols-outlined"> expand_more </span>
      </button>
      <div id="settings" className="subnav">
        <div className="subnav-inner">
          <button>
            <span>Display</span>
          </button>
          <button>
            <span>Audio</span>
          </button>
          <button>
            <span>Interface</span>
          </button>
          <button>
            <span>Accessibility</span>
          </button>
        </div>
      </div>
      <button>
        <span className="material-symbols-outlined"> account_circle </span>
        <span>Profile</span>
      </button>
      <button>
        <span className="material-symbols-outlined"> logout </span>
        <span>Sign Out</span>
      </button>
    </aside>
    </>
  )
}

export default SideBar