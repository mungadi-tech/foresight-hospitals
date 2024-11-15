"use client";

import { motion, useAnimationControls } from "framer-motion";
import logo from "../assets/logofs.jpeg";
import { useEffect, useState } from "react";

const logos = [
  {
    name: "Medical Healthcare",
    image: logo,
  },
  {
    name: "Dental Office",
    image: logo,
  },
  {
    name: "TILRAY MEDICAL",
    image: logo,
  },
  {
    name: "AspenDe",
    image: logo,
  },
  {
    name: "SMILES FAMILY DENTAL",
    image: logo,
  },
];

// Double the logos array for seamless infinite scroll
const doubledLogos = [...logos, ...logos];

export function EnhancedLogoMarquee() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: isHovered ? 0 : "-50%",
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  }, [isHovered, controls]);

  return (
    <section className="py-16 overflow-hidden relative bg-gradient-to-b from-blue-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0,0,255,0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-100/20 to-transparent" />
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Logo marquee */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          className="flex items-center gap-12"
          animate={controls}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {doubledLogos.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-48 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-50 to-transparent z-10" />
      </div>
    </section>
  );
}
