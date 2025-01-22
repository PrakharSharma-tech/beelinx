import React from "react";


import CSMSDashboardSection from "../../BeelinxProducts/CSMS/CSMSHero/CSMSHero";
import CSMSScrollSection from "../../BeelinxProducts/CSMS/CSMSScrollSection/CSMSScrollSection";
import CSMSNextGen from "../../BeelinxProducts/CSMS/CSMSNextGen/CSMSNextGen";
import CSMSTabSectionDashboard from "../../BeelinxProducts/CSMS/CSMSTabSection/CSMSTabSectionDashboard";
import CSMSCarouselDashboard from "../../BeelinxProducts/CSMS/CSMSCarouselDashboard/CSMSCarouselDashboard";
import CSMSCardDashboard from "../../BeelinxProducts/CSMS/CSMSCards/CSMSCards";
import CSMSGetBetterResult from "../../BeelinxProducts/CSMS/CSMSGetBetterResult/CSMSGetBetterResult";





const CSMSPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <CSMSDashboardSection/>
   <CSMSScrollSection/>
   <CSMSNextGen/>
   <CSMSTabSectionDashboard/>
   <CSMSCarouselDashboard/>
   <CSMSCardDashboard/>
   
   <CSMSGetBetterResult/>
   
      {/* <Footer/> */}
    </div>
  );
};

export default CSMSPage;