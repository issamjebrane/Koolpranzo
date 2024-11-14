'use client'

import Cards from "@/components/Cards";
import Hero from "@/components/Hero";

import Nav from "@/components/Nav";

export default function Home() {


  return (
    <main>
        <Nav pageName="none"/>
      <section className="bg-cover bg-center md:px-24 bg-no-repeat  2xl:bg-desktop xl:bg-mini-desktop bg-mobile">
        <Hero/>
      </section>
      <Cards/>
    </main>

  );
}
