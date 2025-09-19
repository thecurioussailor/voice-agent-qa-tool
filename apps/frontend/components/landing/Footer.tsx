"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "API", "Documentation", "Integrations"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press", "Contact"]
    },
    {
      title: "Resources",
      links: ["Help Center", "Community", "Tutorials", "Case Studies", "Status"]
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "Compliance", "Cookies"]
    }
  ];

  return (
    <footer className="relative bg-[#020817]/50 border-t border-border">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neural-purple/5 via-transparent to-neural-cyan/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-neural rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-2xl font-bold gradient-text">VoiceTest AI</span>
              </div>
              
              <p className="text-muted-foreground text-lg mb-6 max-w-md">
                The future of AI agent testing. Evaluate, analyze, and improve your voice AI 
                with human-like conversation simulations and advanced analytics.
              </p>
              
              <div className="flex gap-4">
                <Button className="bg-gradient-neural hover:opacity-90 neural-glow">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="border-neural-purple/50 hover:bg-neural-purple/10">
                  Book Demo
                </Button>
              </div>
            </motion.div>

            {/* Newsletter signup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest updates on AI testing innovations and product releases.
              </p>
              
              <div className="flex gap-2 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neural-purple/50"
                />
                <Button className="bg-gradient-neural hover:opacity-90">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                No spam. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>

          {/* Links grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12"
          >
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 text-foreground">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-neural-purple transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border py-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear} VoiceTest AI. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-neural-purple transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-neural-purple transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-neural-purple transition-colors">
                GitHub
              </a>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1 bg-neural-purple/10 rounded-full border border-neural-purple/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;