import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './assets/MainLayout/MainLayout.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element:<MainLayout></MainLayout>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
