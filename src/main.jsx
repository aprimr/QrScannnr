import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Scan from './components/Scan.jsx'
import Generate from './components/Generate.jsx'
import Home from './components/Home.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/scan',
        element: <Scan />
      },
      {
        path:'/generate',
        element:<Generate />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
