import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' white bg-gradient-to-r from-emerald-500 to-emerald-900 flex justify-between p-2 text-white'>
      <div className='font-bold text-xl flex gap-2'>
        <img src="/search-engine.png" alt="" className='h-8' />
        BitLinks
      </div>
      <div >
        <ul className='flex gap-2'>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Shorten</Link>
          <Link href="/">Contact us</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
