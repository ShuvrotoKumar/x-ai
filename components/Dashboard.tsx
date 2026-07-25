"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  RiArrowUpSFill,
  RiCheckLine
} from "react-icons/ri";

const StatCard = ({ label, value, trend, status, index }: { 
  label: string, 
  value: string, 
  trend?: string, 
  status?: string,
  index: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-white/10 p-6 rounded-2xl"
  >
    <div className="text-xs font-medium text-neutral-500 mb-3 uppercase tracking-wider">{label}</div>
    <div className="flex items-end justify-between">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className={cn(
        "flex items-center text-xs font-bold mb-1",
        trend ? "text-emerald-500" : status === "Optimal" ? "text-emerald-500" : "text-neutral-400"
      )}>
        {trend && (
          <>
            <RiArrowUpSFill />
            {trend}
          </>
        )}
        {status && <span>{status}</span>}
      </div>
    </div>
  </motion.div>
);



export const Dashboard = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">System Overview</h2>
          <p className="text-neutral-500 text-sm">Real-time monitoring of your intelligence pipelines and model performance</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <StatCard label="Active Pipelines" value="12,482" trend="+15%" index={0} />
          <StatCard label="Model Confidence" value="98.4%" status="Optimal" index={1} />
          <StatCard label="Daily Queries" value="1.2M" status="Storage" index={2} />
          <StatCard label="Uptime" value="99.99%" status="Storage" index={3} />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left - Chart */}
          <div className="col-span-2 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-white/10 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-white">Inference Latency (24h)</h3>
              <div className="flex gap-3 text-xs font-medium">
                <div className="flex items-center gap-2 text-neutral-400">
                  <div className="w-2 h-2 rounded-full bg-[#818cf8]" />
                  Production
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <div className="w-2 h-2 rounded-full bg-[#d946ef]" />
                  Staging
                </div>
              </div>
            </div>
            <svg className="w-full h-48" viewBox="0 0 800 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="prodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="stagingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#d946ef" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Production area */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                d="M0,140 Q50,120 100,100 T200,80 T300,110 T400,60 T500,90 T600,70 T700,100 T800,50 L800,200 L0,200 Z"
                fill="url(#prodGradient)"
              />
              
              {/* Production line */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                d="M0,140 Q50,120 100,100 T200,80 T300,110 T400,60 T500,90 T600,70 T700,100 T800,50"
                stroke="#818cf8"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Staging area */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                d="M0,160 Q50,145 100,130 T200,120 T300,140 T400,100 T500,125 T600,105 T700,135 T800,90 L800,200 L0,200 Z"
                fill="url(#stagingGradient)"
              />
              
              {/* Staging line */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                d="M0,160 Q50,145 100,130 T200,120 T300,140 T400,100 T500,125 T600,105 T700,135 T800,90"
                stroke="#d946ef"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Right - Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-white/10 rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xs font-bold text-[#6366f1] uppercase tracking-widest mb-2">API COLLABORATION</h3>
              <h4 className="text-lg font-bold text-white mb-4">Nodes</h4>
              <p className="text-sm text-neutral-400 mb-6">
                Splice search inference & task orchestration with collaboration set to inform decision-making metrics
              </p>
            </div>
            <button className="w-full px-6 py-3 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold rounded-xl transition-colors">
              Apply Optimization
            </button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Recent Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-lg font-bold text-white mb-6">Recent Insights</h3>
            <div className="space-y-4">
              {[
                { label: "Anomaly detected in Dataset #432", time: "3h ago" },
                { label: "Automation workflow 'Report Gen' complete", time: "4m ago" },
                { label: "New efficiency optimization suggested", time: "5h ago" },
              ].map((insight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
                >
                  <div className="w-2 h-2 rounded-full bg-[#6366f1] mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white group-hover:text-neutral-100 transition-colors">{insight.label}</div>
                    <div className="text-xs text-neutral-600 mt-1">{insight.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Activity Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-lg font-bold text-white mb-6">Activity Timeline</h3>
            <div className="space-y-4">
              {[
                { label: "User Authentication", sublabel: "System logged in" },
                { label: "Dataset Synchronized", sublabel: "Mapping complete" },
                { label: "Model Training", sublabel: "Processing..." },
              ].map((activity, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
                >
                  <div className="w-5 h-5 rounded-full bg-[#6366f1]/20 border border-[#6366f1]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <RiCheckLine className="text-xs text-[#6366f1]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white">{activity.label}</div>
                    <div className="text-xs text-neutral-600 mt-1">{activity.sublabel}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};