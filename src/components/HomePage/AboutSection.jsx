/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import { Typography, Button } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";

const AboutSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };
  return (
    <section id="about" className="py-16 xx:px-6  ss:px-12 bg-primary">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Team working together"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: "backInOut" }}
              variants={itemVariants}
              className="mb-12"
            >
              <Typography
                variant="h2"
                className="mb-4 ss:text-3xl xx:text-2xl text-secondary "
              >
                About <span className="text-accent">Me</span>
              </Typography>
            </motion.div>
            <Typography className="text-black mb-6">
              We are a passionate team dedicated to creating innovative
              solutions that make a difference. With years of experience and a
              commitment to excellence, we strive to exceed expectations and
              deliver results that matter. Our approach combines cutting-edge
              technology with creative thinking to solve complex problems and
              drive growth for our clients.
            </Typography>
            <Typography className="text-black mb-8">
              Whether you're a startup looking to disrupt the market or an
              established enterprise seeking to stay ahead of the curve, we have
              the expertise and resources to help you achieve your goals. Join
              us on this exciting journey of innovation and success.
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-accent text-white flex gap-2" size="lg">
                Learn More
                <FaArrowRight className="text-sm" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
