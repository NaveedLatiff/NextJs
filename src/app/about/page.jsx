import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

const page = () => {
    return (
        <div className='h-[200vh] bg-black text-white '>
            <h1 className='mx-auto pt-[120px]'>I am About Page</h1>
            <p className='text-center mt-[20px]'>My Services</p>
            <p><Link href='about/webdev'>Web Development</Link></p>
            <p ><Link href='about/seo'>SEO</Link></p>

            <p className='mx-auto mt-[120vh]'>Testing Scroll</p>
            {/* <Script id="my-script" strategy="beforeInteractive">
                {`console.log("Hello World!")`}
            </Script> */}


        </div>
    )
}

export default page
