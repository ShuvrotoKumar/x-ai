"use client";

import React from "react";
import { motion } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";

export const SignatureSection = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative p-12 md:p-24 rounded-[40px] bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/5 overflow-hidden group">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            >
              Ready to automate <br />
              your next big idea?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-400 mb-12 leading-relaxed"
            >
              Join 1,000+ companies building the future of autonomous systems with XAI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all duration-200">
                Get Started Now
                <RiArrowRightUpLine className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent text-white font-bold rounded-full border border-white/10 hover:bg-white/5 transition-all duration-200">
                Contact Sales
              </button>
            </motion.div>
          </div>

          {/* Floating UI element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="hidden lg:block absolute top-1/2 right-24 -translate-y-1/2 w-80 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-2 bg-white/20 rounded-full" />
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="w-full h-3 bg-white/10 rounded-full" />
                <div className="w-2/3 h-3 bg-white/10 rounded-full" />
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20" />
                  <div className="w-24 h-2 bg-white/10 rounded-full" />
                </div>
                <div className="h-20 w-full bg-blue-500/5 rounded-xl border border-blue-500/10 flex items-center justify-center">
                  <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">System Online</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
