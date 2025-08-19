'use client'
import React, { useState } from 'react'
const page = () => {
  let [count,setCount]=useState(0)
  console.log("hello")
  return (
    <div className='h-[200vh] bg-black text-white pt-[120px]'>
      <button onClick={()=>{setCount(++count)}}>{count}</button>
      <h1>Hello</h1>
    </div>
  )
}

export default page
