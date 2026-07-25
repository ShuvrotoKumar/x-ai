"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { RiDatabase2Line, RiAiGenerate, RiNotificationBadgeLine } from "react-icons/ri";

const WorkflowCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  index: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-b from-white/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 h-full flex flex-col gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
          <Icon className="text-2xl text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-neutral-500 leading-relaxed">{description}</p>
        
        <div className="mt-auto pt-6 flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-widest">
          Step {index + 1}
        </div>
      </div>
    </motion.div>
  );
};

const ConnectingLine = ({ 
  className, 
  direction = "horizontal" 
}: { 
  className?: string, 
  direction?: "horizontal" | "vertical" 
}) => {
  return (
    <div className={cn("relative", className)}>
      <div className={cn(
        "absolute bg-white/10 overflow-hidden",
        direction === "horizontal" ? "w-full h-px top-1/2 -translate-y-1/2" : "h-full w-px left-1/2 -translate-x-1/2"
      )}>
        <motion.div
          animate={direction === "horizontal" ? { x: ["-100%", "100%"] } : { y: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className={cn(
            "bg-gradient-to-r from-transparent via-blue-500 to-transparent",
            direction === "horizontal" ? "h-full w-40" : "w-full h-40"
          )}
        />
      </div>
    </div>
  );
};

export const Workflow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const workflowSteps = [
    {
      icon: RiDatabase2Line,
      title: "Data Ingestion",
      description: "Connect your raw data sources. We support SQL, NoSQL, and vector databases out of the box."
    },
    {
      icon: RiAiGenerate,
      title: "Neural Mapping",
      description: "Our proprietary AI models structure your data into a semantic graph of interconnected intelligence."
    },
    {
      icon: RiNotificationBadgeLine,
      title: "Autonomous Action",
      description: "Trigger workflows and autonomous agents that act on insights in real-time without human intervention."
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-black relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Streamlined Intelligence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 max-w-2xl mx-auto text-lg"
          >
            A unified pipeline from raw information to automated results.
          </motion.p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Desktop Connecting Lines */}
          <ConnectingLine className="hidden md:block absolute top-[60px] left-[25%] w-[16%] z-0" />
          <ConnectingLine className="hidden md:block absolute top-[60px] right-[25%] w-[16%] z-0" />

          {workflowSteps.map((step, i) => (
            <WorkflowCard key={i} {...step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
