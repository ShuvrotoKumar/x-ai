"use client";

import { motion } from "framer-motion";

const MetricCard = ({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="text-4xl md:text-5xl font-bold text-[#6366f1]">
        {value}
      </div>
      <div className="text-xs md:text-sm font-bold text-[#94A3B8] uppercase tracking-[0.15em]">
        {label}
      </div>
    </motion.div>
  );
};

export const Metrics = () => {
  const metrics = [
    { value: "128ms", label: "Avg Latency" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "256-bit", label: "End-to-End Encryption" },
  ];

  return (
    <section className="py-16 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              label={metric.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
