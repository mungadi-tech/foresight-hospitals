import OurLocations from "@/components/OurLocation";
import { EnhancedLogoMarquee } from "@/components/PartnersMarque";
import { EnhancedServicesSection } from "@/components/Services";
import { TestimonialsSection } from "@/components/Testimonies";
import { MedicalHealthCareSection } from "@/components/WhyChooseus";
import { BlogSection } from "@/components/blog";
import { Button, Dialog, Flex, IconButton, Text } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import bg from "../../assets/docs.jpg";
import about from "../../assets/about.jpeg";
import why from "../../assets/front.jpeg";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
const branches = [
  { name: "Sokoto", image: why },
  { name: "Kaduna", image: bg },
  { name: "Abuja", image: bg },
  { name: "Gombe", image: bg },
];

function HomePage() {
  const [open, onOpenChange] = useState(true);
  const [currentBranch, setCurrentBranch] = useState(0);

  const nextBranch = () =>
    setCurrentBranch((prev) => (prev + 1) % branches.length);
  const prevBranch = () =>
    setCurrentBranch((prev) => (prev - 1 + branches.length) % branches.length);
  return (
    <div className="min-h-screen bg-blue-50">
      <main>
        <section className="relative w-full h-screen">
          <Dialog.Root onOpenChange={onOpenChange} open={open}>
            <Dialog.Content>
              <Flex align={"center"} justify={"between"} mb={"4"}>
                <Dialog.Title>Notice Board</Dialog.Title>
                <Dialog.Close>
                  <IconButton>
                    <X />
                  </IconButton>
                </Dialog.Close>
              </Flex>
              <Dialog.Description mb={"4"} size={"2"} weight={"bold"}>
                📢 Announcement: Kaduna Branch Opening Ceremony 📢
              </Dialog.Description>
              <Text style={{ color: "black" }} size={"1"}>
                !!!!!!!!!!!!!!!!!!!!!!!!!!!
              </Text>
            </Dialog.Content>
          </Dialog.Root>
          <img
            src={branches[currentBranch].image}
            alt={`Foresight Hospital ${branches[currentBranch].name} Branch`}
            className="brightness-50 object-cover w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-4"
            >
              Welcome to Foresight Premier Hospitals
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl mb-8"
            >
              {branches[currentBranch].name} Branch
            </motion.p>
            <Button size="4">Book an Appointment</Button>
          </div>
          <Button
            variant="outline"
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={prevBranch}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={nextBranch}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </section>
        <EnhancedLogoMarquee />

        <section className="bg-gradient-to-br from-blue-50 to-white min-h-screen relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />

          <div className="container mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left column with image and stats */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src={about}
                    alt="Healthcare professional assisting patient"
                    width={800}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>

                {/* Stats section */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-blue-500 text-white p-8 rounded-3xl mt-8 grid grid-cols-2 gap-8"
                >
                  <div>
                    <h3 className="text-5xl font-bold mb-2">100K</h3>
                    <p className="text-blue-100">RECOVERED PATIENTS</p>
                  </div>
                  <div>
                    <h3 className="text-5xl font-bold mb-2">95%</h3>
                    <p className="text-blue-100">SATISFACTION RATE</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right column with content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:pl-12"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-blue-500 font-medium mb-4 block"
                >
                  ABOUT COMPANY
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6"
                >
                  Delivering Efficient Care
                  <br />
                  Since - 2020
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-600 mb-8"
                >
                  At Foresight Premier Hospitals, we are dedicated to the
                  continuous advancement of professional healthcare through
                  cutting-edge medical practices and a patient-first approach.
                  With four strategically located branches in Sokoto, Abuja,
                  Gombe, and Kaduna, we provide world-class services that cater
                  to diverse medical needs, ensuring that every patient receives
                  the highest standard of care
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="grid grid-cols-2 gap-4 mb-8"
                >
                  {[
                    "Inpatient Services",
                    "Outpatient Services",
                    "Maternity and Obstetric Services",
                    "Surgical Services",
                    "Diagnostic Services",
                  ].map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-gray-700">{service}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link href="/about">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full text-lg">
                      More About <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        <EnhancedServicesSection />
        <MedicalHealthCareSection />
        {/* Testimonial Section */}
        <TestimonialsSection />
        {/* Blog Section */}
        <BlogSection />
        <section className="w-full py-16 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Book an Appointment</h2>
            <p className="text-xl mb-8">
              Ready to experience world-class healthcare? Book your appointment
              today!
            </p>
            <Button className="bg-blue-500" size="4">
              Schedule Now
            </Button>
          </div>
        </section>
        {/* Locations Section */}
        <OurLocations />
      </main>
    </div>
  );
}
