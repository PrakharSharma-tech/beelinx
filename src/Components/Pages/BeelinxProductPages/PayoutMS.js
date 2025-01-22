import React from "react";


import PayoutMSDashboardSection from "../../BeelinxProducts/PayoutMS/PayoutMSHero/PayoutMSHero";
import PayoutMSScrollSection from "../../BeelinxProducts/PayoutMS/PayoutMSScrollSection/PayoutMSScrollSection";
import PayoutMSNextGen from "../../BeelinxProducts/PayoutMS/PayoutMSNextGen/PayoutMSNextGen";
import PayoutMSTabSectionDashboard from "../../BeelinxProducts/PayoutMS/PayoutMSTabSection/PayoutMSTabSectionDashboard";
import PayoutMSCarouselDashboard from "../../BeelinxProducts/PayoutMS/PayoutMSCarouselDashboard/PayoutMSCarouselDashboard";
import PayoutMSCardDashboard from "../../BeelinxProducts/PayoutMS/PayoutMSCards/PayoutMSCards";
import PayoutMSGetBetterResult from "../../BeelinxProducts/PayoutMS/PayoutMSGetBetterResult/PayoutMSGetBetterResult";





const PayoutMSPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <PayoutMSDashboardSection/>
   <PayoutMSScrollSection/>
   <PayoutMSNextGen/>
   <PayoutMSTabSectionDashboard/>
   <PayoutMSCarouselDashboard/>
   <PayoutMSCardDashboard/>
   
   <PayoutMSGetBetterResult/>
   
      {/* <Footer/> */}
    </div>
  );
};

export default PayoutMSPage;