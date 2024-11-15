import { FacilitiesGallery } from "@/components/Facility";

import { ServicesGrid } from "@/components/ServiceGrid";
import { Button } from "@radix-ui/themes";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseMedical,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import serv from "../../assets/service.jpeg";

export const Route = createFileRoute("/_layout/services")({
  component: () => (
    <div>
      <div className="relative bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-600 opacity-75" />
        <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between mt-10">
          <div className="text-white text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch with Forseight Premier Hospitals
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We&apos;re here to answer your questions and provide the support
              you need on your journey to better health with Foresight Premier
              Hospitals.
            </motion.p>
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="flex items-center justify-center lg:justify-start">
                <Phone className="mr-2" /> +234(0)7044924324
              </p>
              <p className="flex items-center justify-center lg:justify-start">
                <Mail className="mr-2" /> info@foresighthospitals.com
              </p>
              <p className="flex items-center justify-center lg:justify-start">
                <MapPin className="mr-2" /> No.7 Thaba Tseka Street Wuse 2 Abuja
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/contact">
                <Button
                  size="4"
                  className="bg-white text-orange-600 hover:bg-orange-100"
                  onClick={() => {
                    const contactForm = document.getElementById("contact-form");
                    contactForm?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Us Now
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img
              src={serv}
              alt="forseight hospitals"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      <ServicesGrid />

      <motion.section
        className="bg-gradient-to-r from-blue-500 to-blue-600 py-6 relative overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background blur effects */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20" />

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-4 rounded-full">
                <BriefcaseMedical className="w-8 h-8 text-blue-500" />
              </div>
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold max-w-2xl">
                Since 2020 We&apos;re working Medical group more than{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-bold"
                >
                  1200+ Patient
                </motion.span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link rel="stylesheet" href="/contact">
                <Button
                  variant="ghost"
                  size="4"
                  className="bg-white text-blue-500 hover:bg-blue-50 transition-colors group"
                >
                  Contact Us
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <FacilitiesGallery />
    </div>
  ),
});
