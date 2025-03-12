import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-gradient-to-r from-emerald-500 to-emerald-900 flex justify-around  p-2 text-white'>
            <div className='font-bold text-2xl flex gap-2'>
                <img src="/search-engine.png" alt="" className='h-8' />
                <Link href="/">&diams; BitLinks &diams;</Link>
            </div>
            <div >
                <ul className='flex gap-2 text-lg'>
                    <Link href="/">Home</Link>
                    <Link href="/About">About</Link>
                    <Link href="/Contactus">Contact us</Link>
                </ul>
            </div>
            <div className='flex gap-3'>
                <Link href="/shorten" ><button className='cursor-pointer border rounded-lg p-[8px] bg-gradient-to-r from-emerald-900 to-emerald-900 shadow-xl'>Try Now</button></Link>
                <Link href="https://github.com/shahidansari310" ><button className='cursor-pointer border rounded-lg p-[8px] bg-gradient-to-r from-emerald-900 to-emerald-900 shadow-xl'>Github</button></Link>
            </div>
        </div>
    )
}

export default Navbar
