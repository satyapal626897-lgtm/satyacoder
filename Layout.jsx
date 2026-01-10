import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <h1>LOGO</h1>
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Service">Service</Link></li>
            <li><Link to="/Contact">Contact</Link></li>

          </ul>
        </nav>
      </header>

      <Outlet />

      <footer>

        <h1 style={{color:"fuchsia",fontSize:"40px"}}>This is footer</h1>

      </footer>

    </>
  )
}

export default Layout;