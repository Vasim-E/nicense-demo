import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import Image from "next/image";
import TrendingProducts from "./components/TrendingProducts";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main 
      className="min-h-screen text-slate-900 relative overflow-hidden"
      style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, rgb(255,252,248) 0%, rgb(255,245,230) 40%, rgb(250,240,225) 100%)' }}
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-breathe-scale">
        <Image
          src="/backgrounds/need_this_type_image_of_202606031931-Photoroom.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-80 blur-[2px] mix-blend-multiply"
          priority
        />
        {/* Wandering Spotlight Overlay that hides the edges and reveals the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,252,248,0.95)_60%)] bg-[size:200%_200%] animate-spotlight-wander" />
      </div>

      {/* Ambient background glows matching product colors (Kiwi, Dragon Fruit, Gold) */}
      <div className="absolute top-20 right-1/3 w-[25rem] h-[25rem] bg-[#A1B932]/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#D41C5E]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/4 w-[40rem] h-[40rem] bg-[#daaa41]/15 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 z-0" />

      {/* Top Left Foliage Decoration */}
      <div className="absolute -top-10 -left-10 md:-top-16 md:-left-16 w-48 h-48 md:w-[18rem] md:h-[18rem] pointer-events-none z-0">
        <Image
          src="/backgrounds/foliage-watercolor-leaf-hand-painted-free-png.webp"
          alt="Decorative Leaf"
          fill
          className="object-contain blur-[6px] opacity-90 drop-shadow-xl"
          priority
        />
      </div>
      
      <Navbar />

      <HeroCarousel />

      <TrendingProducts />
      <Reviews />
      <Footer />
    </main>
  );
}

