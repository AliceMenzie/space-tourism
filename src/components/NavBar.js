import React, {useState} from "react";
import { Link } from "react-router-dom";
import {} from '../'

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    
    // className={`${isOpen ? 'mobile-nav-toggled' : 'mobile-nav-toggle'}`}

  return (
      <header className="primary-header flex">
          <div>
          <img src="/assets/shared/logo.svg" alt='logo' />
          </div>
    <button className={`${isOpen ? 'mobile-nav-toggled' : 'mobile-nav-toggle'}`}  aria-controls="primary-navigation" aria-expanded={`${isOpen ? true : false}`} onClick={toggle}><span className="sr-only">Menu</span>
        </button>
    <nav>
      <ul id="primary-navigation" className={`underline-indicators flex ${isOpen ? 'primary-navigation' : 'open'}`} >
        <li className="active"><Link className='ff-sans-cond uppercase text-white letter-spacing-2' to='/'><span>00</span>Home</Link></li>
        <li><Link className='ff-sans-cond uppercase text-white letter-spacing-2' to='/destination'><span>01</span>Destination</Link></li>
        <li><Link className='ff-sans-cond uppercase text-white letter-spacing-2'to='/crew'><span>02</span>Crew</Link></li>
        <li> <Link className='ff-sans-cond uppercase text-white letter-spacing-2'to='/technology'><span>03</span>Technology</Link></li>
      </ul>
    </nav>
    </header>
  );
}

export default NavBar;
