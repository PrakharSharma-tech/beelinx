import React from "react";

import CRMDashboardSection from "../../BeelinxProducts/CRM/CRMHero/CRMHero";
import CRMScrollSection from "../../BeelinxProducts/CRM/CRMScrollSection/CRMScrollSection";
import CRMNextGen from "../../BeelinxProducts/CRM/CRMNextGen/CRMNextGen";
import CRMTabSectionDashboard from "../../BeelinxProducts/CRM/CRMTabSection/CRMTabSectionDashboard";
import CRMCarouselDashboard from "../../BeelinxProducts/CRM/CRMCarouselDashboard/CRMCarouselDashboard";
import CRMCardDashboard from "../../BeelinxProducts/CRM/CRMCards/CRMCards";
import CRMGetBetterResult from "../../BeelinxProducts/CRM/CRMGetBetterResult/CRMGetBetterResult";





const CRMPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <CRMDashboardSection/>
   <CRMScrollSection/>
   <CRMNextGen/>
   <CRMTabSectionDashboard/>
   <CRMCarouselDashboard/>
   <CRMCardDashboard/>
   
   <CRMGetBetterResult/>
   
      {/* <Footer/> */}
    </div>
  );
};

export default CRMPage;