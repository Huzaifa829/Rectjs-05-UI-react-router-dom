import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import SingleStudent from './pages/SingleStudent.jsx'

const route = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'services',
        element:<Services/>
      },
      {
        path:'singlestudent/:id',
        element:<SingleStudent/>
      },
      {
        path:'*',
        element:<h1>pge not found</h1>
      },
    
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}>

  </RouterProvider>
)
