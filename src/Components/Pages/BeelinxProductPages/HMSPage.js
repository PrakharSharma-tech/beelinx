import React from "react";



import HMSDashboardSection from "../../BeelinxProducts/HMS/HMSHero/HMSHero";
import HMSScrollSection from "../../BeelinxProducts/HMS/HMSScrollSection/HMSScrollSection";
import HMSNextGen from "../../BeelinxProducts/HMS/HMSNextGen/HMSNextGen";
import HMSTabSectionDashboard from "../../BeelinxProducts/HMS/HMSTabSection/HMSTabSectionDashboard";
import HMSCarouselDashboard from "../../BeelinxProducts/HMS/HMSCarouselDashboard/HMSCarouselDashboard";
import HMSCardDashboard from "../../BeelinxProducts/HMS/HMSCards/HMSCards";
import HMSGetBetterResult from "../../BeelinxProducts/HMS/HMSGetBetterResult/HMSGetBetterResult";





const HMSPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <HMSDashboardSection/>
   <HMSScrollSection/>
   <HMSNextGen/>
   <HMSTabSectionDashboard/>
   <HMSCarouselDashboard/>
   <HMSCardDashboard/>
   
   <HMSGetBetterResult/>
   
      {/* <Footer/> */}
    </div>
  );
};

export default HMSPage;