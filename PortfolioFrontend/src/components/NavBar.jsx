import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/profilelogo.png';

const Navbar = () => {
  const navItems = ['home', 'about', 'projects', 'contact'];
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setIsTop(true); // Transparent at top
      } else {
        setIsTop(false); // Solid background when scrolled down
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isTop ? 'bg-transparent' : 'bg-black bg-opacity-90 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={logo} alt="myPortfolio" className="h-20 w-auto" />
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer text-white hover:text-yellow-400 transition"
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
