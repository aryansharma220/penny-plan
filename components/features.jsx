import { featuresData } from '@/data/landing'
import React from 'react'

const Features = () => {
  return (
    <div className='px-20 py-10'>
      <div className='flex flex-col gap-10'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-white'>Everything You Need To Manage Your Finances</h1>
        </div>
        <div className='grid grid-cols-3 gap-x-20 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {featuresData.map((item, index) => (
            <div className='flex flex-col min-h-60 gap-6 items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-white/80 shadow-lg p-5 rounded-md  hover:scale-90 transition-all duration-300 ease-in' key={index}>
              <div className='text-emerald-500'>{item.icon}</div>
              <div className='text-2xl font-bold text-gray-700'>{item.title}</div>
              <div className='text-center text-gray-600'>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features