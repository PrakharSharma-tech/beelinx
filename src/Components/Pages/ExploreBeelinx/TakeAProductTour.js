import React from "react";

import HeroSection from "../../ExploreBeelinx/TakeAProductTour/Hero/Hero";
import IntegrationsSection from "../../ExploreBeelinx/TakeAProductTour/Clients/Clients-Tour";
import BeelinxBannerTour from "../../ExploreBeelinx/TakeAProductTour/Split-Banner1/Split-Banner1-tour";
import SplitBanner2Tour from "../../ExploreBeelinx/TakeAProductTour/Split-Banner2/Split-banner2-tour";

import CardsAndBadge from "../../ExploreBeelinx/TakeAProductTour/CardsAndBadge/CardsAndBadge";
import BottomSection from "../../ExploreBeelinx/TakeAProductTour/BottomSection/BottomSection";

import AccordionSectionTour from "../../ExploreBeelinx/TakeAProductTour/AccordianSectionTour/AccordianSectionTour";
import BeelinxBannerTour3 from "../../ExploreBeelinx/TakeAProductTour/Split-Banner3-tour/Split-Banner3v2-tour";
import SplitBanner4Tour from "../../ExploreBeelinx/TakeAProductTour/Split-Banner4/Split-banner4-tour";



const TakeAProductTour = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <HeroSection/>
   <AccordionSectionTour/>
   <IntegrationsSection/>
   <BeelinxBannerTour/>
   <SplitBanner2Tour/>
   {/* <SplitBanner3Tour/> */}
   <BeelinxBannerTour3/>
   <SplitBanner4Tour/>
   <CardsAndBadge/>
   <BottomSection/>
      {/* <Footer/> */}
    </div>
  );
};

export default TakeAProductTour;