'use client'
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Fraunces } from 'next/font/google';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const fraunces = Fraunces({
    subsets : ['latin'],
    weight: ['400', '600'],
  })
  //@ts-ignore
  const Card = ({ card , index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
        }}
        viewport={{ 
          once: true,
          margin: "-100px"  // Starts animation slightly before card enters viewport
        }}
        transition={{ 
          duration: 0.8,
          delay: index * 0.2,  // Stagger effect based on card index
          ease: [0.25, 0.1, 0.25, 1]  // Custom easing for smoother motion
        }}
        className='relative 2xl:h-[600px] 2xl:w-[400px] max-h-fit text-primary_color rounded-xl'
      >
        {/* Image container taking up top portion */}
        <div className="aspect-w-16 aspect-h-9 w-full">
        <img
            src={card.imgSrc}
            alt={card.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
  
        {/* Content container */}
        <motion.div 
          className="2xl:p-6 p-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: (index * 0.2) + 0.3  // Slightly delayed after card appears
          }}
        >
          <h5 className="2xl:text-xl font-semibold mb-3">{card.title}</h5>
          <p className="2xl:text-lg text-sm text-primary_color">{card.description}</p>
          <button className='text-primary_color font-extralight mt-4 flex items-center justify-center'>Order now <ArrowRight className='h-5 w-6'/></button>
        </motion.div>
      </motion.div>
    );
  };

export default function Cards() {


  const cards = [
    {
      title: 'KALE CAESAR',
      description:
        'Roasted chicken, tomatoes, parmesan crisps, shaved parmesan, shredded kale, chopped romaine, lime squeeze, caesar',
      imgSrc: '/assets/brunch.avif',
    },
    {
      title: 'GUACAMOLE GREENS',
      description:
        'Roasted chicken, avocado, tomatoes, pickled onions, shredded cabbage, tortilla chips, spring mix, chopped romaine, lime squeeze, lime cilantro jalapeño vinaigrette',
        imgSrc: '/assets/brunch.avif',
    },
    {
      title: 'BUFFALO CHICKEN',
      description:
        'Blackened chicken, pickled onions, tomatoes, raw carrots, cilantro, blue cheese, za’atar breadcrumbs, shredded kale, chopped romaine, sweetgreen hot sauce, caesar',
        imgSrc: '/assets/brunch.avif',
    },
  ];

  return (
    <div className=" flex items-center justify-center flex-col gap-10 py-10 bg-secondary_color" id='menu'>
        <h1 className={'text-6xl '+ fraunces.className } >Menu</h1>
        <div className='md:grid grid-cols-3 gap-10 hidden p-10 2xl:px-40'>
        {
            cards.map((card,index)=>(
                <Card key={index} card={card} index={index} />
            ))
        }
        </div>
        <Carousel className='md:hidden p-10'>
          <CarouselContent>
            {
              cards.map((card,index)=>(
                  <CarouselItem className=''>
                      <div className="aspect-w-16 aspect-h-9 w-full">
                        <img src={card.imgSrc} className='w-full h-full object-cover'/>
                      </div>
                      <div className='mt-10'>
                        <h5 className="text-xl font-semibold mb-3">{card.title}</h5>
                        <p className="text-primary_color">{card.description}</p>
                        <button className='text-primary_color font-extralight mt-4 flex items-center justify-center'>
                          Order now <ArrowRight className='h-5 w-6'/></button>
                      </div>
                  </CarouselItem>
              ))
            }
          </CarouselContent>
    </Carousel>
    </div>
  );
}

const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50
    },
      //@ts-ignore
    onscreen: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
        delay: index * 0.2
      }
    })
  };
  
  // Alternative Card with spring animation
    //@ts-ignore
  const SpringCard = ({ card, index }) => {
    return (
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, margin: "-100px" }}
        custom={index}
        className='relative h-96 w-96 bg-[#223515] rounded-xl overflow-hidden group'
      >
        {/* Image with hover effect */}
        <div className="relative h-1/2 w-full overflow-hidden">
          <Image
            src={card.imgSrc}
            alt={card.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 384px"
            priority={index < 2} // Prioritize loading first two images
          />
        </div>
  
        {/* Content with slide-up effect */}
        <motion.div 
          className="p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            bounce: 0.3,
            delay: (index * 0.2) + 0.3 
          }}
        >
          <h5 className="text-xl font-semibold mb-3">{card.title}</h5>
          <p className="text-gray-300">{card.description}</p>
        </motion.div>
      </motion.div>
    );
  };