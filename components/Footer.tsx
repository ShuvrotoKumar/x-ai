"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section - Logo and Description */}
          <div className="flex-1 flex flex-col gap-3">
            <h3 className="text-sm font-bold text-white">Xai Intelligence</h3>
            <p className="text-xs text-neutral-500">
              © 2024 Xai Intelligence. Calm Intelligence for Enterprise.
            </p>
          </div>

          {/* Center Section - Links */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <div className="flex gap-8">
              <Link href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">
                Security
              </Link>
              <Link href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">
                Status
              </Link>
            </div>
          </div>

          {/* Right Section - Status */}
          <div className="flex-1 flex flex-col items-end gap-2">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              All Systems
            </div>
            <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest">
              Operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
