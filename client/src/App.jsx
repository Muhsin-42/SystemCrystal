  import { useState } from 'react'
  // import viteLogo from '/vite.svg'
  import './App.css'

  import NavBar from './components/Users/NavBar/NavBar.jsx'
  import SideBar from './components/Users/SideBar/SideBar.jsx'
  import MenuBar from './components/Users/Menu/MenuBar.jsx'
  import BottomNav from './components/Users/BottomNav/BottomNav.jsx'
  import Home from './pages/Users/Home/Home'
  import routes from './routes/routes'
  import { RouterProvider, createBrowserRouter } from 'react-router-dom'

  function App() {

    const router = createBrowserRouter(routes)

    return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    )
  }

  export default App
