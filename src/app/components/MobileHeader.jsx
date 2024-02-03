'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { MobileNav } from './MobileNav';
import Image from 'next/image';

export const HeaderMobile = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuBtnClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
        <header className='absolute z-10 top-[24px] w-full lg:hidden'>
            <div className="container">
                <div className='py-[8px] px-[18px] flex justify-between items-center rounded-[16px]'>
                <button type='button' onClick={menuBtnClick}>
                    <Image src="/iconMenu.svg" width={64} height={64} alt='menu'/>
                </button>
                 <Link href="/" className='text-white'>Vitaly S.</Link>
                </div>
            </div>
            {menuOpen && <MobileNav closeMenuBtn={menuBtnClick}/>}
        </header>
  )
}