import React from "react";



import ATIProductHero from "../../BeelinxSolutions/ATI/ATIProductHero/ATIProductHero";
import ATIProductFeatures from "../../BeelinxSolutions/ATI/ATIConsistentlyDeliver/ATIConsistentlyDeliver";
import ATIBeelinxBanner from "../../BeelinxSolutions/ATI/ATISplit-Banner1/ATISplit-Banner1";
import ATISplitBanner2 from "../../BeelinxSolutions/ATI/ATISplit-Banner2/ATISplit-banner2";
import ATISplitBanner3 from "../../BeelinxSolutions/ATI/ATISplit-Banner3/ADISplit-Banner3";
import ATIAccordionSection from "../../BeelinxSolutions/ATI/ATIAccordianSection/ATIAccordianSection";
import ATIProductClient from "../../BeelinxSolutions/ATI/ATIProductClient/ATIProductClient";
import ATICarouselProductSolution from "../../BeelinxSolutions/ATI/ATICarouselProduct/ATICarouselProduct";
import ATICards from "../../BeelinxSolutions/ATI/ATICards/ATICards";
import ATIAccelerate from "../../BeelinxSolutions/ATI/ATIAccelerate/ATIAccelerate";
import ATIShortenTheJourney from "../../BeelinxSolutions/ATI/ATIShortenTheJourney/ATIShortenTheJourney";



const ATIPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <ATIProductHero/>
   <ATIProductFeatures/>
   <ATIBeelinxBanner/>
   <ATISplitBanner2/>
   <ATISplitBanner3/>
   <ATIAccordionSection/>
   <ATIProductClient/>
   <ATICarouselProductSolution/>
   <ATICards/>
   
   <ATIAccelerate/>
   
   <ATIShortenTheJourney/>

   
      {/* <Footer/> */}
    </div>
  );
};

export default ATIPage;