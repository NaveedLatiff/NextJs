import React from 'react'
import Navbar from '../Components/Navbar'

const loading = () => {
    
  return (
    <div className='min-h-screen bg-black text-white'>
    <Navbar/>
      <p className='pt-6 '>Loading...</p>
    </div>
    
  )
}

export default loading
