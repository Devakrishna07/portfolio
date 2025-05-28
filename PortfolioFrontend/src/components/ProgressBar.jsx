import React from 'react'

function ProgressBar({label,percentage}) {
  return (
    <div className='mb-4 w-full'>
      <div className='flex justify-between mb-1'>
        <span className='text-sm font-medium text-white'>{label}</span>
        <span className='text-sm font-medium text-white'>{percentage}%</span>
      </div>

      <div className='w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700'>
         <div className='bg-blue-700 h-4 rounded-full'
             style={{width:`${percentage}%` }}></div>
      </div>
    </div>
  )
}

export default ProgressBar
