"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bg from "../assets/front.jpeg";

const branches = [
  {
    name: "Sokoto",
    address: "123 Hospital Road, Sokoto",
    phone: "+234 801 234 5678",
    hours: "24/7",
    image: bg,
  },
  {
    name: "Kaduna",
    address: "BB 16, NUPE ROAD, OFF BIDA ROAD. UNGUWAR RIMI, KADUNA",
    phone: "+234 802 345 6789",
    hours: "24/7",
    image: bg,
  },
  {
    name: "Abuja",
    address: "NO.7 THABA TSEKA STREET WUSE 2 ABUJA",
    phone: "+234(0)7044924324",
    hours: "24/7",
    image: bg,
  },
  {
    name: "Gombe",
    address:
      "OFF. AJUJI WAZIRI ROAD, BEHIND GOMBE LGA INEC OFFICE FEDERAL LOW COST GOMBE.",
    phone: "+234(0)8029433148",
    hours: "24/7",
    image: bg,
  },
];

export default function OurLocations() {
  const [currentBranch, setCurrentBranch] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextBranch = () =>
    setCurrentBranch((prev) => (prev + 1) % branches.length);
  const prevBranch = () =>
    setCurrentBranch((prev) => (prev - 1 + branches.length) % branches.length);

  useEffect(() => {
    if (isHovered) return; // Don't set up the interval if a button is being hovered

    const timer = setInterval(() => {
      setCurrentBranch((prev) => (prev + 1) % branches.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Locations
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentBranch}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between"
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={branches[currentBranch].image}
                      alt={`${branches[currentBranch].name} Branch`}
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <motion.h3
                  key={`${currentBranch}-name`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-semibold mb-4 text-blue-600"
                >
                  {branches[currentBranch].name} Branch
                </motion.h3>
                <motion.div
                  key={`${currentBranch}-details`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center mb-2">
                    <MapPin className="mr-2 h-5 w-5 text-red-500" />
                    <p className="text-gray-600">
                      {branches[currentBranch].address}
                    </p>
                  </div>
                  <div className="flex items-center mb-2">
                    <Phone className="mr-2 h-5 w-5 text-red-500" />
                    <p className="text-gray-600">
                      {branches[currentBranch].phone}
                    </p>
                  </div>
                  <div className="flex items-center mb-6">
                    <Clock className="mr-2 h-5 w-5 text-red-500" />
                    <p className="text-gray-600">
                      Open {branches[currentBranch].hours}
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  key={`${currentBranch}-button`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button className="bg-blue-500">Book an Appointment</Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white"
            onClick={prevBranch}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white"
            onClick={nextBranch}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center mt-8">
          {branches.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                index === currentBranch ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentBranch(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
