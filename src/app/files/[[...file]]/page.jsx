import React from 'react'

const page = async ({params}) => {
    let {file}=await params
    // console.log(await params.file)
  return (
   <div className='bg-black text-center min-h-screen '>
        <h1 className='text-white pt-[50px]'>file/{file?.join("/")}</h1>
    </div>
   )
}

export default page
