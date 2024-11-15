"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { ArrowRight, Building2, Users, Microscope, Award } from "lucide-react";

const historyItems = [
  {
    year: 2020,
    title: "Founded",
    description:
      "Foresight Hospitals established with its first branch in Abuja",
  },
  {
    year: 2021,
    title: "Expansion",
    description:
      "Foresight Hospitals established with its first branch in Gombe",
  },
  {
    year: 2023,
    title: "Expansion",
    description:
      "Foresight Hospitals established with its first branch in Sokoto ",
  },
  {
    year: 2024,
    title: "Expansion",
    description:
      "Expanded to Kaduna, bringing our expertise to patients in Kaduna",
  },
];

function Particle({ index }: { index: number }) {
  return (
    <motion.circle
      r={Math.random() * 3 + 1}
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      transition={{
        duration: Math.random() * 10 + 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay: index * 0.1,
      }}
      fill="rgba(59, 130, 246, 0.5)"
    />
  );
}

function ParticleBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full">
      {Array.from({ length: 50 }).map((_, index) => (
        <Particle key={index} index={index} />
      ))}
    </svg>
  );
}

export function ForesightHistory() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-blue-600"
        >
          Foresight Hospitals: Pioneering the Future of Healthcare
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-semibold mb-4 text-blue-800"
            >
              Our Journey
            </motion.h3>
            <Timeline>
              {historyItems.map((item, index) => (
                <TimelineItem
                  key={item.year}
                  active={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className="font-bold text-blue-500">{item.year}</span>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                </TimelineItem>
              ))}
            </Timeline>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-semibold mb-4 text-blue-800"
            >
              About Foresight
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-gray-700"
            >
              At Foresight Hospitals, we blend cutting-edge technology with
              compassionate care to redefine the healthcare experience. Our
              commitment to innovation and patient-centered approaches has
              positioned us at the forefront of medical excellence.
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building2, title: "State-of-the-art Facilities" },
                { icon: Users, title: "Expert Medical Team" },
                { icon: Microscope, title: "Advanced Research" },
                { icon: Award, title: "Award-winning Care" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="p-4 bg-blue-50 shadow-md">
                    <feature.icon className="w-8 h-8 mb-2 text-blue-500" />
                    <h4 className="font-semibold text-gray-800">
                      {feature.title}
                    </h4>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                Learn More About Our Vision
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
