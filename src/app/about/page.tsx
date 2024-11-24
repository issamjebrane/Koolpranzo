'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import Nav from '@/components/Nav';
import { Construction } from 'lucide-react';

const ComingSoon = () => {
  return (
    <>
      <Nav pageName='contact'/>
      <div className="min-h-screen pt-32 bg-primary_color flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <Construction className="w-20 h-20 text-white mx-auto animate-bounce" />
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            A props de nous
          </h1>
          <p className="text-xl text-white/90">
                Notre page a propos de nous est en cours de création.

          </p>
          <p className="text-lg text-white/80">
            En attendant, découvrez nos box signature conçues avec soin pour votre plaisir.
          </p>
          <Button 
            className="bg-white text-primary_color hover:bg-white/90"
            onClick={() => window.location.href = '/'}
          >
            Voir Nos Box
          </Button>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;