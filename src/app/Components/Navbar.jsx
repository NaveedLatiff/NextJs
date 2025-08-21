"use client"

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-end fixed text-white '> 
    <ul className='flex gap-3.5 pr-3.5 '>
        <Link href='/' ><li>Home</li></Link>
        {/* replace={true} */}
        {/* scroll={false} */}
        <Link href='/about'  
         onNavigate={()=>{
            alert("You are in About Page")
        }}
        ><li>About</li></Link>
        <Link href='/contact'><li>Contact</li></Link>
        <Link href='/blogs'>Blogs</Link>
    </ul>
    </div>
  )
}

export default Navbar
