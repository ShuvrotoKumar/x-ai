"use client";

import React from "react";
import Image from "next/image";
import { 
  RiSearchLine, 
  RiNotification3Line, 
  RiGridFill,
} from "react-icons/ri";

export const Navbar = () => {
  return (
    <nav className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#05070A]/80 backdrop-blur-md sticky top-0 z-50 gap-6">
      {/* Logo */}
      <div className="shrink-0">
        <span className="text-white font-bold text-sm tracking-tight whitespace-nowrap">Xai Intelligence</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-[#5F85FF] transition-colors" />
          <input 
            type="text" 
            placeholder="Search workspace..." 
            className="w-full bg-transparent border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-neutral-300 placeholder-neutral-500 outline-none focus:border-white/20 transition-all"
          />
        </div>
      </div>

      {/* Icons and Avatar */}
      <div className="flex items-center gap-4 shrink-0">
        <div className="relative cursor-pointer group">
          <RiNotification3Line className="text-neutral-400 text-lg group-hover:text-white transition-colors" />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#5F85FF] rounded-full border border-[#05070A]" />
        </div>
        <RiGridFill className="text-neutral-400 text-lg cursor-pointer hover:text-white transition-colors" />
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10 overflow-hidden cursor-pointer flex-shrink-0">
          <Image 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="User" 
            width={40}
            height={40}
            className="w-full h-full object-cover" 
            unoptimized
          />
        </div>
      </div>
    </nav>
  );
};
