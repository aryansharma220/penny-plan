import React, { Suspense } from 'react'
import DashboardPage from './page'
import {BarLoader} from 'react-spinners'

const DashboardLayout = () => {
  return (
    <div className='px-5 '>
      <div>
        <h1 className='text-6xl mb-5 font-bold gradient-title'>Dashboard</h1>
      </div>
      <Suspense fallback={<BarLoader color="#36d7b7" width={"100%"} className='mt-4'/>}>
      <DashboardPage />
      </Suspense>
    </div>
  )
}

export default DashboardLayout