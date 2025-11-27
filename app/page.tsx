import BestSellerSection from "@/src/components/BestSellerSection";
import { CustomerFeedback } from "@/src/components/CustomerFeedback";
import { Footer } from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import { PartnersSection } from "@/src/components/PartnersSection";
import { TeamSection } from "@/src/components/TeamSection";



export default function Home() {
  return (
    
      <main className="min-h-screen bg-white">
        
        <Hero/>
        <BestSellerSection/>
        <CustomerFeedback/>
        <TeamSection/>
        <PartnersSection/>
        <Footer/>
      </main>
    
  );
}
