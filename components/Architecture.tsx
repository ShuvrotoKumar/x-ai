"use client";

import { motion } from "framer-motion";
import { RiDatabase2Line, RiBrainLine, RiNetworkLine, RiRobot2Line } from "react-icons/ri";

const ArchBox = ({
  label,
  description,
  icon: Icon,
  position,
}: {
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) => {
  const delayMap = {
    "top-left": 0,
    "top-right": 0.1,
    "bottom-left": 0.2,
    "bottom-right": 0.3,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delayMap[position] }}
      className="flex flex-col items-start gap-3 p-6 rounded-2xl bg-gradient-to-br from-[#1a2a4e] to-[#0f1829] border border-[#6366f1]/30 hover:border-[#6366f1]/60 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#6366f1]/20 flex items-center justify-center">
          <Icon className="text-[#6366f1] text-xl" />
        </div>
        <h3 className="text-sm font-bold text-white uppercase tracking-[0.1em]">
          {label}
        </h3>
      </div>
      <p className="text-xs text-[#94A3B8] leading-relaxed">{description}</p>
    </motion.div>
  );
};

export const Architecture = () => {
  const boxes = [
    {
      label: "Databases",
      description: "Real-time ingestion of structured & unstructured data",
      icon: RiDatabase2Line,
      position: "top-left" as const,
    },
    {
      label: "Neural Processing",
      description: "Deep learning models synthesizing patterns instantly",
      icon: RiBrainLine,
      position: "top-right" as const,
    },
    {
      label: "Knowledge Graph",
      description: "Dynamic mapping of entity relationships and hierarchies",
      icon: RiNetworkLine,
      position: "bottom-left" as const,
    },
    {
      label: "Automation",
      description: "Trigger-based workflows executing automated tasks",
      icon: RiRobot2Line,
      position: "bottom-right" as const,
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enterprise Core Intelligence
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto text-base leading-relaxed">
            Experience the next generation of synthesis. Our proprietary neural core processes
            trillions of data points to provide the calm clarity required for high-stakes decision
            making.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="relative w-full">
          {/* SVG Connection Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ minHeight: "400px" }}
            viewBox="0 0 800 400"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Diagonal lines forming X pattern */}
            <line
              x1="20%"
              y1="30%"
              x2="50%"
              y2="50%"
              stroke="rgba(99, 102, 241, 0.3)"
              strokeWidth="2"
            />
            <line
              x1="80%"
              y1="30%"
              x2="50%"
              y2="50%"
              stroke="rgba(99, 102, 241, 0.3)"
              strokeWidth="2"
            />
            <line
              x1="20%"
              y1="70%"
              x2="50%"
              y2="50%"
              stroke="rgba(99, 102, 241, 0.3)"
              strokeWidth="2"
            />
            <line
              x1="80%"
              y1="70%"
              x2="50%"
              y2="50%"
              stroke="rgba(99, 102, 241, 0.3)"
              strokeWidth="2"
            />
          </svg>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 gap-8 relative z-10">
            {/* Top-left */}
            <div className="flex justify-start">
              <ArchBox {...boxes[0]} />
            </div>

            {/* Top-right */}
            <div className="flex justify-end">
              <ArchBox {...boxes[1]} />
            </div>

            {/* Bottom-left */}
            <div className="flex justify-start">
              <ArchBox {...boxes[2]} />
            </div>

            {/* Bottom-right */}
            <div className="flex justify-end">
              <ArchBox {...boxes[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
