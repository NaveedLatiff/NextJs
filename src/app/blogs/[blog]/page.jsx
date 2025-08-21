import { notFound } from 'next/navigation';
import React from 'react'

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
        <h1 className='pt-6'>Blog {blogId}</h1>
        </div>
    )
}

export default page
