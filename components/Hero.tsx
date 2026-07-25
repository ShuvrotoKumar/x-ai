"use client";

import React, { useEffect, useRef } from "react";
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
        duration: 0.8
      })
      .from(descRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8
      }, "-=0.6")
      .from(buttonGroupRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8
      }, "-=0.6")
      .from(cardRef.current, {
        y: 40,
        opacity: 0,
        duration: 1
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
          Turn Real Data Into Intelligence
        </div>

        <p
          ref={descRef}
          className="max-w-xl mx-auto text-[13px] md:text-[15px] text-[#94A3B8] mb-12 leading-relaxed font-medium"
        >
          Transform scattered information into structured insights and power automation through our unified interface
        </p>

        <div
          ref={buttonGroupRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <button 
            className="w-full sm:w-auto px-8 py-3 bg-[#6366f1] hover:bg-[#4f46e5] text-white text-sm font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
          >
            Explore Workspace
          </button>
          <button 
            className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white text-sm font-bold rounded-lg transition-all duration-300 hover:bg-white/5 active:scale-95"
          >
            View Demo
          </button>
        </div>

        {/* Workflow Diagram Card */}
        <div
          ref={cardRef}
          className="relative w-full max-w-4xl mx-auto bg-gradient-to-br from-[#0F1419] to-[#0B1221] border border-white/10 rounded-[24px] p-16 overflow-hidden backdrop-blur-sm"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 rounded-[24px] pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent rounded-[24px]" />
          </div>

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Middle horizontal line extending across full width */}
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(100, 150, 255, 0.25)" strokeWidth="2" strokeDasharray="6,4" />
            
            {/* Vertical line from middle to Raw Data */}
            <line x1="12%" y1="50%" x2="12%" y2="30%" stroke="rgba(100, 150, 255, 0.25)" strokeWidth="2" strokeDasharray="6,4" />
            
            {/* Vertical line from middle to Knowledge Graph */}
            <line x1="50%" y1="50%" x2="50%" y2="30%" stroke="rgba(100, 150, 255, 0.25)" strokeWidth="2" strokeDasharray="6,4" />
            
            {/* Vertical line from middle to Automation */}
            <line x1="88%" y1="50%" x2="88%" y2="30%" stroke="rgba(100, 150, 255, 0.25)" strokeWidth="2" strokeDasharray="6,4" />
            
            {/* Vertical line from middle to AI Engine */}
            <line x1="12%" y1="50%" x2="12%" y2="70%" stroke="rgba(100, 150, 255, 0.25)" strokeWidth="2" strokeDasharray="6,4" />
            
            {/* Vertical line from middle to Insights */}
            <line x1="88%" y1="50%" x2="88%" y2="70%" stroke="rgba(100, 150, 255, 0.25)" strokeWidth="2" strokeDasharray="6,4" />
          </svg>

          <div className="relative h-72 flex flex-col justify-between">
            {/* Top Row - 3 nodes equally spaced */}
            <div className="flex justify-between items-center">
              <WorkflowNode label="Raw Data" />
              <WorkflowNode label="Knowledge Graph" />
              <WorkflowNode label="Automation" />
            </div>

            {/* Bottom Row - 2 nodes at edges */}
            <div className="flex justify-between items-center">
              <WorkflowNode label="AI Engine" />
              <WorkflowNode label="Insights" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
