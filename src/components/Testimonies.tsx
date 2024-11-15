"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import dwp from "../assets/doctor_patient.jpg";
import avatar from "../assets/avatar.png";

const testimonials = [
  {
    id: 1,
    name: "Amina Y",
    role: "SATISFIIED PATIENT",
    image: avatar,
    content:
      "Foresight Premier Healthcare has been a true blessing for me and my family. The doctors and staff showed such kindness and patience, explaining every step of my treatment clearly. I felt well-cared for, and their dedication to keeping the facility safe and clean gave me confidence. I highly recommend them to anyone looking for excellent healthcare.",
  },
  {
    id: 2,
    name: "Olumide S",
    role: "HAPPY PATIENT",
    image: avatar,
    content:
      "Choosing Foresight Premier Healthcare was one of the best decisions I made for my health. The staff’s dedication to patient care and the quality of their facilities are outstanding. They provided me with all the information I needed and kept me involved in my treatment. I highly recommend them to anyone seeking top-notch healthcare in Nigeria!",
  },
  {
    id: 3,
    name: "Chinyere O.",
    role: "REGULAR PATIENT",
    image: avatar,
    content:
      "Foresight Premier Healthcare exceeded my expectations! From the moment I walked in, I was treated with warmth and compassion. The specialists took the time to understand my health concerns and crafted a treatment plan that worked for me. Their infection control measures made me feel comfortable, and the results of my treatment have been fantastic.",
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

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.3 - 0.15,
        speedY: Math.random() * 0.3 - 0.15,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.1)";
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

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [api]);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
      <Particles />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-500 font-medium mb-4 block">
              OUR TESTIMONIALS
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Our Happy Patients
            </h2>

            <p className="text-gray-600 mb-12">
              Professional without enterprisee-commerce. Uniquely happy clinets
              innovative technologies via team member.
            </p>

            <Carousel className="w-full max-w-xl" setApi={setApi}>
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <Card className="p-6 bg-white/80 backdrop-blur-sm">
                      <div className="flex items-start space-x-4 mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="font-bold text-lg text-navy-900">
                            {testimonial.name}
                          </h3>
                          <p className="text-blue-500 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                        <Quote className="w-8 h-8 text-blue-500 ml-auto" />
                      </div>
                      <p className="text-gray-600 italic">
                        {testimonial.content}
                      </p>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === current - 1 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden">
              <img
                src={dwp}
                alt="Doctor with patients"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
