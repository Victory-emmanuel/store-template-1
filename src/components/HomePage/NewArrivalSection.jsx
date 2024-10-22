import Slider from "react-slick";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { NewProductData } from "../../database/NewProductData";
import NewArrivalProductCard from "../Universal/NewArrivalProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewArrivalSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust for how many cards to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1700, // Adjust for medium screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // Adjust for medium screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800, // Adjust for small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Adjust for small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <motion.section
      variants={containerVariants}
      className="py-16 px-4 bg-primary"
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
          className="mb-4 ss:text-3xl xx:text-2xl text-secondary text-center"
        >
          Our <span className="text-accent">Best Sellers</span>
        </Typography>
      </motion.div>

      <Slider {...settings} className="py-16 mx-4">
        {NewProductData.map((product) => (
          <NewArrivalProductCard key={product.id} {...product} />
        ))}
      </Slider>
    </motion.section>
  );
};

export default NewArrivalSection;
