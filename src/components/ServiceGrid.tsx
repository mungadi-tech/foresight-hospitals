"use client";

import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Brain,
  Stethoscope,
  UserPlus,
  Calendar,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Users,
    title: "Medical Consultation",
    description:
      "Expert medical consultation with our experienced healthcare professionals for comprehensive diagnosis and treatment planning.",
  },
  {
    icon: Heart,
    title: "Specialized Care",
    description:
      "Advanced specialized care across multiple medical disciplines, ensuring the highest standards of treatment for complex conditions.",
  },
  {
    icon: Brain,
    title: "Diagnostic Services",
    description:
      "State-of-the-art diagnostic services utilizing cutting-edge technology for accurate and timely medical assessments.",
  },
  {
    icon: Stethoscope,
    title: "Preventive Medicine",
    description:
      "Comprehensive preventive healthcare programs designed to maintain wellness and prevent potential health issues.",
  },
  {
    icon: UserPlus,
    title: "Patient Support",
    description:
      "Dedicated patient support services ensuring comfortable and stress-free medical care experience.",
  },
  {
    icon: Calendar,
    title: "Follow-up Care",
    description:
      "Continuous follow-up care and monitoring to ensure optimal recovery and long-term health maintenance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const iconVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

export function ServicesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-800"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Discover our comprehensive range of medical services designed to
          provide you with the highest quality healthcare
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="p-6 h-full bg-white/80 backdrop-blur-sm border border-blue-100 hover:border-blue-200 transition-colors">
                <div className="flex flex-col h-full">
                  <motion.div
                    initial="initial"
                    whileHover="hover"
                    className="mb-4"
                  >
                    <motion.div
                      variants={iconVariants}
                      className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"
                    >
                      <service.icon className="w-6 h-6" />
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2 group"
                  >
                    READ MORE
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
