'use client'

import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
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
    <main>
        <header className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        xl:px-20 px-6
        ${isScrolled 
          ? 'bg-secondary_color shadow-md text-primary_color' 
          : 'bg-transparent text-secondary_color'}
      `}>
        <div className="py-4 flex  justify-between items-center">
          <Link href="/">
            <Image src="/assets/logo.png" alt="Logo" width={50} height={50} className="rounded-full"/>
          </Link>

          <nav className="hidden md:flex space-x-6 font-bold text-lg ">
            <Link href="#about"  className="hover:border-b-primary_color border-2 border-transparent">About</Link>
            <Link href="#menu" className="hover:border-b-primary_color border-2 border-transparent">Menu</Link>
            <Link href="#contact" className="hover:border-b-primary_color border-2 border-transparent">Contact</Link>
          </nav>

          <Button
            asChild
            className="bg-primary_color text-secondary_color hover:text-primary_color px-4 py-2 rounded-full font-semibold  hover:bg-secondary_color"
          >
            <Link href="#custom-brunch">Make Your Own</Link>
          </Button>
        </div>
      </header>
      <section className="bg-cover bg-center md:px-24 bg-no-repeat  2xl:bg-desktop xl:bg-mini-desktop bg-mobile">
        <Hero/>
      </section>
      <Cards/>
    </main>

  );
}
