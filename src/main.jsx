import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='projects/' element={<Projects />}>
        <Route path=':projectid' element={<Projects />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
    </Route>
  ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
