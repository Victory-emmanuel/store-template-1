import BestSellerSection from "../components/HomePage/BestSellerSection";
import CollectionsSection from "../components/HomePage/CollectionsSection";
import HeroSection from "../components/HomePage/HeroSection";
import NewArrivalSection from "../components/HomePage/NewArrivalSection";
import OurProductSection from "../components/HomePage/OurProductSection";
import ServiceSection from "../components/HomePage/ServiceSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <OurProductSection />
      <CollectionsSection />
      <NewArrivalSection />
      <BestSellerSection />
      <ServiceSection />
    </div>
  );
};

export default HomePage;
