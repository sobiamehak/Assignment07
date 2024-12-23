import Link from 'next/link'
import React from 'react'

const Header = () => {
  return ( 
    <div>
      <div>
        <ul className='flex justify-center items-center md:gap-8  gap-2 text-sm 
          font-sans font-semibold break-words sm:break-normal
         border-b-2  md:py-3  bg-green-800  text-white py-4 '>
            <h1 className='m-0 md:text-4xl font-serif md:mr-[15rem]  '>Web App</h1>
            <Link href={"/"}>Home
            <li className='hover:text-black'></li></Link>
            <li> Data Fetching</li>
            <li>Technique</li>
    
        </ul>
      </div>
    </div>
  ) 
}

export default Header
