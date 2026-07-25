"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { 
  RiSearchLine, 
  RiNotification3Line, 
  RiGridFill,
} from "react-icons/ri";

export const Navbar = () => {
  return (
    <nav className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#05070A]/80 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <div className="mr-8">
        <span className="text-white font-bold text-sm tracking-tight">Xai Intelligence</span>
      </div>

      <div className="flex-1 max-w-2xl mx-auto px-4">
        <div className="relative group">
          <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-[#5F85FF] transition-colors" />
          <input 
            type="text" 
            placeholder="Search workspace..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-neutral-300 outline-none focus:border-[#5F85FF]/50 focus:bg-white/[0.08] transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative cursor-pointer group">
          <RiNotification3Line className="text-neutral-400 text-xl group-hover:text-white transition-colors" />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#5F85FF] rounded-full border border-[#05070A]" />
        </div>
        <RiGridFill className="text-neutral-400 text-xl cursor-pointer hover:text-white transition-colors" />
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10 overflow-hidden cursor-pointer">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </nav>
  );
};
