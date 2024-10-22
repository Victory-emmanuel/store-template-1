/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Typography, Button, Carousel } from "@material-tailwind/react";

const collections = [
  {
    id: 1,
    title: "Summer Collection",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "Winter Essentials",
    image: "https://i.postimg.cc/V6MLZJwx/1000-x-1500.png",
  },
  {
    id: 3,
    title: "Autumn Styles",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "Spring Favorites",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

const CollectionCard = ({ title, image }) => {
  return (
    <motion.div className="relative w-full h-screen overflow-hidden group cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:blur-sm"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-8">
        <Typography variant="h1" color="white" className="mb-4 text-center">
          {title}
        </Typography>
        <Button color="white" size="lg" ripple={true} className="text-black">
          Shop Now
        </Button>
      </div>
    </motion.div>
  );
};

const CollectionsSection = () => {
  return (
    <section className="w-full h-auto">
      {/* Grid for large screens */}
      <div className="hidden lg:grid grid-cols-2 h-full">
        {collections.slice(0, 4).map((collection) => (
          <CollectionCard key={collection.id} {...collection} />
        ))}
      </div>

      {/* Carousel for smaller screens */}
      <Carousel
        className="lg:hidden h-full"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {collections.map((collection) => (
          <CollectionCard key={collection.id} {...collection} />
        ))}
      </Carousel>
    </section>
  );
};

export default CollectionsSection;
