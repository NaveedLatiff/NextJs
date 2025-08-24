"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext } from 'react'
import { themeContext } from '../Context/ThemeContext'

const Navbar = () => {
  let {isDark,toggleTheme}=useContext(themeContext)
  let pathname = usePathname()
  return (
    <div className='flex justify-end fixed text-white bg-red-400 w-screen pr-[30px]'>
      <ul className='flex gap-3.5 pr-3.5 '>
        <Link
          href='/'
          className={pathname === '/' ? "bg-amber-500" : ""}
        ><li>Home</li></Link>
        {/* replace={true} */}
        {/* scroll={false} */}
        <Link
          href='/about'
          className={pathname === '/about' ? "bg-amber-500" : ""}
          onNavigate={() => {
            alert("You are in About Page")
          }}
        ><li>About</li></Link>
        <Link
          href='/contact'
          className={pathname === '/contact' ? "bg-amber-500" : ""}
        ><li>Contact</li></Link>
        <Link
          href='/blogs'
          className={pathname === '/blogs' ? "bg-amber-500" : ""}
        >Blogs</Link>
        <Link
          href='/files'
          className={pathname === '/files' ? "bg-amber-500" : ""}
        >Files</Link>
        <Link
          href='/products'
          className={pathname === '/products' ? "bg-amber-500" : ""}
        >Products</Link>
        <p className='cursor-pointer'
        onClick={toggleTheme}
        >{isDark?"🌞":"🌙"}</p>

      </ul>
    </div>
  )
}

export default Navbar
