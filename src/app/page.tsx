"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PREFFIX, SUFFIX, COMPANY_TAGLINE, COMPANY_DESCRIPTION, COMPANY_SUBTITLE, MAIN_PRODUCTS, AUSTRALIA_OPERATIONS, DIGITAL_SOLUTIONS } from "../../global-config";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary/10 dark:from-gray-900 dark:via-primary/10 dark:to-primary/5">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full border-b border-black/[0.1] bg-white/70 backdrop-blur-lg dark:bg-gray-900/70 dark:border-white/[0.1] z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Logo />
            </motion.div>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" className="rounded-lg">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center space-y-8"
          >
            <motion.div 
              variants={fadeIn}
              className="inline-block"
            >
              <span className="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground mb-8">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                Welcome to {PREFFIX} {SUFFIX}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient"
            >
              {COMPANY_TAGLINE}
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {COMPANY_SUBTITLE}
            </motion.p>

            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Link href="/login">
                <Button size="lg" className="w-full sm:w-auto rounded-lg bg-primary hover:bg-primary/90 h-12 px-8">
                  Access Dashboard →
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-lg h-12 px-8">
                  View Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {COMPANY_DESCRIPTION}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Since MNG's inception in 1989, we've innovated our way to a new benchmark for excellence in our industry. We equip the best land surveying, mapping and spatial talent with state-of-the-art technology.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature Cards */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-black/[0.1] dark:border-white/[0.1]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From land surveying to laser scanning and geospatial data management, we provide comprehensive spatial solutions across Australia.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {AUSTRALIA_OPERATIONS.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-black/[0.1] dark:border-white/[0.1] group hover:border-primary/20"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
                  {service}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Digital Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our innovative digital tools and platforms designed to streamline your spatial data management and decision-making processes.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {digitalSolutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border border-black/[0.1] dark:border-white/[0.1]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500"></div>
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{solution.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Logo />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Land Surveying and Spatial Solutions since 1989.
              </p>
            </motion.div>
            
            <FooterColumn title="Services" links={serviceLinks} />
            <FooterColumn title="Industries" links={industryLinks} />
            <FooterColumn title="Company" links={companyLinks} />
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {PREFFIX} {SUFFIX}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Feature data updated for MNG Survey's surveying and spatial focus
const features = [
  {
    title: "Advanced Technology",
    description: "State-of-the-art surveying equipment including laser scanning (LiDAR), aerial surveying, and precision control systems for accurate spatial data.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Expert Team",
    description: "Experienced land surveyors, mapping specialists, and spatial experts with deep industry knowledge across diverse sectors.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Solutions",
    description: "End-to-end spatial solutions from initial surveying through to data analysis, mapping, and asset management for maximum project value.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
];

// Digital solutions data
const digitalSolutions = [
  {
    name: "MNG ACCESS",
    description: "View constraints, spatial data and survey insights anywhere to make faster, smarter decisions with intuitive visualisation tools."
  },
  {
    name: "POZI",
    description: "Deliver accessible, location-based data with seamless system integrations and powerful mapping capabilities."
  },
  {
    name: "METRIX ASSETS",
    description: "Simplify asset management with powerful tools for tracking, planning, and decision-making across your portfolio."
  }
];

// Updated footer links for MNG Survey
const serviceLinks = [
  { label: "Land Surveying", href: "#" },
  { label: "Laser Scanning", href: "#" },
  { label: "Aerial Surveying", href: "#" },
  { label: "Engineering Surveying", href: "#" },
  { label: "Hydrographic Surveying", href: "#" },
  { label: "BIM Services", href: "#" },
];

const industryLinks = [
  { label: "Land Development", href: "#" },
  { label: "Resource Sector", href: "#" },
  { label: "Infrastructure", href: "#" },
  { label: "Utilities", href: "#" },
  { label: "Government", href: "#" },
  { label: "Environment", href: "#" },
];

const companyLinks = [
  { label: "About MNG", href: "#" },
  { label: "Our Team", href: "#" },
  { label: "Careers", href: "#" },
  { label: "News", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Portfolio", href: "#" },
];

function FooterColumn({ title, links }: { title: string, links: { label: string, href: string }[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
