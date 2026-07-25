"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import gsap from "gsap";

const WorkflowNode = ({ label, className }: { label: string; className?: string }) => (
  <div className={cn(
    "px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-white uppercase tracking-[0.2em] flex items-center justify-center min-w-[140px] text-center",
    className
  )}>
    {label}
  </div>
);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonGroupRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.2
      })
      .from(descRef.current, {
        y: 20,
        opacity: 0,
        duration: 1
      }, "-=0.7")
      .from(buttonGroupRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
      }, "-=0.7")
      .from(cardRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2
      }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 py-12 overflow-hidden bg-transparent">
      {/* Background Glow - Matching the image's deep navy/blue feel */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#5F85FF]/10 rounded-[100%] blur-[120px] pointer-events-none opacity-50" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div
          ref={titleRef}
          className="text-[13px] md:text-sm font-medium text-white mb-6 tracking-tight"
        >
          Turn Raw Data Into Intelligence
        </div>

        <p
          ref={descRef}
          className="max-w-xl mx-auto text-[13px] md:text-[15px] text-[#94A3B8] mb-12 leading-relaxed font-medium"
        >
          Transform scattered information into structured insights and AI powered automation through our unified enterprise-grade workspace.
        </p>

        <div
          ref={buttonGroupRef}
          className="flex items-center justify-center gap-4 mb-24"
        >
          <button 
            className="px-10 py-4 bg-[#6366f1] text-white text-[15px] font-bold rounded-xl hover:bg-[#4f46e5] transition-all duration-300 shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] active:scale-[0.98]"
          >
            Explore Workspace
          </button>
          <button 
            className="px-10 py-4 bg-[#1E293B]/60 text-white text-[15px] font-bold rounded-xl border border-white/5 hover:bg-[#1E293B]/80 transition-all duration-300 hover:border-white/10 active:scale-[0.98]"
          >
            View Demo
          </button>
        </div>

        {/* Workflow Diagram Card */}
        <div
          ref={cardRef}
          className="relative w-full max-w-5xl mx-auto aspect-[16/8] bg-[#0B1221]/40 border border-white/5 rounded-[40px] p-12 overflow-hidden flex flex-col justify-center backdrop-blur-sm"
        >
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/[0.03]" />
            ))}
          </div>

          <div className="relative h-full grid grid-cols-3 items-center gap-x-8">
            <div className="flex justify-center">
              <WorkflowNode label="Raw Data" />
            </div>
            <div className="flex justify-center">
              <WorkflowNode label="Knowledge Graph" />
            </div>
            <div className="flex justify-center">
              <WorkflowNode label="Automation" />
            </div>
            
            <div className="col-span-3 grid grid-cols-2 mt-12 px-24">
               <div className="flex justify-center">
                  <WorkflowNode label="AI Engine" className="bg-[#5F85FF]/10 border-[#5F85FF]/20 text-[#5F85FF]" />
               </div>
               <div className="flex justify-center">
                  <WorkflowNode label="Insights" />
               </div>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
             <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent rotate-12" />
             <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent -rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};
