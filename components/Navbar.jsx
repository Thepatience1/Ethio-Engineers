import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div>

<div className='ml-72 w-auto '>
  <ul className='flex space-x-10 text-green-900 font-sans text-xl bg-gray-400- w-auto h-auto p-1 ml-96 mt-6'>
    <Link href='/'><li className=' hover:text-red-600'>Home</li></Link>
    <Link href='/about'><li className=' hover:text-red-600'>About</li></Link>
   <Link href='/contactUs'> <li className=' hover:text-red-600'>ContactUs</li></Link>
   <Link href='/courses'> <li className=' hover:text-red-600'>Courses</li></Link>

  </ul>
</div>

    </div>
  )
}

export default Navbar