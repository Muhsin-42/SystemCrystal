  import './App.css'
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
