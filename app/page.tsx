import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#05070A]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto scrollbar-hide">
        <Navbar />
        <main className="flex-1">
          <Hero />
        </main>
      </div>
    </div>
  );
}
