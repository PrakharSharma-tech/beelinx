import React from "react";

import SCIProductHero from "../../BeelinxSolutions/SCI/SCIProductHero/SCIProductHero";
import SCIProductFeatures from "../../BeelinxSolutions/SCI/SCIConsistentlyDeliver/SCIConsistentlyDeliver";
import SCIBeelinxBanner from "../../BeelinxSolutions/SCI/SCISplit-Banner1/SCISplit-Banner1";
import SCISplitBanner2 from "../../BeelinxSolutions/SCI/SCISplit-Banner2/SCISplit-banner2";
import SCISplitBanner3 from "../../BeelinxSolutions/SCI/SCISplit-Banner3/SDSSplit-Banner3";
import SCIAccordionSection from "../../BeelinxSolutions/SCI/SCIAccordianSection/SCIAccordianSection";
import SCIProductClient from "../../BeelinxSolutions/SCI/SCIProductClient/SCIProductClient";
import SCICarouselProductSolution from "../../BeelinxSolutions/SCI/SCICarouselProduct/SCICarouselProduct";
import SCICards from "../../BeelinxSolutions/SCI/SCICards/SCICards";
import SCIAccelerate from "../../BeelinxSolutions/SCI/SCIAccelerate/SCIAccelerate";
import SCIShortenTheJourney from "../../BeelinxSolutions/SCI/SCIShortenTheJourney/SCIShortenTheJourney";



const SCIPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <SCIProductHero/>
   <SCIProductFeatures/>
   <SCIBeelinxBanner/>
   <SCISplitBanner2/>
   <SCISplitBanner3/>
   <SCIAccordionSection/>
   <SCIProductClient/>
   <SCICarouselProductSolution/>
   <SCICards/>
   
   <SCIAccelerate/>
   
   <SCIShortenTheJourney/>
      {/* <Footer/> */}
    </div>
  );
};

export default SCIPage;