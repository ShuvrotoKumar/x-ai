"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { RiDatabase2Line, RiBrainLine, RiNetworkLine, RiRobot2Line } from "react-icons/ri";

const WorkflowNode = ({ 
  label, 
  icon: Icon,
  className 
}: { 
  label: string; 
  icon: React.ComponentType<any>;
  className?: string 
}) => (
  <div className={cn(
    "px-6 py-4 rounded-2xl bg-gradient-to-br from-[#1a2a4e] to-[#0f1829] border border-[#6366f1]/30 flex flex-col items-center justify-center gap-3 min-w-[180px] text-center hover:border-[#6366f1]/60 transition-colors",
    className
  )}>
    <Icon className="text-[#6366f1] text-2xl" />
    <div className="text-[13px] font-bold text-white uppercase tracking-[0.15em]">{label}</div>
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
      {/* Background Glow */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#5F85FF]/10 rounded-[100%] blur-[120px] pointer-events-none opacity-50" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
        >
          Enterprise Core Intelligence
        </div>

        <p
          ref={descRef}
          className="max-w-2xl mx-auto text-[15px] md:text-base text-[#94A3B8] mb-12 leading-relaxed font-medium"
        >
          Experience the next generation of synthesis. Our proprietary neural core processes trillions of data points to provide the calm clarity required for high-stakes decision making.
        </p>

        <div
          ref={buttonGroupRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
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
          className="relative w-full max-w-3xl mx-auto bg-gradient-to-br from-[#0F1419] to-[#0B1221] border border-white/10 rounded-[24px] p-20 overflow-hidden backdrop-blur-sm"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 rounded-[24px] pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent rounded-[24px]" />
          </div>

          {/* SVG Connection Lines - Diamond/Cross Pattern */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Diagonal lines forming X pattern */}
            <line x1="25%" y1="30%" x2="50%" y2="50%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
            <line x1="75%" y1="30%" x2="50%" y2="50%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
            <line x1="25%" y1="70%" x2="50%" y2="50%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
            <line x1="75%" y1="70%" x2="50%" y2="50%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
          </svg>

          <div className="relative h-80 flex flex-col justify-between">
            {/* Top Row - 2 nodes */}
            <div className="flex justify-between items-start px-4">
              <WorkflowNode label="Databases" icon={RiDatabase2Line} />
              <WorkflowNode label="Neural Processing" icon={RiBrainLine} />
            </div>

            {/* Bottom Row - 2 nodes */}
            <div className="flex justify-between items-end px-4">
              <WorkflowNode label="Knowledge Graph" icon={RiNetworkLine} />
              <WorkflowNode label="Automation" icon={RiRobot2Line} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
