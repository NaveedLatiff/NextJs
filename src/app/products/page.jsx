import React from 'react'
import API from '../Components/API'
import Navbar from '../Components/Navbar'

const page = async () => {
    let res = await fetch("https://httpbin.org/delay/1")
    let data = await res.json()

    let res2 = await fetch("https://httpbin.org/delay/2")
    let data2 = await res2.json()

    return (
        <>
            <Navbar />
            <div className='min-h-screen bg-black text-white'>
                <p>{JSON.stringify(data)}</p>
                <p>{JSON.stringify(data2)}</p>
            
            </div>
        </>
    )
}

export default page
