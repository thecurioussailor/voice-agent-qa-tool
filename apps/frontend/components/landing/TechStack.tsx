"use client";
import { motion } from "motion/react";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "OpenAI", icon: "🤖" },
  { name: "WebRTC", icon: "📞" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Redis", icon: "🔴" },
  { name: "Kubernetes", icon: "⚓" },
  { name: "GraphQL", icon: "📊" },
];

const TechStack = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#020817]/20">
      <div className="absolute inset-0 bg-gradient-to-r from-neural-purple/5 to-neural-cyan/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Built with <span className="gradient-text">Cutting-Edge Technology</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powered by modern tech stack ensuring scalability, reliability, and performance
          </p>
        </motion.div>

        {/* Infinite Scroll Animation */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-8 min-w-full pt-10"
              animate={{ x: [0, -100 * technologies.length] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex flex-col items-center justify-center min-w-[120px] p-6 bg-[#020817]/20 rounded-xl border border-border hover:border-neural-purple/50 transition-all group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;