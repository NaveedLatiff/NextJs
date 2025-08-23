"use client"

import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hydration from './Components/Hydration'
const page = () => {
  let [count,setCount]=useState(0)
  console.log("hello")
  return (
    <>
    <Navbar/>
    <div className='h-[200vh] bg-black text-white pt-[120px]'>
    <Hydration/>
    <br />
    <br />
      <button onClick={()=>{setCount(++count)}}>{count}</button>
      <h1>Hello</h1>
    
    </div>
    </>
  )
}

export default page
