import "./layout.scss";
import Navbar from "../../components/navbar/navbar"
import { Outlet } from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (
    <div className="layout">
    <div className="navbar">
<Navbar/>
    </div>
    <div className="content">
      <Outlet/>
    </div>
  </div>
  )
}

export default Layout
