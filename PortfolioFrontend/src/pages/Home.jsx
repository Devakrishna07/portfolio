import React, { useRef, useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';
import HomePagedata from '../utils/HomePagedata';
import pic from '../assets/profilepic.png';
import Navbar from '../components/Navbar';

function Home() {
  const { name, Welcome_txt, roles, button1clr, backgroundColor, profilePic } = HomePagedata;

  const homeRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.6, // Visible when 60% of #home is in view
      }
    );

    if (homeRef.current) observer.observe(homeRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
    };
  }, []);

  return (
    <div>
      {showNavbar && <Navbar />} {/* Show navbar only when home section is visible */}

      <div
        id="home"
        ref={homeRef}
        style={{ backgroundColor }}
        className="w-screen min-h-screen flex flex-col-reverse md:flex-row items-center justify-evenly"
      >
        {/* Left section */}
        <div className="flex flex-col items-start justify-center m-4 p-2">
          <h1 className="text-white text-3xl md:text-6xl">{Welcome_txt}</h1>
          <h1 className="text-[#C7B830] text-3xl md:text-6xl font-bold">
            <ReactTyped strings={[name]} typeSpeed={90} />
          </h1>
          <h1 className="text-white text-xl md:text-2xl mt-1">
            <ReactTyped strings={roles} typeSpeed={90} backSpeed={50} loop />
          </h1>
          <button
            style={{ backgroundColor: button1clr }}
            className="text-white m-4 p-2 rounded-md self-center md:self-start"
          >
            My Resume
          </button>
        </div>

        {/* Right section */}
        <div className="flex flex-col items-center justify-center h-64 m-0 p-0">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 overflow-hidden">
            <img
              src={profilePic}
              alt="profile"
              className="w-full h-full object-fill h-200 w-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
