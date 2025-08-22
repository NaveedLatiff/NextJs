import Image from 'next/image'
import React from 'react'
import Navbar from '../Components/Navbar'
import { cookies, headers } from 'next/headers'



export const metadata = {
  title: "CONTACT"
}

// There are many method to make static page dynamic like this page it is static but we will make it dynamic

// First Method 
// export const dynamic="force-dynamic"

const page = async () => {
  //Second Method is  Cookies 
  // const theme = cookies().get("theme")?.value

  // Third Method is  header
  // const lang = headers().get("accept-language")



  return (
    <div className='h-[200vh] bg-black text-white '>
      <Navbar />
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
