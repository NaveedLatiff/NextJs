import Likes from '@/app/Components/Likes';
import Navbar from '@/app/Components/Navbar';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react'

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

// 4. ISR (Incremental Static Regeneration )
//    - Pehle static (SSG) jaisa serve hota hai
//    - Lekin background me page re-generate bhi hota hai



// Now this page will only work for statically generated routes (from generateStaticParams).
// Any other dynamic route will show 404 Not Found because dynamicParams = false
export const  dynamicParams=false


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

// This is Incremental Static Regeneration
//statically rendered  page har 5 second baad regenerate hoga
export const revalidate = 5   


// Next.js Dynamic Rendering Modes:

// 1. dynamic = "auto" (default)
//      Next.js khud decide karega page ko statically serve kare ya SSR kare
//      Agar data fetching static ho sakti hai  > StaticSideGeneration
//      Agar fetch per request hai (cookies, headers, no cache)  > SSR

// 2. dynamic = "force static"
//      Hamesha statically generate karega (StaticSideGeneration)
//      Chahe tum fetch SSR waala karo, Next.js ignore karega aur static banayega
//      Best for performance

// 3. dynamic = "force dynamic"
//      Hamesha dynamically render hoga (SSR)
//      Kabhi cache nahi hoga
//      Har request par server par fresh HTML generate hogi

// 4. dynamic = "error"
//      Agar page static nahi ban sakta toh error throw karega
//      Yeh ensure karta hai ke page hamesha static hi ho

// Now the page will be rendered statically at first (SSG).
// But because of revalidate = 5, the page will be re-generated in the background
// every 5 seconds (ISR - Incremental Static Regeneration).

// export const dynamic = "force-static"

// It will not rendered page dynamcially bcz we use use revalidate which will rendered page statically  bcz ,
//  Nextjs revalidate ko priority deta hai we have to remove revalidate if we want to rendered page dynamically 

// export const dynamic='force-dynamic'



export async function generateMetadata({params}){
    let {blog}=await params
    if(blog > 5 || !/^\d+$/.test(blog)){
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
  if (blogId > 5) {
    notFound();
  }
  
    return (
        <div className='min-h-screen  text-center'>
            <Navbar/>
        <h1 className='pt-6'>Blog {blogId}</h1>
        {/*Example of  Streaming In NextJs */}
        <Suspense fallback={<h1 className='mt-7'>Loading Likes...</h1>}>
        <Likes/>
        </Suspense>
        <p className='pt-6 text-amber-400'>{new Date().toLocaleString()}</p>
        </div>
    )
}

export default page
