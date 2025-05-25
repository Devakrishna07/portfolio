import React, { useState } from 'react'
import { ReactTyped } from 'react-typed'
import pic from '../assets/profilepic.png'
import NavBar from '../components/NavBar'

function Home() {
  return (
    <div style={{backgroundColor:'#250A6D'}} className="w-screen min-h-screen flex flex-col-reverse md:flex-row items-center justify-evenly">
      <NavBar/>
      {/*Left section */}
      <div className="flex flex-col items-start justify-center m-4 p-2">
        <h1 className="text-white text-3xl md:text-6xl">Hi I'm</h1>
        <h1 className="text-[#C7B830] text-3xl md:text-6xl sm:2xl font-bold">
          <ReactTyped strings={['DEVA PRASAD NR']} typeSpeed={90}/>
        </h1>
        <h1 className="text-white text-xl md:text-2xl mt-1">
          <ReactTyped strings={["Flutter Developer", "Python FullStack Developer", "Flutter|Python FullStack |Developer"]} typeSpeed={90} backSpeed={50} loop={true} />
        </h1>
        <button style={{backgroundColor:'#CBAE35'}} className="text-white m-4 p-2 rounded-md self-center md:self-start ">My Resume</button>
      </div>
      {/* right section */}
      <div className=" flex flex-col items-center justify-center h-64 m-0 p-0">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 overflow-hidden">
          <img src= {pic} alt="profile Image" 
          className="w-full h-full object-fill [clip-path:inset(0_0_0_0)] h-200 w-200" />
        </div>
      </div>
    </div>
  )
}

export default Home
