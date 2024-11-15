"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Crosshair, Bot, Target } from "lucide-react";

const cards = [
  {
    icon: Crosshair,
    title: "Our Mission",
    description:
      "Our mission at Foresight Premier Hospitals is to deliver exceptional, compassionate healthcare services that empower our patients to lead healthier lives. Through advanced medical practices, patient-centered care, and a commitment to continuous improvement, we strive to set the standard for healthcare excellence in Nigeria",
  },
  {
    icon: Bot,
    title: "Our Planning",
    description:
      "At Foresight Premier Hospitals, our plan centers on delivering patient-focused care, adopting advanced technology, and expanding our reach. We emphasize personalized care, community health initiatives, and continuous staff development to enhance quality and accessibility.",
  },
  {
    icon: Target,
    title: "Our Vission",
    description:
      "Our vision is to be a leading healthcare provider in Nigeria, known for clinical excellence, innovative practices, and an unwavering commitment to patient well-being. We envision a future where every community we serve has access to world-class healthcare, fostering a healthier, more resilient society..",
  },
];

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.2)";
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
  );
};

export function ServiceCardsWithParticles() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-none h-full">
                  <div className="flex flex-col space-y-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <card.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
