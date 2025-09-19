"use client";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, Phone, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Headphones,
    title: "Noisy Environment Testing",
    description: "Test an AI agent handling a refund call in a noisy train station.",
    gradient: "from-neural-purple to-neural-blue"
  },
  {
    icon: Phone,
    title: "Emotional Response Evaluation",
    description: "Evaluate your voice bot's tone when handling angry customers.",
    gradient: "from-neural-cyan to-neural-pink"
  },
  {
    icon: Building2,
    title: "Large-Scale Simulation",
    description: "Simulate 1000+ real-world calls before going live.",
    gradient: "from-neural-blue to-neural-purple"
  }
];

const UseCases = () => {
  return (
    <section className="py-24 relative bg-[#020817]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Real-World <span className="gradient-text">Use Cases</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how QA teams, AI startups, and voice agent builders use our platform 
            to test and improve their AI agents in realistic scenarios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full border-border hover:border-neural-purple/50">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <CardHeader className="relative z-10 text-center">
                  <motion.div
                    className="mx-auto mb-4 w-16 h-16 rounded-full bg-neural-purple/10 flex items-center justify-center group-hover:bg-neural-purple/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <useCase.icon className="w-8 h-8 text-neural-purple" />
                  </motion.div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-neural-purple transition-colors">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 text-center">
                  <p className="text-muted-foreground">
                    {useCase.description}
                  </p>
                </CardContent>

                {/* Bottom gradient line */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-neural"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100K+</div>
            <div className="text-muted-foreground">Voice agent tests completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">95%</div>
            <div className="text-muted-foreground">Accuracy in human simulation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-muted-foreground">AI companies using our platform</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;