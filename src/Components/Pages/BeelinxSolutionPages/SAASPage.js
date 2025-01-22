import React from "react";


import SAASProductHero from "../../BeelinxSolutions/SAAS/SAASProductHero/SAASProductHero";
import SAASProductFeatures from "../../BeelinxSolutions/SAAS/SAASConsistentlyDeliver/SAASConsistentlyDeliver";
import SAASBeelinxBanner from "../../BeelinxSolutions/SAAS/SAASSplit-Banner1/SAASSplit-Banner1";
import SAASSplitBanner2 from "../../BeelinxSolutions/SAAS/SAASSplit-Banner2/SAASSplit-banner2";
import SAASSplitBanner3 from "../../BeelinxSolutions/SAAS/SAASSplit-Banner3/SDSSplit-Banner3";
import SAASAccordionSection from "../../BeelinxSolutions/SAAS/SAASAccordianSection/SAASAccordianSection";
import SAASProductClient from "../../BeelinxSolutions/SAAS/SAASProductClient/SAASProductClient";
import SAASCarouselProductSolution from "../../BeelinxSolutions/SAAS/SAASCarouselProduct/SAASCarouselProduct";
import SAASCards from "../../BeelinxSolutions/SAAS/SAASCards/SAASCards";
import SAASAccelerate from "../../BeelinxSolutions/SAAS/SAASAccelerate/SAASAccelerate";
import SAASShortenTheJourney from "../../BeelinxSolutions/SAAS/SAASShortenTheJourney/SAASShortenTheJourney";



const SAASPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <SAASProductHero/>
   <SAASProductFeatures/>
   <SAASBeelinxBanner/>
   <SAASSplitBanner2/>
   <SAASSplitBanner3/>
   <SAASAccordionSection/>
   <SAASProductClient/>
   <SAASCarouselProductSolution/>
   <SAASCards/>
   
   <SAASAccelerate/>
   
   <SAASShortenTheJourney/>
      {/* <Footer/> */}
    </div>
  );
};

export default SAASPage;