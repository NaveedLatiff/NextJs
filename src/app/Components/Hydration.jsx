"use client"

import React, { useEffect, useState } from 'react'

const Hydration = () => {
    // let [num] = useState(Math.random())
    // return (
    //     <>
    //         {/* Here Hydration error will come bcz when the server send html file 
    //       it will load different random number 
    //       and when the nextjs send the Js bundle it willl load different random number */}
    //         <p className='mt-5 text-red-700'>Hydration Example</p>
    //         <h1 className='text-white'>The Random Number is {num}</h1>


    //     </>
    // )

    {/* We can fix it  */ }

    let [num,Setnum] = useState(null)
    // Here we delay setting the random number until the browser loads. On the server, React renders null, 
    // and on the client useEffect sets the random number.
    // //  Since both server and client initially match (null), no hydration error occurs.
         useEffect(()=>{
        Setnum(Math.random())
    },[])
    return (
        <>
            <p className='mt-5 text-red-700'>Hydration Example</p>
            <h1 className='text-white'>The Random Number is {num}</h1>
        </>

    )
}

export default Hydration
