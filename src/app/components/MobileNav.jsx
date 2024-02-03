import Link from 'next/link'
import React from 'react'

export const MobileNav = ({closeMenuBtn}) => {
  return (
    <nav className='fixed py-[40px] top-0 bg-gradient-to-r from-slate-950 via-violet-950 to-fuchsia-900 w-screen h-screen'>
        <div className="container">
            <button type='button' onClick={closeMenuBtn}><img src="/closeIcon.svg" alt="close" className='absolute right-[24px] top-[24px]'/></button>
            <Link href="/" className='text-2xl text-white flex justify-center mt-5' onClick={closeMenuBtn}>Vitaly S.</Link>
            <ul className='mt-[24px] text-white'>
                <li className='pb-[8px] mb-[24px] border-textLight border-b-[1px]'><Link href="/#about" onClick={closeMenuBtn}>About</Link></li>
                <li className='pb-[8px] mb-[24px] border-textLight border-b-[1px]'><Link href="/#skills" onClick={closeMenuBtn}>My Stack</Link></li>
                <li className='pb-[8px] mb-[24px] border-textLight border-b-[1px]'><Link href="/#projects" onClick={closeMenuBtn}>Projects</Link></li>
                <li className='pb-[8px] mb-[24px] border-textLight border-b-[1px]'><Link href="/#footer" onClick={closeMenuBtn}>Contact me</Link></li>
            </ul>
        </div>
    </nav>
  )
}