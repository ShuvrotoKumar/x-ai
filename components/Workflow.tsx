"use client";

import React from "react";
import { motion } from "framer-motion";
import { RiDatabase2Line, RiAiGenerate, RiNotificationBadgeLine } from "react-icons/ri";

interface WorkflowStep {
  icon: any;
  title: string;
  description: string;
}

const WorkflowCard = ({
  icon: Icon,
  title,
  description,
  index,
  isCenter,
}: WorkflowStep & { index: number; isCenter: boolean }) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative ${isCenter ? "md:-translate-y-6" : ""}`}
    >
      <div
        className={`relative rounded-3xl border p-7 h-80 flex flex-col justify-between overflow-hidden backdrop-blur-sm ${
          isCenter
            ? "border-white/15 bg-gradient-to-b from-[#161a30] to-[#0a0d1a] shadow-2xl shadow-indigo-900/40"
            : "border-white/10 bg-[#0d0f1a]/60"
        }`}
      >
        {/* Faint oversized index number */}
        <span className="absolute -top-3 right-3 text-7xl font-bold text-white/[0.06] select-none leading-none">
          {number}
        </span>

        {/* Small dot marker — sits on the connector line */}
        <span className="absolute top-10 right-9 w-2 h-2 rounded-full bg-white/30" />

        {/* Top icon / center logo */}
        <div className="relative z-10">
          {isCenter ? (
            <div className="flex items-center gap-1.5 text-white font-semibold text-lg">
              <span className="text-indigo-400">✦</span> RK
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <Icon className="text-base text-white/80" />
            </div>
          )}
        </div>

        {/* Title + description */}
        <div className="relative z-10">
          <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const Workflow = () => {
  const workflowSteps: WorkflowStep[] = [
    {
      icon: RiDatabase2Line,
      title: "Ingest Data",
      description:
        "Connect disparate sources seamlessly with over 200+ native integrations and automated pipeline orchestration.",
    },
    {
      icon: RiAiGenerate,
      title: "Analyze with AI",
      description:
        "Our neural engines synthesize patterns, detect anomalies, and structuralize unstructured text in real-time.",
    },
    {
      icon: RiNotificationBadgeLine,
      title: "Generate Insight",
      description:
        "Convert raw synthesis into actionable intelligence, reports, and automated decision-making protocols.",
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-gradient-to-b from-[#05070d] to-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal connector line running through the dot markers */}
          <div className="hidden md:block absolute left-0 right-0 top-[40px] h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />

          <div className="relative grid md:grid-cols-3 gap-6 items-start">
            {workflowSteps.map((step, i) => (
              <WorkflowCard key={i} {...step} index={i} isCenter={i === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};