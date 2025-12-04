import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Outlets from '@/components/sections/Outlets';
import Products from '@/components/sections/Products';
import Feedback from '@/components/sections/Feedback';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Outlets />
        <Products />
        <Feedback />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
