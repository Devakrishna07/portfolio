import React from 'react'
import pic from '../assets/profilepic-edit.png'

function About() {
  return (
    <div id='about' className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center p-6">
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={pic} // Replace with your image path
            alt="Mary Smith"
            className="rounded-lg object-fill w-auto h-full max-h-[400px] md:h-50"
          />
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-green-400 text-lg font-semibold mt-2 md:mt-0">Who am I?</h2>
          <h1 className='text-2xl md:text-3xl font-bold'>I'm Deva Prasad NR</h1>
          <h1 className="text-2xl md:text-3xl font-bold">
             a Flutter Developer and Python FullStack Developer
          </h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>

          <div className="border-t border-gray-600 pt-4 space-y-2 text-sm">
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1 overflow-hidden p-2 m-2">
              <p><span className="font-semibold">Name:</span> Deva Prasad NR</p>
              <p><span className="font-semibold">From:</span> Irinjalakuda, Thrissur, Kerala</p>
              <p><span className="font-semibold">Email:</span> devaprasadnr2@gmail.com</p>
              <p><span className="font-semibold">Age:</span> 22</p>
            </div>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-8">
              Download CV
            </button>
          </div>
        </div>
    </div>
  );

}

export default About
