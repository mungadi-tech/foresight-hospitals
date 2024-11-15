import { Badge, Card } from "@radix-ui/themes";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";
import * as Avatar from "@radix-ui/react-avatar";
import gmd from "../assets/gmd.jpeg";

export function ChiefMedicalOfficer() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-r from-blue-100 to-indigo-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-800">
              <Stethoscope className="h-6 w-6 text-blue-600" />
              Meet Our General Managing Director
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Avatar.Root className="inline-flex h-32 w-32 select-none items-center justify-center overflow-hidden rounded-full bg-blue-200">
                <Avatar.Image
                  className="h-full w-full object-cover"
                  src={gmd}
                  alt="Dr. shamsu"
                />
                <Avatar.Fallback
                  className="text-blue-600 text-2xl font-medium flex h-full w-full items-center justify-center bg-blue-100"
                  delayMs={600}
                >
                  EC
                </Avatar.Fallback>
              </Avatar.Root>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-800">
                  Dr. Shamsudden Aliyu
                </h3>
                <p className="text-sm text-gray-600">
                  General Managing Director
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-200 text-blue-800">
                  MBBS, MSc, PhD, MBA, D.BA, MRCR
                </Badge>
                <Badge className="bg-blue-200 text-blue-800">
                  15+ Years Experience
                </Badge>
                <Badge className="bg-blue-200 text-blue-800">
                  Healthcare Innovation
                </Badge>
              </div>
              <p className="text-gray-700">
                Welcome to Foresight Premier Hospitals. It is my pleasure to
                extend a warm greeting to you on behalf of our entire team.
                Since our establishment, we have been committed to providing
                high-quality, compassionate care to every patient who walks
                through our doors. Our mission is to ensure that you receive the
                best healthcare experience, guided by skilled professionals and
                supported by cutting-edge technology.
              </p>
              <p className="text-gray-700">
                At Foresight Premier Hospitals, we understand that each patient
                is unique, and we are dedicated to offering personalized care
                that addresses your individual needs. Our goal is to empower you
                to take control of your health while providing a safe,
                comfortable, and healing environment.
              </p>
              <p className="text-gray-700">
                Thank you for trusting us with your care. We are here to support
                you on your health journey, every step of the way.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
