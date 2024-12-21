import { workingData } from '@/data/landing'
import React from 'react'

const Working = () => {
  return (
    <div className='py-10'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-white'>How It Works</h1>
        </div>
        <div className='grid grid-cols-3 gap-20 my-10 px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          {workingData.map((item, index) => (
            <div className='flex flex-col gap-10 working-card p-10' key={index}>
              <div className='flex flex-col items-center gap-3 '>
                <div className=' text-emerald-500 font-bold'>{item.icon}</div>
                <div className='text-2xl font-bold text-emerald-400'>{item.title}</div>
              </div>
              <div className='text-center text-gray-100'>{item.description}</div>
            </div>
          ))}
        </div>

    </div>
  )
}

export default Working