"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  RiDashboardLine, 
  RiLayoutGridLine, 
  RiDatabaseLine, 
  RiMagicLine, 
  RiLineChartLine,
  RiSettings4Line,
  RiQuestionLine,
  RiFileTextLine,
  RiCheckboxBlankCircleFill
} from "react-icons/ri";

const sidebarItems = [
  { icon: RiDashboardLine, label: "Dashboard", active: true },
  { icon: RiLayoutGridLine, label: "Workspace" },
  { icon: RiDatabaseLine, label: "Datasets" },
  { icon: RiMagicLine, label: "Automation" },
  { icon: RiLineChartLine, label: "Insights" },
  { icon: RiSettings4Line, label: "Settings" },
];

export const Sidebar = () => {
  return (
    <div className="w-[280px] h-screen bg-[#0B1221] border-r border-white/5 flex flex-col py-6 px-4 shrink-0">
      <div className="flex items-center gap-3 px-4 mb-10">
        <span className="text-white font-bold text-lg tracking-tight">Xai Intelligence</span>
      </div>

      {/* Workspace Selector */}
      <div className="px-2 mb-8">
        <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
          <div className="w-8 h-8 bg-[#5F85FF] rounded-lg flex items-center justify-center shrink-0">
            <RiLayoutGridLine className="text-white text-lg" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-white truncate">Xai Enterprise</div>
            <div className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold">Production Cluster</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {sidebarItems.map((item) => (
          <div
            key={item.label}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group relative",
              item.active 
                ? "bg-[#1E293B] text-white" 
                : "text-[#94A3B8] hover:bg-white/5 hover:text-white"
            )}
          >
            {item.active && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#5F85FF] rounded-r-full" />
            )}
            <item.icon className={cn(
              "text-xl",
              item.active ? "text-[#5F85FF]" : "text-[#94A3B8] group-hover:text-white"
            )} />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="mt-auto px-2 space-y-6">
        <button className="w-full py-3 bg-[#5F85FF] text-white text-sm font-bold rounded-xl hover:bg-[#4E74EE] transition-all active:scale-[0.98]">
          Explore Workspace
        </button>

        <div className="space-y-1">
          <div className="flex items-center gap-3 px-4 py-2 text-[#94A3B8] hover:text-white transition-colors cursor-pointer group">
            <RiQuestionLine className="text-lg group-hover:text-white" />
            <span className="text-sm font-medium">Help Center</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 text-[#94A3B8] hover:text-white transition-colors cursor-pointer group">
            <RiFileTextLine className="text-lg group-hover:text-white" />
            <span className="text-sm font-medium">Documentation</span>
          </div>
        </div>
      </div>
    </div>
  );
};
