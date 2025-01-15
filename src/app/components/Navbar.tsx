import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-orange-400 text-black text-2xl flex justify-between center w-full h-12 hover:text-blue-500 '>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/service">Service</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Navbar
