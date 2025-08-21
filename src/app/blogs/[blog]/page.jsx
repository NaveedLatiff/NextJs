import Navbar from '@/app/Components/Navbar';
import { notFound } from 'next/navigation';
import React from 'react'

// Rendering & Generation Types (4 main concepts)

// 1. CSR (Client Side Rendering)
//    - Server blank HTML + JS deta hai
//    - Browser JS run karke HTML banata hai

// 2. SSR (Server Side Rendering)
//    - Server har request par HTML generate karta hai
//    - Client ko ready-made HTML milti hai

// 3. SSG (Static Site Generation)
//    - Build time par HTML generate hoti hai
//    - Har request par wahi pre-built HTML milti hai

// 4. ISR / DSG (Incremental Static Regeneration / Dynamic SSG)
//    - Pehle static (SSG) jaisa serve hota hai
//    - Lekin background me page re-generate bhi hota hai



// We can convert a dynamically rendered page into a statically rendered page  example given below //
export  function generateStaticParams(){
    return[
        // Key should be same as file name
        // It will statically rendered the blog 1 , 2 and 3
       {blog:'1'},
       {blog:'2'},
       {blog:'3'} 
    ]
}


export async function generateMetadata({params}){
    let {blog}=await params
    if(blog > 3 || !/^\d+$/.test(blog)){
        return {
            title:{
                absolute:"NOT FOUND"
            }
        }
    }
    return {
        title:`BLOG-${blog}`
    }
    
}


const page = async ({ params }) => {
    const { blog } = params;
    if (!/^\d+$/.test(blog)) {
    notFound();
  }
  const blogId = parseInt(blog);
  if (blogId > 3) {
    notFound();
  }
    return (
        <div className='min-h-screen bg-black text-white '>
            <Navbar/>
        <h1 className='pt-6'>Blog {blogId}</h1>
        </div>
    )
}

export default page
