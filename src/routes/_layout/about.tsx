import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseMedical, ChevronRight } from "lucide-react";

import { ChiefMedicalOfficer } from "@/components/ChiefMedicalO";
import { DepartmentHeads } from "@/components/HeadsOfUnit";
import { ForesightHistory } from "@/components/History";
import { ServiceCardsWithParticles } from "@/components/Mission";
import { LeadershipTeam } from "@/components/PrincipalOfficers";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <section>
      <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <motion.div
              className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                x: ["-50%", "-45%", "-55%", "-50%"],
                y: ["-50%", "-55%", "-45%", "-50%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                x: ["-50%", "-55%", "-45%", "-50%"],
                y: ["-50%", "-45%", "-55%", "-50%"],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute top-3/4 left-3/4 w-[700px] h-[700px] bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              animate={{
                scale: [1, 1.1, 0.9, 1],
                x: ["-50%", "-45%", "-55%", "-50%"],
                y: ["-50%", "-55%", "-45%", "-50%"],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Modern hospital interior"
            width={1920}
            height={1080}
            className="opacity-20 mix-blend-overlay object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 py-24 sm:py-32"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100"
            >
              Welcome to Foresight Premier Hospitals
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-8 text-blue-100"
            >
              Pioneering healthcare excellence with cutting-edge technology and
              compassionate care since 2020
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button
                size="4"
                className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300"
              >
                <Link href="/services">Our Services</Link>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="4"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-200 to-transparent"></div>
      </div>
      <ForesightHistory />
      <ServiceCardsWithParticles />
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
                Since 2020, we have been working as a medical group, caring for
                over
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-bold"
                >
                  1,500 + Patients.
                </motion.span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                variant="ghost"
                size="4"
                className="bg-white text-blue-500 hover:bg-blue-50 transition-colors group"
              >
                <Link href="/contact">Contact Us</Link>
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <ChiefMedicalOfficer />

      <DepartmentHeads />
    </section>
  );
}
