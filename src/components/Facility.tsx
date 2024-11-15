import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog } from "@radix-ui/themes";
import lab from "../assets/fs1.jpeg";
import ward from "../assets/private_ward.jpeg";
import sim from "../assets/laboratory.jpeg";
import labor from "../assets/labor_room.jpeg";
import labor2 from "../assets/labor_room2.jpeg";
import baby from "../assets/baby_recovery.jpeg";
import reception from "../assets/reception.jpeg";
import publicwards from "../assets/public_wards.jpeg";
import facility from "../assets/facility1.jpeg";
interface Facility {
  id: number;
  name: string;
  image: string;
  description: string;
}

const facilities: Facility[] = [
  {
    id: 1,
    name: "State-of-the-Art Labs",
    image: sim,
    description:
      "State-of-the-art lab services for precise testing and timely results, supporting accurate diagnosis and treatment plans.",
  },
  {
    id: 2,
    name: "Reception",
    image: reception,
    description:
      "A welcoming and friendly space where our team is ready to assist you with any questions and make your visit as smooth as possible.",
  },
  {
    id: 3,
    name: "Private Wards",
    image: ward,
    description:
      "Exclusive rooms for added privacy, comfort, and personalized care, tailored to meet your specific recovery needs",
  },
  {
    id: 4,
    name: "Ultrasound Rooms",
    image: lab,
    description:
      "Advanced imaging technology for accurate and detailed diagnostics, ensuring you receive the best care and insight into your health.",
  },
  {
    id: 5,
    name: "Labor Rooms",
    image: labor2,
    description:
      "A caring, safe environment with specialized support for mothers and newborns, ensuring comfort and expert care for a healthy delivery.",
  },
  {
    id: 6,
    name: "Neonatal Recovery Rooms",
    image: baby,
    description:
      "A warm and nurturing space designed for newborns and mothers to rest and bond, with specialized support for a smooth recovery right after delivery.",
  },
  {
    id: 7,
    name: "Public Wards",
    image: publicwards,
    description:
      "Spacious, well-maintained shared wards that provide comfort and compassionate care in a supportive community setting.",
  },
  {
    id: 8,
    name: "Labor Rooms",
    image: labor,
    description:
      "A caring, safe environment with specialized support for mothers and newborns, ensuring comfort and expert care for a healthy delivery.",
  },
  {
    id: 9,
    name: "Labor Rooms",
    image: facility,
    description:
      "A caring, safe environment with specialized support for mothers and newborns, ensuring comfort and expert care for a healthy delivery.",
  },
];

const FacilityCard: React.FC<{ facility: Facility }> = ({ facility }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <img
          src={facility.image}
          alt={facility.name}
          width={400}
          height={300}
          className="rounded-lg object-cover w-full h-48"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-2">{facility.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {facility.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger>
            <Button variant="outline">Learn More</Button>
          </Dialog.Trigger>
          <Dialog.Content className="sm:max-w-[425px]">
            <Dialog.Title>{facility.name}</Dialog.Title>

            <div className="grid gap-4 py-4">
              <img
                src={facility.image}
                alt={facility.name}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full"
              />
              <Dialog.Description>{facility.description}</Dialog.Description>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </CardFooter>
    </Card>
  );
};

export function FacilitiesGallery() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our World-Class Facilities
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Foresight Premier Hospitals is equipped with state-of-the-art
          facilities designed to enhance your healthcare experience and support
          top-quality care. Our modern diagnostic and treatment centers are
          outfitted with advanced technology to ensure precise, efficient, and
          reliable care across all specialties.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FacilityCard facility={facility} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
