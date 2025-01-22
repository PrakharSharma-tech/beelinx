import React from "react";


import STEProductHero from "../../BeelinxSolutions/STE/STEProductHero/STEProductHero";
import STEProductFeatures from "../../BeelinxSolutions/STE/STEConsistentlyDeliver/STEConsistentlyDeliver";
import STEBeelinxBanner from "../../BeelinxSolutions/STE/STESplit-Banner1/STESplit-Banner1";
import STESplitBanner2 from "../../BeelinxSolutions/STE/STESplit-Banner2/STESplit-banner2";
import STESplitBanner3 from "../../BeelinxSolutions/STE/STESplit-Banner3/SDSSplit-Banner3";
import STEAccordionSection from "../../BeelinxSolutions/STE/STEAccordianSection/STEAccordianSection";
import STEProductClient from "../../BeelinxSolutions/STE/STEProductClient/STEProductClient";
import STECarouselProductSolution from "../../BeelinxSolutions/STE/STECarouselProduct/STECarouselProduct";
import STECards from "../../BeelinxSolutions/STE/STECards/STECards";
import STEAccelerate from "../../BeelinxSolutions/STE/STEAccelerate/STEAccelerate";
import STEShortenTheJourney from "../../BeelinxSolutions/STE/STEShortenTheJourney/STEShortenTheJourney";



const STEPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <STEProductHero/>
   <STEProductFeatures/>
   <STEBeelinxBanner/>
   <STESplitBanner2/>
   <STESplitBanner3/>
   <STEAccordionSection/>
   <STEProductClient/>
   <STECarouselProductSolution/>
   <STECards/>
   
   <STEAccelerate/>
   
   <STEShortenTheJourney/>
      {/* <Footer/> */}
    </div>
  );
};

export default STEPage;