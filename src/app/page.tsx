'use client';


import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Outlets from '@/components/sections/Outlets';
import Products from '@/components/sections/Products';
import Contact from '@/components/sections/Contact';
import Feedback from '@/components/sections/Feedback';

export default function Home() {
  // Handle hash navigation with navbar offset
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the '#'
      if (hash) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const navbarHeight = 80; // Navbar height offset
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Handle initial hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Neil Bakery | Fresh Cakes & Bread in Moratuwa</title>
        <meta name="description" content="Neil Bakery offers fresh cakes, breads, and pastries in Moratuwa, Egodauyana & Korelawella. Order online today!" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          \"@context\": \"https://schema.org\",
          \"@type\": \"Bakery\",
          \"name\": \"Neil Bakery\",
          \"address\": {
            \"@type\": \"PostalAddress\",
            \"streetAddress\": \"St.Annes Lane Katukurunda\",
            \"addressLocality\": \"Moratuwa\",
            \"addressRegion\": \"Western Province\",
            \"postalCode\": \"10400\",
            \"addressCountry\": \"LK\"
          },
          \"telephone\": \"+94771544293\",
          \"url\": \"https://neilbakery.lk\"
        }` }} />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <h1 className="sr-only">Fresh Bakery Products in Moratuwa</h1>
          <Hero />
          <About />
          <Outlets />
          <Products />
          <Feedback />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
