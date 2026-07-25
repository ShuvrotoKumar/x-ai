import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Workflow } from "@/components/Workflow";
import { Dashboard } from "@/components/Dashboard";
import { WowSection } from "@/components/WowSection";
import { SignatureSection } from "@/components/SignatureSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Workflow />
      <Dashboard />
      <WowSection />
      <SignatureSection />
      <Footer />
    </main>
  );
}
