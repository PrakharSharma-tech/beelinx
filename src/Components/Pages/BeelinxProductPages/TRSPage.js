import React from "react";


import TRSDashboardSection from "../../BeelinxProducts/TRS/TRSHero/TRSHero";
import TRSScrollSection from "../../BeelinxProducts/TRS/TRSScrollSection/TRSScrollSection";
import TRSNextGen from "../../BeelinxProducts/TRS/TRSNextGen/TRSNextGen";
import TRSTabSectionDashboard from "../../BeelinxProducts/TRS/TRSTabSection/TRSTabSectionDashboard";
import TRSCarouselDashboard from "../../BeelinxProducts/TRS/TRSCarouselDashboard/TRSCarouselDashboard";
import TRSCardDashboard from "../../BeelinxProducts/TRS/TRSCards/TRSCards";
import TRSGetBetterResult from "../../BeelinxProducts/TRS/TRSGetBetterResult/TRSGetBetterResult";



const TRSPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <TRSDashboardSection/>
   <TRSScrollSection/>
   <TRSNextGen/>
   <TRSTabSectionDashboard/>
   <TRSCarouselDashboard/>
   <TRSCardDashboard/>
   
   <TRSGetBetterResult/>
   
      {/* <Footer/> */}
    </div>
  );
};

export default TRSPage;