import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography, Button } from "@material-tailwind/react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    content:
      "Working with this team has been an absolute pleasure. Their innovative approach and dedication to excellence have significantly improved our operations.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, InnovateTech",
    content:
      "The solutions provided by this company have revolutionized our workflow. Their attention to detail and customer-centric approach sets them apart.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    id: 3,
    role: "Marketing Director, GrowthCo",
    name: "Alex Johnson",
    content:
      "I've been consistently impressed with their ability to deliver results. Their team's expertise and professionalism have made them an invaluable partner.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

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
    <section className="py-16 xx:px-6 ss:px-12 bg-white">
      <div className=" mx-auto">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
          variants={itemVariants}
          className="mb-12"
        >
          <Typography
            variant="h2"
            className="mb-4 ss:text-3xl xx:text-2xl text-secondary text-center"
          >
            What Our <span className="text-accent">Customers</span> Says
          </Typography>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 flex flex-col justify-between h-full"
            >
              <div>
                <FaQuoteLeft className="text-4xl text-accent mb-4" />
                <Typography className="text-secondary mb-6 text-lg italic">
                  {testimonials[currentIndex].content}
                </Typography>
                <Typography variant="h6" className="mb-1 text-accent">
                  {testimonials[currentIndex].name}
                </Typography>
                <Typography className="text-secondary">
                  {testimonials[currentIndex].role}
                </Typography>
              </div>
              <div className="flex md:justify-start justify-center space-x-4 mt-8">
                <Button
                  variant="text"
                  className="flex items-center gap-2 text-accent drop-shadow-lg hover:bg-primary duration-300"
                  onClick={prevTestimonial}
                >
                  <FaChevronLeft />
                  Previous
                </Button>
                <Button
                  variant="text"
                  className="flex items-center gap-2 text-accent drop-shadow-lg hover:bg-primary duration-300"
                  onClick={nextTestimonial}
                >
                  Next
                  <FaChevronRight />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 ml-auto">
              <div className="absolute inset-0 bg-accent rounded-full transform -skew-x-12 scale-75 origin-bottom-right"></div>
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="absolute inset-0 w-full h-full object-cover rounded-full drop-shadow-lg drop-shadow-accent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
