import React from "react";
import { Link } from "react-router-dom";
import {} from '../'

function NavBar() {
  return (
      <header className="primary-header flex">
          <div>
          <img src="/assets/shared/logo.svg" alt='logo' />
          </div>

    <nav >
      <ul className="primary-navigation underline-indicators flex">
        <li><Link className='ff-sans-cond uppercase text-white letter-spacing-2' to='/'><span>00</span>Home</Link></li>
        <li><Link className='ff-sans-cond uppercase text-white letter-spacing-2' to='/destination'><span>01</span>Destination</Link></li>
        <li><Link className='ff-sans-cond uppercase text-white letter-spacing-2'to='/crew'><span>02</span>Crew</Link></li>
        <li> <Link className='ff-sans-cond uppercase text-white letter-spacing-2'to='/technology'><span>03</span>Technology</Link></li>
      </ul>
    </nav>
    </header>
  );
}

export default NavBar;
