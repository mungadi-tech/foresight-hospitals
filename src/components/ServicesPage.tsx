import { Badge, Card, Avatar, Tabs } from "@radix-ui/themes";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

interface FacultyMember {
  name: string;
  title: string;
  department: string;
  image: string;
  bio: string;
  specializations: string[];
  contact: {
    email: string;
    twitter?: string;
    linkedin?: string;
  };
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Dr. Aisha Nnamani",
    title: "Professor",
    department: "Abuja",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Nnamani is a renowned expert in critical care nursing with over 20 years of experience in both clinical practice and academia.",
    specializations: [
      "Critical Care",
      "Nursing Education",
      "Evidence-Based Practice",
    ],
    contact: {
      email: "aisha.nnamani@sahadnursing.edu.ng",
      twitter: "https://twitter.com/aishannamani",
      linkedin: "https://linkedin.com/in/aishannamani",
    },
  },
  {
    name: "Prof. Chukwuma Okafor",
    title: "Associate Professor",
    department: "Kaduna",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Prof. Okafor specializes in public health nursing and has led numerous community health initiatives across Nigeria.",
    specializations: ["Public Health", "Epidemiology", "Health Promotion"],
    contact: {
      email: "chukwuma.okafor@sahadnursing.edu.ng",
      linkedin: "https://linkedin.com/in/chukwumaokafor",
    },
  },
  {
    name: "Dr. Fatima Abdullahi",
    title: "Assistant Professor",
    department: "Sokoto",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Abdullahi's research focuses on improving maternal health outcomes in rural communities.",
    specializations: ["Midwifery", "Neonatal Care", "Women's Health"],
    contact: {
      email: "fatima.abdullahi@sahadnursing.edu.ng",
      twitter: "https://twitter.com/fatimaabdullahi",
    },
  },
  {
    name: "Mr. Oluwaseun Adeyemi",
    title: "Lecturer",
    department: "Gombe",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Mr. Adeyemi is at the forefront of integrating technology into nursing education and practice.",
    specializations: [
      "Health Information Systems",
      "Digital Health",
      "Data Analytics",
    ],
    contact: {
      email: "oluwaseun.adeyemi@sahadnursing.edu.ng",
      linkedin: "https://linkedin.com/in/oluwaseunadeyemi",
    },
  },
];

const FacultyCard: React.FC<{ faculty: FacultyMember }> = ({ faculty }) => (
  <Card className="w-full">
    <CardHeader>
      <Avatar
        src={faculty.image}
        className="w-24 h-24 mx-auto mb-4"
        size={"9"}
        fallback={faculty.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      />

      <CardTitle>{faculty.name}</CardTitle>
      <CardDescription>
        {faculty.title}, {faculty.department}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm mb-4">{faculty.bio}</p>
      <div className="mb-4">
        {faculty.specializations.map((spec, index) => (
          <Badge key={index} className="mr-2 mb-2">
            {spec}
          </Badge>
        ))}
      </div>
      <div className="flex space-x-2">
        <a
          href={`mailto:${faculty.contact.email}`}
          className="text-gray-600 hover:text-gray-800"
        >
          <Mail size={20} />
        </a>
        {faculty.contact.twitter && (
          <a
            href={faculty.contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <Twitter size={20} />
          </a>
        )}
        {faculty.contact.linkedin && (
          <a
            href={faculty.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <Linkedin size={20} />
          </a>
        )}
      </div>
    </CardContent>
  </Card>
);

export default function FacultyPage() {
  return (
    <div className="min-h-screen  py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Hospital MDs
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Meet the dedicated professionals shaping the future of healthcare at
          Foresight Premier Healthcare. Our team brings a wealth of experience,
          expertise, and passion to provide exceptional care and support for
          every patient.
        </motion.p>

        <Tabs.Root defaultValue="all" className="mb-12">
          <Tabs.List className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <Tabs.Trigger value="Abuja">Abuja</Tabs.Trigger>
            <Tabs.Trigger value="Kaduna">Kaduna</Tabs.Trigger>
            <Tabs.Trigger value="Sokoto">Sokoto</Tabs.Trigger>
            <Tabs.Trigger value="Gombe">Gombe</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="Abuja">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facultyMembers
                .filter((f) => f.department === "Abuja")
                .map((faculty, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <FacultyCard faculty={faculty} />
                  </motion.div>
                ))}
            </div>
          </Tabs.Content>
          <Tabs.Content value="Kaduna">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facultyMembers
                .filter((f) => f.department === "Kaduna")
                .map((faculty, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <FacultyCard faculty={faculty} />
                  </motion.div>
                ))}
            </div>
          </Tabs.Content>
          <Tabs.Content value="Sokoto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facultyMembers
                .filter((f) => f.department === "Sokoto")
                .map((faculty, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <FacultyCard faculty={faculty} />
                  </motion.div>
                ))}
            </div>
          </Tabs.Content>
          <Tabs.Content value="Gombe">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facultyMembers
                .filter((f) => f.department === "Gombe")
                .map((faculty, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <FacultyCard faculty={faculty} />
                  </motion.div>
                ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>

        {/* <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Faculty</h2>
          <p className="mb-4">
            Sahad College of Nursing is always looking for talented and
            passionate educators to join our team. If you're interested in
            shaping the next generation of nurses, we'd love to hear from you.
          </p>
          <p className="mb-4">
            Current openings include positions in Advanced Practice Nursing,
            Mental Health Nursing, and Nursing Research Methodology. For more
            information about faculty positions, please contact our Human
            Resources department.
          </p>
          <a
            href="mailto:info@sahadcollegeofnursing.org"
            className="text-orange-600 hover:text-orange-800 font-semibold"
          >
            Contact HR about Faculty Positions
          </a>
        </motion.div> */}
      </div>
    </div>
  );
}
