import React from "react";
import PricingSection from "../Pricing/pricing";
import ConfidenceSection from "../ConfidenceSection/ConfidenceSection";
import BeelinxAIComponent from "../Discover/Discover";
import AddOnFeatures from "../AddOnFeatures/AddOnFeatures";
import TryBeelinxSection from "../TryOur/TryOur";
import FAQSection from "../FAQ/FAQ";
import Carousel from "../Carousel/Carousel";


const PricingPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
    <PricingSection/>
    <ConfidenceSection/>
    <BeelinxAIComponent/>
    <AddOnFeatures/>
    <Carousel/>
    <TryBeelinxSection/>
    <FAQSection/>
      {/* <Footer/> */}
    </div>
  );
};

export default PricingPage;