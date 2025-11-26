import BestSellerSection from "@/src/components/BestSellerSection";
import { CustomerFeedback } from "@/src/components/CustomerFeedback";
import { Hero } from "@/src/components/Hero";



export default function Home() {
  return (
    
      <main className="min-h-screen bg-white">
        
        <Hero/>
        <BestSellerSection/>
        <CustomerFeedback/>
      </main>
    
  );
}
