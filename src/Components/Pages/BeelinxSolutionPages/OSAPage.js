import React from "react";



import OSAProductHero from "../../BeelinxSolutions/OSA/OSAProductHero/OSAProductHero";
import OSAProductFeatures from "../../BeelinxSolutions/OSA/OSAConsistentlyDeliver/OSAConsistentlyDeliver";
import OSABeelinxBanner from "../../BeelinxSolutions/OSA/OSASplit-Banner1/OSASplit-Banner1";
import OSASplitBanner2 from "../../BeelinxSolutions/OSA/OSASplit-Banner2/OSASplit-banner2";
import OSASplitBanner3 from "../../BeelinxSolutions/OSA/OSASplit-Banner3/OSASplit-Banner3";
import OSAAccordionSection from "../../BeelinxSolutions/OSA/OSAAccordianSection/OSAAccordianSection";
import OSAProductClient from "../../BeelinxSolutions/OSA/OSAProductClient/OSAProductClient";
import OSACarouselProductSolution from "../../BeelinxSolutions/OSA/OSACarouselProduct/OSACarouselProduct";
import OSACards from "../../BeelinxSolutions/OSA/OSACards/OSACards";
import OSAAccelerate from "../../BeelinxSolutions/OSA/OSAAccelerate/OSAAccelerate";
import OSAShortenTheJourney from "../../BeelinxSolutions/OSA/OSAShortenTheJourney/OSAShortenTheJourney";



const OSAPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <OSAProductHero/>
   <OSAProductFeatures/>
   <OSABeelinxBanner/>
   <OSASplitBanner2/>
   <OSASplitBanner3/>
   <OSAAccordionSection/>
   <OSAProductClient/>
   <OSACarouselProductSolution/>
   <OSACards/>
   
   <OSAAccelerate/>
   
   <OSAShortenTheJourney/>
      {/* <Footer/> */}
    </div>
  );
};

export default OSAPage;