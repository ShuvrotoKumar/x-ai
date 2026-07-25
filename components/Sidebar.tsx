"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  RiDashboardLine, 
  RiPulseLine, 
  RiDatabaseLine, 
  RiSettings4Line, 
  RiArrowRightSLine,
  RiPieChartLine,
  RiGroupLine
} from "react-icons/ri";

const sidebarItems = [
  { icon: RiDashboardLine, label: "Overview", active: true },
  { icon: RiPieChartLine, label: "Analytics" },
  { icon: RiPulseLine, label: "Intelligence" },
  { icon: RiDatabaseLine, label: "Datasets" },
  { icon: RiGroupLine, label: "Team" },
  { icon: RiSettings4Line, label: "Settings" },
];

export const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-[#050505] border-r border-white/5 flex flex-col py-6 px-4">
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
          <div className="w-3 h-3 bg-black rounded-sm rotate-45" />
        </div>
        <span className="text-white font-semibold">Workspace</span>
      </div>

      <nav className="flex-1 space-y-1">
        {sidebarItems.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ x: 4 }}
            className={cn(
              "flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 group",
              item.active 
                ? "bg-white/10 text-white" 
                : "text-neutral-500 hover:bg-white/5 hover:text-neutral-200"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon className={cn(
                "text-xl",
                item.active ? "text-white" : "text-neutral-500 group-hover:text-neutral-200"
              )} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            {item.active && <RiArrowRightSLine className="text-neutral-500" />}
          </motion.div>
        ))}
      </nav>

      <div className="mt-auto px-2">
        <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-900 to-[#0a0a0a] border border-white/5">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Usage</div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-white" 
            />
          </div>
          <div className="text-[10px] text-neutral-400">6.5k / 10k tokens used</div>
        </div>
      </div>
    </div>
  );
};
