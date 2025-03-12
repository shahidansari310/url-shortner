import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-gradient-to-r from-emerald-500 to-emerald-900 flex justify-around  p-2 text-white'>
            <div className='font-bold text-2xl flex gap-2'>
                <img src="/search-engine.png" alt="" className='h-8' />
                &diams; BitLinks &diams;
            </div>
            <div >
                <ul className='flex gap-2 text-lg'>
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact us</Link>
                </ul>
            </div>
            <div className='flex gap-3'>
                <Link href="/generate" ><button className='cursor-pointer border rounded-full p-[8px] bg-gradient-to-r from-emerald-900 to-emerald-900 shadow-xl'>Try Now</button></Link>
                <Link href="https://github.com/shahidansari310" ><button className='cursor-pointer border rounded-full p-[8px] bg-gradient-to-r from-emerald-900 to-emerald-900 shadow-xl'>Github</button></Link>
            </div>
        </div>
    )
}

export default Navbar
