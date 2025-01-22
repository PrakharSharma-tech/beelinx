import React from "react";



import CASProductHero from "../../BeelinxSolutions/CAS/CASProductHero/CASProductHero";
import CASProductFeatures from "../../BeelinxSolutions/CAS/CASConsistentlyDeliver/CASConsistentlyDeliver";
import CASBeelinxBanner from "../../BeelinxSolutions/CAS/CASSplit-Banner1/CASSplit-Banner1";
import CASSplitBanner2 from "../../BeelinxSolutions/CAS/CASSplit-Banner2/CASSplit-banner2";
import CASSplitBanner3 from "../../BeelinxSolutions/CAS/CASSplit-Banner3/CASSplit-Banner3";
import CASAccordionSection from "../../BeelinxSolutions/CAS/CASAccordianSection/CASAccordianSection";
import CASProductClient from "../../BeelinxSolutions/CAS/CASProductClient/CASProductClient";
import CASCarouselProductSolution from "../../BeelinxSolutions/CAS/CASCarouselProduct/CASCarouselProduct";
import CASCards from "../../BeelinxSolutions/CAS/CASCards/CASCards";
import CASAccelerate from "../../BeelinxSolutions/CAS/CASAccelerate/CASAccelerate";
import CASShortenTheJourney from "../../BeelinxSolutions/CAS/CASShortenTheJourney/CASShortenTheJourney";



const CASPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <CASProductHero/>
   <CASProductFeatures/>
   <CASBeelinxBanner/>
   <CASSplitBanner2/>
   <CASSplitBanner3/>
   <CASAccordionSection/>
   <CASProductClient/>
   <CASCarouselProductSolution/>
   <CASCards/>
   
   <CASAccelerate/>
   
   <CASShortenTheJourney/>
      {/* <Footer/> */}
    </div>
  );
};

export default CASPage;