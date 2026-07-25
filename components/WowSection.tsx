"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const WowScene = dynamic(() => import("./WowScene"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-black/20 animate-pulse rounded-full" />
});

export const WowSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-widest"
            >
              Advanced Intelligence
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              The Core of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Autonomous Thinking
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-400 leading-relaxed max-w-xl"
            >
              Our neural network architecture mimics human cognition, enabling complex reasoning and decision-making across trillions of data points in milliseconds.
            </motion.p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              {[
                { label: "Synaptic Speed", value: "0.01ms" },
                { label: "Context Window", value: "2.5M Tokens" },
                { label: "Active Nodes", value: "18.2 Trillion" },
                { label: "Accuracy Rate", value: "99.98%" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="space-y-1"
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs font-semibold text-neutral-600 uppercase tracking-tighter">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full aspect-square relative">
            {/* Floating Glass Panels */}
            <motion.div 
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-32 h-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl z-20" 
            />
            <motion.div 
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl z-20" 
            />
            
            <div className="w-full h-full">
              <WowScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
