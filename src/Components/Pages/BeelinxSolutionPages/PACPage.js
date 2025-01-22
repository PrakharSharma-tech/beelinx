import React from "react";




import PACProductHero from "../../BeelinxSolutions/PAC/PACProductHero/PACProductHero";
import PACProductFeatures from "../../BeelinxSolutions/PAC/PACConsistentlyDeliver/PACConsistentlyDeliver";
import PACBeelinxBanner from "../../BeelinxSolutions/PAC/PACSplit-Banner1/PACSplit-Banner1";
import PACSplitBanner2 from "../../BeelinxSolutions/PAC/PACSplit-Banner2/PACSplit-banner2";
import PACSplitBanner3 from "../../BeelinxSolutions/PAC/PACSplit-Banner3/PACSplit-Banner3";
import PACAccordionSection from "../../BeelinxSolutions/PAC/PACAccordianSection/PACAccordianSection";
import PACProductClient from "../../BeelinxSolutions/PAC/PACProductClient/PACProductClient";
import PACCarouselProductSolution from "../../BeelinxSolutions/PAC/PACCarouselProduct/PACCarouselProduct";
import PACCards from "../../BeelinxSolutions/PAC/PACCards/PACCards";
import PACAccelerate from "../../BeelinxSolutions/PAC/PACAccelerate/PACAccelerate";
import PACShortenTheJourney from "../../BeelinxSolutions/PAC/PACShortenTheJourney/PACShortenTheJourney";



const PACPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
 

   <PACProductHero/>
   <PACProductFeatures/>
   <PACBeelinxBanner/>
<PACSplitBanner2/>
<PACSplitBanner3/>
<PACAccordionSection/>
<PACProductClient/>
<PACCarouselProductSolution/>
<PACCards/>
<PACAccelerate/>
<PACShortenTheJourney/>
      {/* <Footer/> */}
    </div>
  );
};

export default PACPage;