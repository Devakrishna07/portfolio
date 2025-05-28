import React from 'react'
import ProgressBar from '../components/ProgressBar'
import pic from '../assets/profilepic-edit.png'

function Skills() {
  return (
    <div className='w-screem min-h-screen bg-gray-900 flex flex-col md:flex-row items-stretch justify-between'>
        <div className='flex flex-col items-center justify-center w-full md:w-1/3 m-4 p-2'>
          <h1 className='text-3xl text-white font-bold'>Skills</h1>
           <div className='w-full m-1 p-10 '>
            <ProgressBar label="HTML" percentage={75} />
            <ProgressBar label="CSS" percentage={90} />
            <ProgressBar label="REACT" percentage={50} />
            <ProgressBar label="TAILWIND CSS" percentage={60} />
            <ProgressBar label="DJANGO" percentage={50} />
            <ProgressBar label="FLUTTER" percentage={40} />
           </div>
        </div>

        <div className='flex flex-col items-center justify-center md:w-1/3 md:m-4 md:p-2 overflow-hidden'>
          <h1 className='text-3xl text-white font-bold'>Education</h1>
          <div className=' m-4 p-2 text-white flex flex-col-reverse md:flex-row'>
            <div>
             <h1 className='md:text-2xl text-white font-semibold'>B.Tech computer science</h1>
             <h2>College of Engineering Poonjar</h2>
             <h3>2022 - 2026</h3>
            </div>
            <div>
              <img src={pic} alt="institution logo" 
              className='w-20 h-aspect-ratio ml-4'/>
            </div>
          </div>

          <div className=' m-4 p-2 text-white flex flex-col-reverse md:flex-row'>
            <div>
             <h1 className='md:text-2xl text-white font-semibold'>B.Tech computer science</h1>
             <h2>College of Engineering Poonjar</h2>
             <h3>2022 - 2026</h3>
            </div>
            <div>
              <img src={pic} alt="institution logo" 
              className='w-20 h-aspect-ratio ml-4'/>
            </div>
          </div>

          <div className=' m-4 p-2 text-white flex flex-col-reverse md:flex-row'>
            <div>
             <h1 className='md:text-2xl text-white font-semibold'>B.Tech computer science</h1>
             <h2>College of Engineering Poonjar</h2>
             <h3>2022 - 2026</h3>
            </div>
            <div>
              <img src={pic} alt="institution logo" 
              className='w-20 h-aspect-ratio ml-4'/>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center w-full md:w-1/3 m-4 p-2'>
          <h1 className='text-3xl text-white font-bold'>certifications</h1>
        </div>
    </div>
  )
}

export default Skills
