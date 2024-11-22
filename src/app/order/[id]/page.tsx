'use client';
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Phone, X, Play } from 'lucide-react';
import {  boxes } from '@/data/box';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import Nav from '@/components/Nav';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { Label } from '@radix-ui/react-label';
import { Switch } from '@/components/ui/switch';

interface OrderPageProps {
  params: {
    id: string;
  };
}

const Order = ({ params }: OrderPageProps) => {
  const orderDetails = boxes[Number(params.id) - 1];
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const { toast } = useToast()
  const [isChecked, setIsChecked] = useState(false);
  if (!orderDetails) {
    return <div className="min-h-screen flex items-center justify-center">Box not found</div>;
  }

  const allMedia = [...orderDetails.imgSrcs, '/assets/tea.mp4'];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez remplir tous les champs"
      });
      return;
    }
  
    try {
      await emailjs.send(
        'service_tdzwmbg',
        'template_gxdzddd',
        {
          to_name: 'issam jebrane', 
          from_name: formData.name,
          message: `Nouvelle commande:
            Téléphone: ${formData.phone}
            Adresse: ${formData.address}
            boxType: ${orderDetails.title}
            sugar: ${isChecked ? 'yes' : 'no'}
            `
            
        },
        'JWMJl8K_9F_c5Az4c'
      );
  
      toast({
        title: "Commande envoyée!",
        description: "Nous vous contacterons bientôt."
      });
  
      setFormData({ name: '', phone: '', address: '' });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Échec de l'envoi. Réessayez plus tard."
      });
    }
  };


  return (
   <>
   <Nav pageName='contact'/>
    <div className="min-h-screen pt-32 bg-primary_color">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 mb-12">
          {/* Main Media Section */}
          <div className="w-full lg:w-1/3 space-y-4">
            <div 
              className="aspect-square relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setIsZoomed(true)}
            >
              {selectedImage === allMedia.length - 1 ? (
                <video 
                  src={allMedia[selectedImage]}
                  className="w-full h-full object-cover" 
                  controls
                  poster="/assets/tea_thumbnail.avif"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={allMedia[selectedImage]}
                  alt={`${orderDetails.title} - Main Image`}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  width={500}
                  height={500}
                  quality={75}
                  priority
                />
              )}
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2">
              {allMedia.map((media, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`
                    aspect-square rounded-md overflow-hidden cursor-pointer
                    ${selectedImage === index 
                      ? 'ring-2 ring-white' 
                      : 'ring-1 ring-gray-200'
                    }
                    hover:ring-2 hover:ring-white/50 transition-all
                  `}
                >
                  {index === allMedia.length - 1 ? (
                    <div className="w-full h-full relative bg-gray-100">
                      <Image
                        src="/assets/tea_thumbnail.avif"
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                        width={100}
                        height={100}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={media}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      width={100}
                      height={100}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Rest of your existing code remains the same */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold text-white">{orderDetails.title}</h1>
            <div className='text-white'>
                {orderDetails.description.map((item,index) => (
                  <p key={index} className="flex items-start gap-2">
                    <span>{item.emoji}</span>
                    <span>
                      <strong className=' block'>{item.title}</strong>
                      <em>{item.subtitle}</em>
                      {item.description && (
                        <>
                          {item.description}
                          <br/>
                        </>
                      )}
                      {
                        item.ingredients && (
                          <>
                            <br/>
                            <strong>Ingrédients:</strong>
                            <br/>
                            {item.ingredients.map((ingredient,index) => (
                              <span key={index}>
                                {ingredient.emoji} {ingredient.description}
                                <br/>
                              </span>
                            ))}
                          </>
                        )
                      }
                      <br/>
                    </span>
                  </p>
                ))}
              </div>
              <div className="flex text-secondary_color font-medium text-xl items-center space-x-2">
              <Switch
                      onCheckedChange={()=>{
                        setIsChecked(!isChecked)
                      }}

                    />

                  <Label htmlFor="airplane-mode">with sugar?</Label>
                </div>
            <div className="text-2xl font-semibold text-white">
              {orderDetails.price} Dh
            </div>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Commandez via réseau sociaux</h3>
                <div className="space-y-4">
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    onClick={() => window.open('https://www.instagram.com/koolpranzo/')}
                  >
                    <Instagram className="h-5 w-5" />
                    Commandez sur Instagram
                  </Button>
                  
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700"
                    onClick={() => window.open('https://wa.me/+212770949317')}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Commandez sur WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Nous Vous Rappelons</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              placeholder="Votre nom" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full"
              required
            />
            <Input 
              placeholder="Numéro de téléphone" 
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full"
              required
            />
            <textarea 
              placeholder="Adresse de livraison"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full min-h-[100px] border border-gray-300 rounded-md p-2"
              required
            />
            <Button 
              type="submit"
              className="w-full flex items-center justify-center gap-2"
            >
              confirmer la commande
            </Button>
          </form>
        </CardContent>
      </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Image/Video Zoom Dialog */}
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
              {selectedImage === allMedia.length - 1 ? (
                <video 
                  src={allMedia[selectedImage]}
                  className="max-w-full max-h-full" 
                  controls
                  autoPlay
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={allMedia[selectedImage]}
                  alt={`${orderDetails.title} - Zoomed`}
                  className="max-w-full max-h-full object-contain"
                  width={100}
                  height={100}
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
   </>
  );
}

export default Order;