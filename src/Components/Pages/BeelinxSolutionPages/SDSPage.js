import React from "react";

import SDSProductHero from "../../BeelinxSolutions/SDS/SDSProductHero/SDSProductHero";
import SDSProductFeatures from "../../BeelinxSolutions/SDS/SDSConsistentlyDeliver/SDSConsistentlyDeliver";
import SDSBeelinxBanner from "../../BeelinxSolutions/SDS/SDSSplit-Banner1/SDSSplit-Banner1";
import SDSSplitBanner2 from "../../BeelinxSolutions/SDS/SDSSplit-Banner2/SDSSplit-banner2";
import SDSSplitBanner3 from "../../BeelinxSolutions/SDS/SDSSplit-Banner3/SDSSplit-Banner3";
import SDSAccordionSection from "../../BeelinxSolutions/SDS/SDSAccordianSection/SDSAccordianSection";
import SDSProductClient from "../../BeelinxSolutions/SDS/SDSProductClient/SDSProductClient";
import SDSCarouselProductSolution from "../../BeelinxSolutions/SDS/SDSCarouselProduct/SDSCarouselProduct";
import SDSCards from "../../BeelinxSolutions/SDS/SDSCards/SDSCards";
import SDSAccelerate from "../../BeelinxSolutions/SDS/SDSAccelerate/SDSAccelerate";
import SDSShortenTheJourney from "../../BeelinxSolutions/SDS/SDSShortenTheJourney/SDSShortenTheJourney";



const SDSPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <SDSProductHero/>
   <SDSProductFeatures/>
   <SDSBeelinxBanner/>
   <SDSSplitBanner2/>
   <SDSSplitBanner3/>
   <SDSAccordionSection/>
   <SDSProductClient/>
   <SDSCarouselProductSolution/>
   <SDSCards/>
   
   <SDSAccelerate/>
   
   <SDSShortenTheJourney/>
      {/* <Footer/> */}
    </div>
  );
};

export default SDSPage;