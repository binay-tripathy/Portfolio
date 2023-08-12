import React from 'react'
import './Layout.scss';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="page">
        <span className="tags top-tags"> &lt;body&gt; </span>
        <Outlet />
        <span className="tags bottom-tags"> &lt;/body&gt; </span>
      </div>
    </div>
  )
}

export default Layout