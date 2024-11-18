'use client';
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Phone, X } from 'lucide-react';
import { Box, boxes } from '@/data/box';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import Nav from '@/components/Nav';

interface OrderPageProps {
  params: {
    id: string;
  };
}

const Order = ({ params }: OrderPageProps) => {
  const orderDetails = boxes[Number(params.id) - 1];
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!orderDetails) {
    return <div className="min-h-screen flex items-center justify-center">Box not found</div>;
  }

  return (
   <>
   <Nav pageName='contact'/>
    <div className="min-h-screen  pt-32 bg-primary_color">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Main Image Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            {/* Main Image */}
            <div 
              className="aspect-square relative rounded-xl overflow-hidden  shadow-lg cursor-pointer"
              onClick={() => setIsZoomed(true)}
            >
              <img
                src={orderDetails.imgSrcs[selectedImage]}
                alt={`${orderDetails.title} - Main Image`}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2 ">
              {orderDetails.imgSrcs.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`
                    aspect-square  rounded-md overflow-hidden cursor-pointer
                    ${selectedImage === index 
                      ? 'ring-2 ring-primary_color' 
                      : 'ring-1 ring-gray-200'
                    }
                    hover:ring-2 hover:ring-primary_color/50 transition-all
                  `}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-coverb"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Details Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold text-white">{orderDetails.title}</h1>
            <p className="text-lg text-white">{orderDetails.description}</p>
            <div className="text-2xl font-semibold text-white">
              {orderDetails.price} Dh
            </div>
          </div>
        </div>

        {/* Order Methods Section */}
        <div className="space-y-8 ">
          <h2 className="text-2xl text-white font-semibold text-center">Choose How to Order</h2>
          
          <div className="grid md:grid-cols-2 gap-6 ">
            {/* Social Media Order Card */}
            <Card className="hover:shadow-lg transition-shadow bg-secondary_color">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Order via Social Media</h3>
                <div className="space-y-4">
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    onClick={() => window.open('https://instagram.com/yourhandle')}
                  >
                    <Instagram className="h-5 w-5" />
                    Order on Instagram
                  </Button>
                  
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700"
                    onClick={() => window.open('https://wa.me/yourphonenumber')}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Order on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form Card */}
            <Card className="hover:shadow-lg transition-shadow bg-secondary_color">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Get a Call from Us</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <Input 
                    placeholder="Your Name" 
                    className="w-full"
                    required
                  />
                  <Input 
                    placeholder="Phone Number" 
                    type="tel"
                    className="w-full"
                    required
                  />
                  <Input 
                    placeholder="Delivery Address"
                    className="w-full"
                    required
                  />
                  <Button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Request Call Back
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Image Zoom Dialog */}
      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
        <DialogOverlay className="bg-black/80" />
        <DialogContent className="flex items-center justify-center max-w-[95vw] h-[95vh] p-0 border-none bg-transparent">
          <Button
            variant="ghost"
            className="fixed right-4 top-4 rounded-full w-8 h-8 p-0 bg-white/10 hover:bg-white/20 z-50"
            onClick={() => setIsZoomed(false)}
          >
            <X className="h-4 w-4 text-white" />
          </Button>
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={orderDetails.imgSrcs[selectedImage]}
              alt={`${orderDetails.title} - Zoomed`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
   </>
  );
}

export default Order;