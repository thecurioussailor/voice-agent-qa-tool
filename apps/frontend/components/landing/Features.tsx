"use client";
import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import featureTestingImg from "@/public/assets/voice-hero.jpg";
import featureAnalyticsImg from "@/public/assets/voice-hero.jpg";
import featureConversationImg from "@/public/assets/voice-hero.jpg";

const features = [
  {
    title: "Human-Like Conversation Testing",
    description: "Our AI mimics real human conversation patterns, testing your voice agents in realistic scenarios with natural speech patterns, interruptions, and emotional variations.",
    image: featureConversationImg,
    metrics: ["Natural Speech", "Emotion Simulation", "Real-time Testing"],
    gradient: "from-purple-500 to-cyan-500"
  },
  {
    title: "Advanced Analytics Dashboard",
    description: "Get detailed insights into your AI agent's performance with comprehensive metrics including hallucination detection, emotion analysis, response accuracy, and conversation quality scores.",
    image: featureAnalyticsImg,
    metrics: ["Hallucination Score", "Emotion Analysis", "Response Time", "Quality Rating"],
    gradient: "from-cyan-500 to-pink-500"
  },
  {
    title: "Intelligent Scoring System",
    description: "Our proprietary scoring algorithm evaluates multiple dimensions of AI performance, providing actionable insights to improve your voice agents' capabilities and user experience.",
    image: featureTestingImg,
    metrics: ["Overall Score", "Reliability Index", "User Experience", "Performance Metrics"],
    gradient: "from-blue-500 to-purple-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative bg-[#020817]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Powerful Features for <span className="gradient-text">AI Testing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive testing suite designed to evaluate every aspect of your voice AI agents 
            with precision and depth that matches real-world scenarios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-[#020817] overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full border-border hover:border-blue-900">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <CardHeader className="relative z-10">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <motion.img
                      src={feature.image.src}
                      alt={feature.title}
                      className="w-full h-48 object-cover rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-neural-purple transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {feature.metrics.map((metric, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-neural-purple/50 text-neural-purple border-neural-purple/20 hover:bg-neural-purple/20 transition-colors"
                      >
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Hover effect */}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 rounded-full border border-neural-purple/10 mb-6">
            <div className="w-2 h-2 bg-neural-purple rounded-full animate-pulse" />
            <span className="text-sm text-neural-purple font-medium">
              Trusted by 500+ AI companies worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;