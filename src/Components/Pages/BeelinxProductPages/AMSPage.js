import React from "react";

import AMSDashboardSection from "../../BeelinxProducts/API Management Software/AMSHero/AMSHero";
import AMSScrollSection from "../../BeelinxProducts/API Management Software/AMSScrollSection/AMSScrollSection";
import AMSNextGen from "../../BeelinxProducts/API Management Software/AMSNextGen/AMSNextGen";
import AMSTabSectionDashboard from "../../BeelinxProducts/API Management Software/AMSTabSection/AMSTabSectionDashboard";
import AMSCarouselDashboard from "../../BeelinxProducts/API Management Software/AMSCarouselDashboard/AMSCarouselDashboard";
import AMSCardDashboard from "../../BeelinxProducts/API Management Software/AMSCards/AMSCards";
import AMSGetBetterResult from "../../BeelinxProducts/API Management Software/AMSGetBetterResult/AMSGetBetterResult";



const AMSPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <AMSDashboardSection/>
   <AMSScrollSection/>
   <AMSNextGen/>
   <AMSTabSectionDashboard/>
   <AMSCarouselDashboard/>
   <AMSCardDashboard/>
   
   <AMSGetBetterResult/>
   
      {/* <Footer/> */}
    </div>
  );
};

export default AMSPage;