import React from "react";


import CPSProductHero from "../../BeelinxSolutions/CPS/CPSProductHero/CPSProductHero";
import CPSProductFeatures from "../../BeelinxSolutions/CPS/CPSConsistentlyDeliver/CPSConsistentlyDeliver";
import CPSBeelinxBanner from "../../BeelinxSolutions/CPS/CPSSplit-Banner1/CPSSplit-Banner1";
import CPSSplitBanner2 from "../../BeelinxSolutions/CPS/CPSSplit-Banner2/CPSSplit-banner2";
import CPSSplitBanner3 from "../../BeelinxSolutions/CPS/CPSSplit-Banner3/CPSSplit-Banner3";
import CPSAccordionSection from "../../BeelinxSolutions/CPS/CPSAccordianSection/CPSAccordianSection";
import CPSProductClient from "../../BeelinxSolutions/CPS/CPSProductClient/CPSProductClient";
import CPSCarouselProductSolution from "../../BeelinxSolutions/CPS/CPSCarouselProduct/CPSCarouselProduct";
import CPSCards from "../../BeelinxSolutions/CPS/CPSCards/CPSCards";
import CPSAccelerate from "../../BeelinxSolutions/CPS/CPSAccelerate/CPSAccelerate";
import CPSShortenTheJourney from "../../BeelinxSolutions/CPS/CPSShortenTheJourney/CPSShortenTheJourney";



const CPSPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <CPSProductHero/>
   <CPSProductFeatures/>
   <CPSBeelinxBanner/>
   <CPSSplitBanner2/>
   <CPSSplitBanner3/>
   <CPSAccordionSection/>
   <CPSProductClient/>
   <CPSCarouselProductSolution/>
   <CPSCards/>
   
   <CPSAccelerate/>
   
   <CPSShortenTheJourney/>
      {/* <Footer/> */}
    </div>
  );
};

export default CPSPage;