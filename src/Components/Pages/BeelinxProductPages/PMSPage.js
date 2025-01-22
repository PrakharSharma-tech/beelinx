import React from "react";



import PMSDashboardSection from "../../BeelinxProducts/PMS/PMSHero/PMSHero";
import PMSScrollSection from "../../BeelinxProducts/PMS/PMSScrollSection/PMSScrollSection";
import PMSNextGen from "../../BeelinxProducts/PMS/PMSNextGen/PMSNextGen";
import PMSTabSectionDashboard from "../../BeelinxProducts/PMS/PMSTabSection/CMSTabSectionDashboard";
import PMSCarouselDashboard from "../../BeelinxProducts/PMS/PMSCarouselDashboard/PMSCarouselDashboard";
import PMSCardDashboard from "../../BeelinxProducts/PMS/PMSCards/PMSCards";
import PMSGetBetterResult from "../../BeelinxProducts/PMS/PMSGetBetterResult/PMSGetBetterResult";





const PMSPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <PMSDashboardSection/>
   <PMSScrollSection/>
   <PMSNextGen/>
   <PMSTabSectionDashboard/>
   <PMSCarouselDashboard/>
   <PMSCardDashboard/>
   
   <PMSGetBetterResult/>
   
      {/* <Footer/> */}
    </div>
  );
};

export default PMSPage;