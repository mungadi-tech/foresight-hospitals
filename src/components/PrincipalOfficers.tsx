"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as Avatar from "@radix-ui/react-avatar";
import { Badge } from "@radix-ui/themes";
import { motion, useAnimation, useInView } from "framer-motion";
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import React, { useEffect, useRef } from "react";
import mdgm from "../assets/mdgm.jpeg";

interface LeaderProps {
  fullName: string;
  designation: string;

  qualification: string;
  imageUrl: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

const LeaderCard: React.FC<LeaderProps> = ({
  fullName,
  designation,

  qualification,
  imageUrl,
  socialLinks,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <Card className="w-full max-w-sm mx-auto overflow-hidden group">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        <CardHeader className="relative z-10 text-center transition-colors duration-300 group-hover:text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Avatar.Root className="w-32 h-32 mx-auto mb-4 border-4 border-white shadow-lg">
              <Avatar.Image src={imageUrl} alt={fullName} />
              <Avatar.Fallback>
                {fullName
                  ? fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                  : ""}
              </Avatar.Fallback>
            </Avatar.Root>
          </motion.div>
          <CardTitle className="text-2xl font-bold">{fullName}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 text-center space-y-4 transition-colors duration-300 group-hover:text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="mb-2 bg-blue-100 text-blue-800 group-hover:bg-white group-hover:text-blue-600">
              {designation}
            </Badge>
            <p className="text-sm group-hover:text-blue-100">{qualification}</p>
          </motion.div>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {socialLinks.facebook && (
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Facebook size={20} />
              </motion.a>
            )}
            {socialLinks.twitter && (
              <motion.a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Twitter size={20} />
              </motion.a>
            )}
            {socialLinks.linkedin && (
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin size={20} />
              </motion.a>
            )}
            {socialLinks.email && (
              <motion.a
                href={`mailto:${socialLinks.email}`}
                className="text-gray-600 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Mail size={20} />
              </motion.a>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const leadershipTeam: LeaderProps[] = [
  {
    fullName: "Dr Faruk Kabir",
    designation: "MD Abuja Branch",
    qualification: "Consultant Radiologist",
    imageUrl: "/placeholder.svg?height=128&width=128",
    socialLinks: {
      linkedin: "https://linkedin.com/in/emilychen",
      twitter: "https://twitter.com/emilychen",
      email: "emily.chen@foresighthospital.com",
    },
  },
  {
    fullName: "Dr Halima Waziri",
    designation: "MD Kaduna Branch",
    qualification: "Consultant Family Physician",
    imageUrl: "/placeholder.svg?height=128&width=128",
    socialLinks: {
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      twitter: "https://twitter.com/michaelrodriguez",
      email: "michael.rodriguez@foresighthospital.com",
    },
  },
  {
    fullName: "Dr Aliyu Muhammad Koko",
    designation: "MD Sokoto Branch",
    qualification: " Consultant Neurosurgeon ",
    imageUrl: "/placeholder.svg?height=128&width=128",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarahthompson",
      facebook: "https://facebook.com/sarahthompson",
      email: "sarah.thompson@foresighthospital.com",
    },
  },
  {
    fullName: "Dr Ishaq Inuwa",
    designation: "MD Gombe Branch",
    qualification: "Consultant Family Physician ",
    imageUrl: mdgm,
    socialLinks: {
      linkedin: "https://linkedin.com/in/robertpatel",
      twitter: "https://twitter.com/robertpatel",
      email: "robert.patel@foresighthospital.com",
    },
  },
];

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-500 rounded-full opacity-20"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export function LeadershipTeam() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50 py-20 overflow-hidden">
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-800 mb-4"
        >
          Our Leadership Team
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-2/3 px-4 mt-2 mb-12 mx-auto"
        >
          <p className="text-center text-lg text-blue-600">
            Foresight Hospital's leadership team brings together experienced
            healthcare professionals and administrators. Their combined
            expertise guides our institution in providing cutting-edge medical
            care and maintaining operational excellence.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {leadershipTeam.map((leader, index) => (
            <LeaderCard key={index} {...leader} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
