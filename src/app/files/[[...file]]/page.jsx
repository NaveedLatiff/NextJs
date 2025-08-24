import Navbar from '@/app/Components/Navbar'
import React from 'react'


export const metadata = {
  title:"FILES "
}  

const page = async ({params}) => {
    let {file}=await params
    // console.log(await params.file)
  return (

   <div className='text-center min-h-screen '>
    <Navbar/>
        <h1 className=' pt-[50px]'>file/{file?.join("/")}</h1>
    </div>
   )
}

export default page
