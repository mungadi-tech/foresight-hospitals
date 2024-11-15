"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import xray from "../assets/digital_xray.jpg";
import dental from "../assets/dental_fixing.jpg";
import surgery from "../assets/surgery.jpg";
import lab from "../assets/lab.jpg";
import { Link } from "@tanstack/react-router";
const services = [
  {
    id: 1,
    category: "X-RAY",
    title: "Digital X-Ray",
    image: xray,
  },
  {
    id: 2,
    category: "DENTAL",
    title: "Dental Fixing",
    image: dental,
  },
  {
    id: 3,
    category: "SURGERY",
    title: "Human Brain Surgery",
    image: surgery,
  },
  {
    id: 4,
    category: "LABORATORY SERVICES",
    title: "Vaccine",
    image: lab,
  },
];

const BackgroundAnimation = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0"
      animate={{
        x: [-1000, 1000],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    <motion.div
      className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 100, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"
      animate={{
        scale: [1, 1.2, 1],
        x: [0, -100, 0],
        y: [0, -50, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.1),transparent_50%)]" />
  </div>
);

export function EnhancedServicesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setCurrent(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const progress = emblaApi
    ? Math.round(((current + 1) / emblaApi.scrollSnapList().length) * 100)
    : 0;

  return (
    <section className="bg-navy-900 py-20 relative overflow-hidden">
      <BackgroundAnimation />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-300 leading-tight"
          >
            PROVIDES
            <br />
            BEST SERVICE
          </motion.h2>

          <div className="flex flex-col justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 mb-6"
            >
              At Foresight Premier Hospitals, we are committed to providing
              comprehensive, personalized care that empowers you to take control
              of your health and well-being. Our services are designed with a
              patient-centered approach, ensuring that you receive the highest
              standard of care tailored to your unique needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/services">
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white group"
                  size="lg"
                >
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                      transition: { duration: 0.3 },
                    }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group rounded-3xl overflow-hidden"
                  >
                    <div className="relative h-[600px]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                        animate={
                          current === index
                            ? {
                                background: [
                                  "radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, transparent 50%)",
                                  "radial-gradient(circle at center, rgba(59,130,246,0.2) 0%, transparent 70%)",
                                ],
                              }
                            : {}
                        }
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />

                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <motion.span
                          className="text-blue-400 text-sm font-medium mb-2 block"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.category}
                        </motion.span>
                        <motion.h3
                          className="text-white text-xl font-bold"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {service.title}
                        </motion.h3>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
            onClick={scrollPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
            onClick={scrollNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex space-x-4">
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="bg-white/10 hover:bg-white/20 border-none text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="bg-white/10 hover:bg-white/20 border-none text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
