import React from "react";



import CMSScrollSection from "../../BeelinxProducts/CMS/CMSScrollSection/CMSScrollSection";
import CMSNextGen from "../../BeelinxProducts/CMS/CMSNextGen/CMSNextGen";
import CMSTabSectionDashboard from "../../BeelinxProducts/CMS/CMSTabSection/CMSTabSectionDashboard";
import CMSCarouselDashboard from "../../BeelinxProducts/CMS/CMSCarouselDashboard/CMSCarouselDashboard";
import CMSCardDashboard from "../../BeelinxProducts/CMS/CMSCards/CMSCards";
import CMSGetBetterResult from "../../BeelinxProducts/CMS/CMSGetBetterResult/CMSGetBetterResult";
import CMSDashboardSection from "../../BeelinxProducts/CMS/CMSHero/CMSHero";





const CMSPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <CMSDashboardSection/>
   <CMSScrollSection/>
   <CMSNextGen/>

   <CMSTabSectionDashboard/>
   <CMSCarouselDashboard/>
  <CMSCardDashboard/>
   
   <CMSGetBetterResult/>
   
      {/* <Footer/> */}
    </div>
  );
};

export default CMSPage;