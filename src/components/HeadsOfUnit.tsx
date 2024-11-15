"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@radix-ui/themes";
import * as Avatar from "@radix-ui/react-avatar";
import kdmd from "../assets/md_kd.jpeg";
import mdgm from "../assets/mdgm.jpeg";

interface DepartmentHeadProps {
  fullName: string;
  designation: string;

  qualification: string;
  imageUrl: string;
  contactInfo: {
    email: string;
    phone: string;
  };
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const DepartmentHeadCard: React.FC<DepartmentHeadProps> = ({
  fullName,
  designation,
  qualification,
  imageUrl,
  contactInfo,
  socialLinks,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <Card className="w-full max-w-sm mx-auto overflow-hidden">
      <CardHeader className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Avatar.Root className="inline-flex h-32 w-32 select-none items-center justify-center overflow-hidden rounded-full">
            <Avatar.Image
              className="h-full w-full object-cover"
              src={imageUrl}
              alt={fullName}
            />
            <Avatar.Fallback className="text-violet600 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium">
              {fullName
                ? fullName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                : ""}
            </Avatar.Fallback>
          </Avatar.Root>
        </motion.div>
        <CardTitle className="mt-4">{fullName}</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Badge className="mb-2 bg-blue-100 text-blue-800">
            {designation}
          </Badge>
          <p className="text-sm text-muted-foreground">{qualification}</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-sm text-gray-600 hover:text-gray-800 flex items-center"
          >
            <Mail size={16} className="mr-2" />
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="text-sm text-gray-600 hover:text-gray-800 flex items-center"
          >
            <Phone size={16} className="mr-2" />
            {contactInfo.phone}
          </a>
        </motion.div>
        {socialLinks && (
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {socialLinks.facebook && (
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
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
                className="text-blue-400 hover:text-blue-600"
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
                className="text-blue-700 hover:text-blue-900"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin size={20} />
              </motion.a>
            )}
          </motion.div>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

const departmentHeads: DepartmentHeadProps[] = [
  {
    fullName: "Dr. Faruk Kabir",
    designation: "Consultant Radiologist",

    qualification: "M.D., Ph.D. in Cardiovascular Medicine",
    imageUrl: "/placeholder.svg?height=128&width=128",
    contactInfo: {
      email: "faruk@foresighthospital.com",
      phone: "+1 (555) 123-4567",
    },
    socialLinks: {
      linkedin: "https://linkedin.com/in/aisharahman",
      twitter: "https://twitter.com/aisharahman",
    },
  },
  {
    fullName: "Dr. Halima Waziri",
    designation: "MD Kaduna Branch",

    qualification: "Consultant Family Physician",
    imageUrl: kdmd,
    contactInfo: {
      email: "halima@foresighthospital.com",
      phone: "+1 (555) 234-5678",
    },
    socialLinks: {
      facebook: "https://facebook.com/jameschen",
      linkedin: "https://linkedin.com/in/jameschen",
    },
  },
  {
    fullName: "Dr. Aliyu Muhammad Koko",
    designation: "MD Sokoto Branch",

    qualification: "Consultant Neurosurgeon",
    imageUrl: "/placeholder.svg?height=128&width=128",
    contactInfo: {
      email: "aliyu.koko@foresighthospital.com",
      phone: "+1 (555) 345-6789",
    },
    socialLinks: {
      twitter: "https://twitter.com/mariarodriguez",
      linkedin: "https://linkedin.com/in/mariarodriguez",
    },
  },
  {
    fullName: "Dr Ishaq Inuwa",
    designation: "MD Gombe Branch",
    qualification: "Consultant Family Physician",
    imageUrl: mdgm,
    contactInfo: {
      email: "ishaq@foresighthospitals.com",
      phone: "+1 (555) 456-7890",
    },
    socialLinks: {
      facebook: "https://facebook.com/michaelokafor",
      twitter: "https://twitter.com/michaelokafor",
      linkedin: "https://linkedin.com/in/michaelokafor",
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

export function DepartmentHeads() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <Particles />
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-blue-800 mb-4"
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
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {departmentHeads.map((head, index) => (
            <DepartmentHeadCard key={index} {...head} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
