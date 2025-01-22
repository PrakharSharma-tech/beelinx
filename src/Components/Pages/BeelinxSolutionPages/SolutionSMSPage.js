import React from "react";


import SolutionSMSProductHero from "../../BeelinxSolutions/SolutionSMS/SolutionSMSHero/SolutionSMSProductHero";
import SolutionSMSProductFeatures from "../../BeelinxSolutions/SolutionSMS/SolutionSMSConsistentlyDeliver/SolutionSMSConsistentlyDeliver";
import SolutionSMSBeelinxBanner from "../../BeelinxSolutions/SolutionSMS/SolutionSMSSplit-Banner1/SolutionSMSSplit-Banner1";
import SolutionSMSSplitBanner2 from "../../BeelinxSolutions/SolutionSMS/SolutionSMSSplit-Banner2/SolutionSMSSplit-banner2";
import SolutionSMSSplitBanner3 from "../../BeelinxSolutions/SolutionSMS/SolutionSMSSplit-Banner3/SolutionSMSSplit-Banner3";
import SolutionSMSAccordionSection from "../../BeelinxSolutions/SolutionSMS/SolutionSMSAccordianSection/SolutionSMSAccordianSection";
import SolutionSMSProductClient from "../../BeelinxSolutions/SolutionSMS/SolutionSMSProductClient/SolutionSMSProductClient";
import SolutionSMSCarouselProductSolution from "../../BeelinxSolutions/SolutionSMS/SolutionSMSCarouselProduct/SolutionSMSCarouselProduct";
import SolutionSMSCards from "../../BeelinxSolutions/SolutionSMS/SolutionSMSCards/SolutionSMSCards";
import SolutionSMSAccelerate from "../../BeelinxSolutions/SolutionSMS/SolutionSMSAccelerate/SolutionSMSAccelerate";
import SolutionSMSShortenTheJourney from "../../BeelinxSolutions/SolutionSMS/SolutionSMSShortenTheJourney/SolutionSMSShortenTheJourney";



const SolutionSMSPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <SolutionSMSProductHero/>
   <SolutionSMSProductFeatures/>
   <SolutionSMSBeelinxBanner/>
   <SolutionSMSSplitBanner2/>
   <SolutionSMSSplitBanner3/>
   <SolutionSMSAccordionSection/>
   <SolutionSMSProductClient/>
   <SolutionSMSCarouselProductSolution/>
   <SolutionSMSCards/>
   
   <SolutionSMSAccelerate/>
   
   <SolutionSMSShortenTheJourney/>
      {/* <Footer/> */}
    </div>
  );
};

export default SolutionSMSPage;