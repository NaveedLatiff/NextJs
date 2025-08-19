import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='h-[200vh] bg-black text-white '>
      <h1 className='pt-[120px]'>I am Contact Page</h1>
        <Image
        src="/img.jpeg"  
        alt="My photo"
        width={700}
        height={200}
      />
    </div>
  )
}

export default page
