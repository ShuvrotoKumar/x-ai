"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  RiTwitterXFill, 
  RiGithubFill, 
  RiLinkedinBoxFill, 
  RiDiscordFill 
} from "react-icons/ri";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Intelligence", "Security", "Roadmap", "Pricing"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Press", "Contact"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API Reference", "Guides", "Community", "Open Source"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookie Policy", "Acceptable Use", "Security"],
    },
  ];

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-24">
          <div className="col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">XAI</span>
            </Link>
            <p className="text-neutral-500 max-w-sm leading-relaxed">
              The neural operating system for the autonomous future. Built by engineers, for engineers.
            </p>
            <div className="flex gap-4">
              {[RiTwitterXFill, RiGithubFill, RiLinkedinBoxFill, RiDiscordFill].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-all"
                >
                  <Icon className="text-xl" />
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-neutral-600 font-medium"
          >
            © {currentYear} XAI Intelligence Inc. All rights reserved.
          </motion.div>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">All Systems Operational</span>
            </div>
            <div className="text-[10px] text-neutral-600 font-bold uppercase tracking-wider">Made with ❤️ in San Francisco</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
