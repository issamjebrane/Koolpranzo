'use client'
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { boxes } from '@/data/box';

const montserrat = Montserrat({
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
        margin: "-100px"
      }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="relative w-full max-w-md mx-auto rounded-xl overflow-hidden  "
    >
      {/* Image Carousel */}
      <Carousel className="w-full">
        <CarouselContent>
          {card.imgSrcs.map((imgSrc:string, imgIndex:number) => (
            <CarouselItem key={imgIndex}>
              <div className="relative group">
                {/* Image container with consistent aspect ratio */}
                <div className="relative  overflow-hidden"> {/* 4:3 aspect ratio */}
                  <Image
                    src={imgSrc}
                    alt={`${card.title} - Image ${imgIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={index < 2} // Prioritize loading first two images
                    fill
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content container */}
      <motion.div 
        className="p-4 md:p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: (index * 0.2) + 0.3
        }}
      >
        <h5 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
          {card.title}
        </h5>
        <p className="text-sm md:text-base text-gray-600 mb-4">
          {card.subtitle}
        </p>
        <Link href={`/order/${card.id}`}>
          <button className="flex items-center space-x-2 text-sm md:text-base font-medium text-primary_color hover:text-primary_color/80 transition-colors">
            <span>Order now</span>
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
  };
  
  const cards = boxes;

export default function Cards() {




  return (
    <div className=" flex items-center justify-center overflow-hidden flex-col gap-10 py-10 bg-secondary_color" id='menu'>
        <h1 className={'text-6xl font-bold '+ montserrat.className } >Menu</h1>
        <div className='md:grid grid-cols-2 gap-10 hidden p-10 2xl:px-40'>
        {
            cards.map((card,index)=>(
                <Card key={index} card={card} index={index} />
            ))
        }
        </div>
        <Carousel className="w-full p-4 md:hidden">
        <CarouselContent>
          {cards.map((card, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col space-y-4">
                {/* Image Container */}
                <div className="relative aspect-square w-full overflow-hidden  bg-gray-100">
                  <Image
                    src={card.imgSrcs[0]}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-contain"
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={index < 2} // Prioritize loading first two images
                    fill
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-sm  text-gray-500 line-clamp-2">
                    {card.subtitle}
                  </p>
                  <Link 
                    href={`/order/${card.id}`}
                    className="inline-flex bg-primary_color  text-secondary_color hover:bg-secondary_color hover:text-primary_color px-4 py-2 items-center text-sm font-medium w-fit"
                    style={{ marginTop: "30px" }}
                  >
                    Order now <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='
          absolute top-[-10px] left-[75%] -translate-y-1/2
          bg-primary_color text-secondary_color rounded-none p-2
          shadow-md
          z-10
        '/>
        <CarouselNext className='
          absolute top-[-10px] right-4 -translate-y-1/2
          bg-primary_color text-secondary_color rounded-none p-2
          shadow-md
          z-10
        '/>
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