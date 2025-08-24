import React from 'react'
import API from '../Components/API'
import Navbar from '../Components/Navbar'

const page = async () => {
    // let res = await fetch("https://httpbin.org/delay/1")
    // let data = await res.json()
    // let res2 = await fetch("https://httpbin.org/delay/2")
    // let data2 = await res2.json()

    
    // Parallel API Calls
    // Now it will take 10 seconds not 19
    let [res1,res2]=await Promise.all([
        fetch("https://httpbin.org/delay/9"),
        fetch("https://httpbin.org/delay/10")
    ])

    let data1=await res1.json()
    let data2=await res2.json()

    return (
        <>
            <Navbar />
            <div className='min-h-screen bg-black text-white'>
                <p>{JSON.stringify(data1)}</p>
                <p>{JSON.stringify(data2)}</p>
            
            </div>
        </>
    )
}

export default page
