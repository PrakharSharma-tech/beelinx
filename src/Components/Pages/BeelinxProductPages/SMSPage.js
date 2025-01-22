import React from "react";

import SMSDashboardSection from "../../BeelinxProducts/SMS/SMSHero/SMSHero";
import SMSScrollSection from "../../BeelinxProducts/SMS/SMSScrollSection/SMSScrollSection";
import SMSNextGen from "../../BeelinxProducts/SMS/SMSNextGen/SMSNextGen";
import SMSTabSectionDashboard from "../../BeelinxProducts/SMS/SMSTabSection/SMSTabSectionDashboard";
import SMSCarouselDashboard from "../../BeelinxProducts/SMS/SMSCarouselDashboard/SMSCarouselDashboard";
import SMSCardDashboard from "../../BeelinxProducts/SMS/SMSCards/SMSCards";
import SMSGetBetterResult from "../../BeelinxProducts/SMS/SMSGetBetterResult/SMSGetBetterResult";





const SMSPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <SMSDashboardSection/>
   <SMSScrollSection/>
   <SMSNextGen/>
   <SMSTabSectionDashboard/>
   <SMSCarouselDashboard/>
   <SMSCardDashboard/>
   
   <SMSGetBetterResult/>
   
      {/* <Footer/> */}
    </div>
  );
};

export default SMSPage;