import React from "react";



import ADMProductHero from "../../BeelinxSolutions/ADM/ADMProductHero/ADMProductHero";
import ADMBeelinxBanner from "../../BeelinxSolutions/ADM/ADMSplit-Banner1/ADMSplit-Banner1";
import ADMSplitBanner2 from "../../BeelinxSolutions/ADM/ADMSplit-Banner2/ADMSplit-banner2";
import ADMSplitBanner3 from "../../BeelinxSolutions/ADM/ADMSplit-Banner3/PACSplit-Banner3";
import ADMAccordionSection from "../../BeelinxSolutions/ADM/ADMAccordianSection/ADMAccordianSection";
import ADMCarouselProductSolution from "../../BeelinxSolutions/ADM/ADMCarouselProduct/ADMCarouselProduct";
import ADMCards from "../../BeelinxSolutions/ADM/ADMCards/ADMCards";
import ADMAccelerate from "../../BeelinxSolutions/ADM/ADMAccelerate/ADMAccelerate";
import ADMShortenTheJourney from "../../BeelinxSolutions/ADM/ADMShortenTheJourney/ADMShortenTheJourney";
import ADMProductFeatures from "../../BeelinxSolutions/ADM/ADMConsistentlyDeliver/ADMConsistentlyDeliver";
import ADMProductClient from "../../BeelinxSolutions/ADM/ADMProductClient/ADMProductClient";



const ADMPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <ADMProductHero/>
   <ADMProductFeatures/>
   <ADMBeelinxBanner/>
   <ADMSplitBanner2/>
   <ADMSplitBanner3/>
   <ADMAccordionSection/>
   <ADMProductClient/>
   <ADMCarouselProductSolution/>
   <ADMCards/>
   
   <ADMAccelerate/>
   
   <ADMShortenTheJourney/>

   
      {/* <Footer/> */}
    </div>
  );
};

export default ADMPage;