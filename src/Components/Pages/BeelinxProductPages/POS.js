import React from "react";


import POSDashboardSection from "../../BeelinxProducts/POS/POSHero/POSHero";
import POSScrollSection from "../../BeelinxProducts/POS/POSScrollSection/POSScrollSection";
import POSNextGen from "../../BeelinxProducts/POS/POSNextGen/POSNextGen";
import POSTabSectionDashboard from "../../BeelinxProducts/POS/POSTabSection/POSTabSectionDashboard";
import POSCarouselDashboard from "../../BeelinxProducts/POS/POSCarouselDashboard/POSCarouselDashboard";
import POSCardDashboard from "../../BeelinxProducts/POS/POSCards/POSCards";
import POSGetBetterResult from "../../BeelinxProducts/POS/POSGetBetterResult/POSGetBetterResult";





const POSPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <POSDashboardSection/>
   <POSScrollSection/>
   <POSNextGen/>
   <POSTabSectionDashboard/>
   <POSCarouselDashboard/>
   <POSCardDashboard/>
   
   <POSGetBetterResult/>
   
      {/* <Footer/> */}
    </div>
  );
};

export default POSPage;