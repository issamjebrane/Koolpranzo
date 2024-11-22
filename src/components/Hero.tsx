import React from 'react'
import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (

<section className="flex flex-col  md:items-left justify-center  min-h-screen px-6 font-medium">
  {/* Animated Heading */}
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8}}
    className="text-5xl md:text-6xl font-bold text-white"
  >
    Wholesome Goodness, <br/>
    Homemade with <i className="font-normal">
          Love
      </i>
  </motion.h1>

  {/* Subtext */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    className="text-lg md:text-xl mt-4 max-w-2xl text-white font-medium"
  >
    Indulge in our handcrafted brunch boxes, packed with fresh pastries 
    and seasonal delights. A perfect slice of happiness delivered to you.
  </motion.p>
  <motion.button           
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    className="text-justify mt-4"
    >
  <Button
      asChild
      className="bg-[#223515] text-white px-4 w-44 md:py-2 rounded-none font-semibold hover:bg-[#94AB71]"
    >
      <Link href="#menu">View Menu</Link>
    </Button>
  </motion.button>
  {/* Images with Animation */}
  {/* <div className="flex flex-wrap justify-center gap-8 mt-10">
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
  </div> */}
</section>
  )
}

export default Hero
