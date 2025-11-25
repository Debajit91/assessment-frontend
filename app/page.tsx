import { Hero } from "@/src/components/Hero";
import { Navbar } from "@/src/components/Navbar";


export default function Home() {
  return (
    
      <main className="min-h-screen bg-white">
        <Navbar/>
        <Hero/>
      </main>
    
  );
}
