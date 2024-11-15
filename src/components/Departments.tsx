import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs } from "@radix-ui/themes";

import { Link } from "@tanstack/react-router";

interface Program {
  name: string;

  description: string;
  keyServices: string[];
  teamExpertise: string[];
  uniqueOffering: string[];
}

const programs: Program[] = [
  {
    name: "General Medecine",
    description:
      "To deliver high-quality, holistic medical care focusing on adult patients with a wide range of acute and chronic conditions.",
    keyServices: [
      "Diagnosis",
      "prevention and Management of diseases such as diabetes",
      "hypertension",
      "respiratory disorders",
      "and infectious diseases",
    ],
    teamExpertise: [
      "Registered Nurse in Hospitals",
      "Community Health Nurse",
      "Pediatric Nurse",
      "Nurse Educator",
      "Research Nurse",
    ],
    uniqueOffering: [
      " Emphasis on preventive care, with tailored wellness programs to reduce the risk of chronic diseases.",
    ],
  },
  {
    name: "General Surgery",

    description:
      "To offer safe, precise, and effective surgical solutions for various medical conditions",
    keyServices: [
      "Procedures including appendectomies",
      "hernia repairs",
      "gastrointestinal surgeries",
      "and laparoscopic operations",
    ],
    teamExpertise: [
      "Surgeons trained in minimally invasive techniques to reduce recovery time and improve patient outcomes",
    ],
    uniqueOffering: [
      "Enhanced Recovery After Surgery (ERAS) program that focuses on faster recovery and reduced hospital stays.",
    ],
  },
  {
    name: "ENT",

    description:
      "To provide comprehensive care for conditions related to the ear, nose, throat, head, and neck.",
    keyServices: [
      "Diagnosis and treatment of hearing loss",
      "sinus disorders",
      "allergies",
      "voice issues",
      "and sleep apnea",
    ],
    teamExpertise: [
      "Skilled in endoscopic sinus surgery, cochlear implants, and advanced reconstructive techniques.",
    ],
    uniqueOffering: [
      "Minimally invasive surgeries and personalized treatment plans to enhance patient comfort and recovery.",
    ],
  },
  {
    name: "Gynecology",

    description:
      "To provide women with comprehensive reproductive health care throughout all stages of life.",
    keyServices: [
      "Routine exams",
      "prenatal and postnatal care",
      "menstrual and fertility issues",
      "menopause management",
      "and gynecologic surgeries",
    ],
    teamExpertise: [
      "Expert gynecologists and obstetricians skilled in minimally invasive surgery and complex gynecologic cases.",
    ],
    uniqueOffering: [
      "A focus on personalized women’s health with access to a full range of reproductive and preventive care services.",
    ],
  },
  {
    name: "Intensive Care Unit (ICU)",

    description:
      "To provide critical care and life-saving treatment to patients with severe or life-threatening conditions.",
    keyServices: [
      "24/7 monitoring and management of critically ill patients, including those with respiratory failure organ dysfunction",
      "and post-surgical complications",
    ],
    teamExpertise: [
      "A team of intensivists, critical care nurses, and respiratory therapists skilled in critical care interventions.",
    ],
    uniqueOffering: [
      "Multidisciplinary approach with rapid-response teams for specialized interventions and close collaboration with other departments for tailored patient care.",
    ],
  },
  {
    name: "Outpatient Department",

    description:
      "To offer accessible, efficient care for patients seeking consultations, follow-ups, and preventive services without hospital admission",
    keyServices: [
      "Diagnostic tests",
      "consultations",
      "minor procedures",
      "screenings",
      "and follow-up care across all departments",
    ],
    teamExpertise: [
      "A team of physicians, nurse practitioners, and specialists providing timely and effective care for both acute and chronic conditions",
    ],
    uniqueOffering: [
      "Streamlined services designed for patient convenience, ensuring quick assessments, reduced wait times, and continuity of care across specialties.",
    ],
  },
];

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => (
  <Card className="w-full">
    <CardHeader className="flex flex-row justify-between items-center">
      <CardTitle>{program.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="mb-4">{program.description}</p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="keyServices">
          <AccordionTrigger>Key Services</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5">
              {program.keyServices.map((keyServices, index) => (
                <li key={index}>{keyServices}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="teamExpertise">
          <AccordionTrigger>Team Expertise</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5">
              {program.teamExpertise.map((teamExpertise, index) => (
                <li key={index}>{teamExpertise}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="uniqueOffering">
          <AccordionTrigger>Unique Offering</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5">
              {program.uniqueOffering.map((uniqueOffering, index) => (
                <li key={index}>{uniqueOffering}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
    <CardFooter className="flex justify-between items-center">
      <Button>
        <Link href="/">Appointment</Link>
      </Button>
    </CardFooter>
  </Card>
);

export function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Departments
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Foresight Premier Hospitals, each department is dedicated to
          delivering specialized, patient-centered care. Our departments work
          collaboratively to provide comprehensive healthcare services across a
          range of medical specialties. From primary care and emergency services
          to advanced diagnostics and surgical treatments, our skilled
          professionals are here to support you at every stage of your health
          journey.
        </motion.p>

        <Tabs.Root defaultValue="all" className="mb-12">
          <Tabs.List className="grid w-full grid-cols-3 mb-8">
            <Tabs.Trigger value="all">All Departments</Tabs.Trigger>
            <Tabs.Trigger value="all">All Laboratories</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProgramCard program={program} />
                </motion.div>
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}
