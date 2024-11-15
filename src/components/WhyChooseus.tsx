"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Users, Pill, ShieldCheck, Stethoscope } from "lucide-react";
import dwc from "../assets/doctors_collegue.jpeg";
import mp from "../assets/medical_prof.jpg";
import { GearIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";
const features = [
  { icon: Users, title: "Expert Specialists" },
  { icon: Pill, title: "Individualized Care" },
  { icon: ShieldCheck, title: "Advanced Infection Control" },
  { icon: Stethoscope, title: "Comprehensive Healthcare Services" },
  { icon: GearIcon, title: "Innovation and Technology" },
];

export function MedicalHealthCareSection() {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0"
          animate={{
            x: [-1000, 1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side with images */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <img
                src={mp}
                alt="Medical Professional"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
              <motion.div
                className="absolute -top-4 -left-4 bg-white p-2 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Heart className="w-8 h-8 text-red-500" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src={dwc}
                alt="Doctor with colleagues"
                width={160}
                height={160}
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right side content */}
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-blue-600 font-semibold mb-2 block"
            >
              WHY CHOOSE US?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Medical Health Care, Human Specialist
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-600 mb-8"
            >
              Choosing the right healthcare provider is essential for your peace
              of mind and well-being. At Foresight Premier Hospitals, we go
              above and beyond to provide the care, expertise, and support you
              need. Here&apos;s why patients trust us for their healthcare needs
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  custom={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                >
                  <Card className="p-4 flex items-center space-x-4 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors">
                    <feature.icon className="w-8 h-8 text-blue-500" />
                    <span className="font-medium text-gray-800">
                      {feature.title}
                    </span>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 text-gray-600"
            >
              Need any Help? Contact with{" "}
              <Link href="/contact">Forseight Hospitals</Link>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
