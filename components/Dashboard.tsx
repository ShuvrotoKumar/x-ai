"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";
import { 
  RiSearchLine, 
  RiNotification3Line, 
  RiUser3Line, 
  RiArrowUpSFill, 
  RiFlashlightLine,
  RiGlobalLine,
  RiTimeLine
} from "react-icons/ri";

const StatCard = ({ label, value, trend, index }: { label: string, value: string, trend: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="bg-[#0c0c0c] border border-white/5 p-6 rounded-2xl"
  >
    <div className="text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">{label}</div>
    <div className="flex items-end gap-3">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="flex items-center text-xs font-bold text-emerald-500 mb-1">
        <RiArrowUpSFill />
        {trend}
      </div>
    </div>
  </motion.div>
);

const ChartBar = ({ height, delay }: { height: string, delay: number }) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer h-full justify-end">
    <div className="relative w-full">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.33, 1, 0.68, 1] }}
        className="w-full bg-gradient-to-t from-blue-600/20 to-blue-400 rounded-t-sm group-hover:to-blue-300 transition-colors"
      />
    </div>
  </div>
);

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  
  const tabs = ["Overview", "Activity", "Intelligence", "Security"];

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Command Center</h2>
          <p className="text-neutral-500">Everything you need to manage your autonomous agents.</p>
        </div>

        <div className="max-w-7xl mx-auto aspect-[16/10] bg-black rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex">
          <Sidebar />
          
          <main className="flex-1 flex flex-col min-w-0">
            {/* Header */}
            <header className="h-16 border-b border-white/5 flex items-center justify-between px-8">
              <div className="flex items-center gap-4 flex-1">
                <RiSearchLine className="text-neutral-500" />
                <input 
                  type="text" 
                  placeholder="Search intelligence..." 
                  className="bg-transparent border-none outline-none text-sm text-neutral-300 w-full max-w-xs"
                />
              </div>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <RiNotification3Line className="text-neutral-400 text-xl cursor-pointer hover:text-white transition-colors" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border-2 border-black animate-pulse" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10" />
              </div>
            </header>

            {/* Dashboard Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 p-1 bg-white/5 rounded-lg">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "px-4 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 relative",
                        activeTab === tab ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                      )}
                    >
                      {activeTab === tab && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-white/10 rounded-md"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">{tab}</span>
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <RiTimeLine />
                  Last updated: Just now
                </div>
              </div>

              <div className="grid grid-cols-4 gap-6">
                <StatCard label="Total Intelligence" value="1.2Pb" trend="+12%" index={0} />
                <StatCard label="Active Agents" value="482" trend="+5%" index={1} />
                <StatCard label="Processed Tasks" value="12.4M" trend="+18%" index={2} />
                <StatCard label="Response Latency" value="14ms" trend="-2%" index={3} />
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 bg-[#0c0c0c] border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-sm font-bold text-white">Network Activity</h4>
                    <select className="bg-white/5 border border-white/10 rounded px-2 py-1 text-[10px] text-neutral-400 outline-none">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                    </select>
                  </div>
                  <div className="h-48 flex items-end gap-3">
                    {[35, 65, 45, 85, 55, 95, 75, 60, 80, 40, 70, 90].map((h, i) => (
                      <ChartBar key={i} height={`${h}%`} delay={i * 0.05} />
                    ))}
                  </div>
                </div>

                <div className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-6">
                  <h4 className="text-sm font-bold text-white mb-6">Recent Insights</h4>
                  <div className="space-y-4">
                    {[
                      { icon: RiFlashlightLine, color: "text-amber-500", label: "Efficiency boost detected", time: "2m ago" },
                      { icon: RiGlobalLine, color: "text-blue-500", label: "Node expansion successful", time: "15m ago" },
                      { icon: RiUser3Line, color: "text-purple-500", label: "New team member added", time: "1h ago" },
                    ].map((insight, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className={cn("w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center", insight.color)}>
                          <insight.icon />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-medium text-white truncate">{insight.label}</div>
                          <div className="text-[9px] text-neutral-600 uppercase font-bold">{insight.time}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
