import React from "react";
import BoundlessConfigHeroSection from "../../BoundlessConfig/Hero/BoundlessConfigHero";
import MeetThePlatform from "../../BoundlessConfig/MeetThePlatform/MeetThePatform";
import BeelinxCanSupport from "../../BoundlessConfig/BeelinxCanSupport/BeelinxCanSupport";
import BoundlessConfigClient from "../../BoundlessConfig/BoundlessConfigClients/BoundlessConfigClients";
import ScrollSectionBoundlessConfig from "../../BoundlessConfig/ScrollSection/ScrollSection";
import BoundlessConfigCarousel from "../../BoundlessConfig/BoundlessConfigCarousel/BoundlessConfigCarousel";



const BoundlessConfigPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <BoundlessConfigHeroSection/>
   <MeetThePlatform/>
   <ScrollSectionBoundlessConfig/>
   <BoundlessConfigClient/>
   <BoundlessConfigCarousel/>
   <BeelinxCanSupport/>
      {/* <Footer/> */}
    </div>
  );
};

export default BoundlessConfigPage;