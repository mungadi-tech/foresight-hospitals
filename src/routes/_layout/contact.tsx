import { ContactPage } from "@/components/ContactUs";
import { Button } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import front from "../../assets/front.jpeg";

export const Route = createFileRoute("/_layout/contact")({
  component: () => (
    <div>
      <div className="relative bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r bg-gray-800 to-blue-600 opacity-75" />
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
              Healthcare.
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
                <MapPin className="mr-2" /> NO.7 THABA TSEKA STREET WUSE 2 ABUJA
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
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
            </motion.div>
          </div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img
              src={front}
              alt="forseight hospitals"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      <ContactPage />
    </div>
  ),
});
