'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-[#FFFAF5] text-[#385723] min-h-screen">
      {/* Navbar */}
      <header className="w-full bg-[#C7D9B5] shadow-md fixed top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image src="/assets/logo.svg" alt="Logo" width={50} height={50} />
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-6 font-medium">
            <Link href="#about">About</Link>
            <Link href="#menu">Menu</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          {/* Special Button */}
          <Button
            asChild
            className="bg-[#385723] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#94AB71]"
          >
            <Link href="#custom-brunch">Make Your Own</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen pt-24 text-center px-6">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Create Your Perfect Brunch
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl mt-4 max-w-2xl"
        >
          Customize a delicious brunch just the way you like it! Fresh ingredients, unique flavors, and wholesome goodness await.
        </motion.p>

        {/* Images with Animation */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-40 h-56 relative overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src="/assets/brunch-1.jpg"
              alt="Brunch Image 1"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="w-40 h-56 relative overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src="/assets/brunch-2.jpg"
              alt="Brunch Image 2"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="w-40 h-56 relative overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src="/assets/brunch-3.jpg"
              alt="Brunch Image 3"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
