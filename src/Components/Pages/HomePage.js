import React from "react";
import Hero from "../Hero/Hero"; // Import Hero component
import EnterpriseSolutions from "../PERS_Cards/pers";
import Collaborate2024 from "../Collaborate/collaborate";
import DriveEfficiency from "../DriveEfficiency/DriveEfficiency";
import TemplatesSection from "../TemplatesSection/TemplatesSection";
import AISection from "../AISection/AISection";
import IntegrationsSection from "../Clients/Clients";
import Carousel from "../Carousel/Carousel";
import TabSection from "../TabsSection1/TabSection1";


const homepage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      <DriveEfficiency/>
      <TabSection/>
      <EnterpriseSolutions/>
      <Collaborate2024/>
      <TemplatesSection/>
      <AISection/>
      <IntegrationsSection/>
      <Carousel/>
      {/* <Footer/> */}
    </div>
  );
};

export default homepage;