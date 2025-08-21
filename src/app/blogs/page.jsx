import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from '../Components/Navbar'


export const metadata = {
    title:"BLOGS"
}  

const page = () => {
  return (
    <div className='h-[200vh] bg-black text-white '>
        <Navbar/>
      <h1 className='pt-[120px]'>I am Blog Page</h1>
      <Link href='/blogs/1'><p>Blog 1</p></Link>
      <Link href='/blogs/2'><p>Blog 2</p></Link>
      <Link href='/blogs/3'><p>Blog 3</p></Link>

    </div>
  )
}

export default page
