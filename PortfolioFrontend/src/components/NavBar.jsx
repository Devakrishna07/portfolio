import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/profilelogo.png'
const Navbar = () => {
  const navItems = ['home', 'about', 'projects', 'contact'];

  return (
    <nav className="hidden md:block fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img
          src={logo} 
          alt="myPortfolio"
          className="text-xl font-bold h-20 w-auto" />
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer text-white hover:text-blue-500 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
