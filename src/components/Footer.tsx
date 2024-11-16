import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Foresight Hospitals
            </h3>
            <p className="mb-4">
              Providing world-class healthcare across Nigeria.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-red-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", url: "/" },
                { name: "About Us", url: "/about" },
                { name: "Services", url: "/services" },
                { name: "Departments", url: "/departments" },
                { name: "Contact", url: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.url}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-red-400">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-400" />
                <a
                  href="mailto:info@foresighthospitals.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@foresighthospitals.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-400" />
                <a
                  href="tel:+2348012345678"
                  className="hover:text-blue-400 transition-colors"
                >
                  +234(0)7044924324 (Abuja) +234(0)8029433148(Gombe)
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-blue-400" />
                <span>NO.7 THABA TSEKA STREET WUSE 2 ABUJA</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-blue-400" />
                <span>
                  BB 16, NUPE ROAD, OFF BIDA ROAD. UNGUWAR RIMI, KADUNA
                </span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-blue-400" />
                <span>
                  No 50 Maikahon Karo Road, off Sultan Ibrahim Dasuki Road,
                  Sokoto
                </span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-blue-400" />
                <span>OFF AJUJI WAZIRI ROAD, FEDERAL LOW-COST, GOMBE</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-red-400">
              Newsletter
            </h3>
            <p className="mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p>&copy; {currentYear} Foresight Hospitals. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
