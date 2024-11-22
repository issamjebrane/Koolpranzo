'use client'
import React from 'react'
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const Nav = ({pageName}: {pageName:string}) => {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <header className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        xl:px-20 px-6
        ${isScrolled 
          ? 'bg-secondary_color shadow-md text-primary_color' 
          : 'bg-transparent text-secondary_color'}
      `}>
        <div className=" flex justify-between items-center">
          <Link href="/">
            <Image src="/assets/LOGO_KOOLPR.svg" alt="Logo" width={80} height={80} quality={100} className='rounded-none'/>
          </Link>

          <nav className="hidden md:flex space-x-6 font-bold text-lg ">
            <Link href="about"  className="hover:border-b-primary_color border-2 border-transparent">About</Link>
            <Link href="#menu" className="hover:border-b-primary_color border-2 border-transparent">Menu</Link>
            <Link href="contact" className="hover:border-b-primary_color border-2 border-transparent">Contact</Link>
          </nav>
          <Button
            asChild
            className={`bg-primary_color  text-secondary_color hover:bg-secondary_color hover:text-primary_color px-4 py-2 rounded-none font-semibold ${
                pageName === 'contact' 
                  ? 'bg-secondary_color hover:bg-primary_color hover:text-secondary_color text-primary_color' 
                  : pageName === 'costum' 
                  ? 'hidden' :'bg-primary_color text-secondary_color hover:text-primary_color'
              }`}          >
            <Link href="/custom">Personnalisez</Link>
          </Button>
        </div>
      </header>
  )
}

export default Nav
