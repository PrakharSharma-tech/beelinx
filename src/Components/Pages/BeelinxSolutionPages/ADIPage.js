import React from "react";


import ADIProductHero from "../../BeelinxSolutions/ADI/ADIProductHero/ADIProductHero";
import ADIProductFeatures from "../../BeelinxSolutions/ADI/ADIConsistentlyDeliver/ADIConsistentlyDeliver";
import ADIBeelinxBanner from "../../BeelinxSolutions/ADI/ADISplit-Banner1/ADISplit-Banner1";
import ADISplitBanner2 from "../../BeelinxSolutions/ADI/ADISplit-Banner2/ADISplit-banner2";
import ADISplitBanner3 from "../../BeelinxSolutions/ADI/ADISplit-Banner3/ADISplit-Banner3";
import ADIAccordionSection from "../../BeelinxSolutions/ADI/ADIAccordianSection/ADIAccordianSection";
import ADIProductClient from "../../BeelinxSolutions/ADI/ADIProductClient/ADIProductClient";
import ADICarouselProductSolution from "../../BeelinxSolutions/ADI/ADICarouselProduct/ADICarouselProduct";
import ADICards from "../../BeelinxSolutions/ADI/ADICards/ADICards";
import ADIAccelerate from "../../BeelinxSolutions/ADI/ADIAccelerate/ADIAccelerate";
import ADIShortenTheJourney from "../../BeelinxSolutions/ADI/ADIShortenTheJourney/ADIShortenTheJourney";



const ADIPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <ADIProductHero/>
   <ADIProductFeatures/>
   <ADIBeelinxBanner/>
   <ADISplitBanner2/>
   <ADISplitBanner3/>
   <ADIAccordionSection/>
   <ADIProductClient/>
   <ADICarouselProductSolution/>
   <ADICards/>
   
   <ADIAccelerate/>
   
   <ADIShortenTheJourney/>

   
      {/* <Footer/> */}
    </div>
  );
};

export default ADIPage;