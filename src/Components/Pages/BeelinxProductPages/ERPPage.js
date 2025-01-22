import React from "react";


import ERPDashboardSection from "../../BeelinxProducts/ERP/ERPHero/ERPHero";
import ERPScrollSection from "../../BeelinxProducts/ERP/ERPScrollSection/ERPScrollSection";
import ERPNextGen from "../../BeelinxProducts/ERP/ERPNextGen/ERPNextGen";
import ERPTabSectionDashboard from "../../BeelinxProducts/ERP/ERPTabSection/ERPTabSectionDashboard";
import ERPCarouselDashboard from "../../BeelinxProducts/ERP/ERPCarouselDashboard/ERPCarouselDashboard";
import ERPCardDashboard from "../../BeelinxProducts/ERP/ERPCards/ERPCards";
import ERPGetBetterResult from "../../BeelinxProducts/ERP/ERPGetBetterResult/ERPGetBetterResult";





const ERPPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <ERPDashboardSection/>
   <ERPScrollSection/>
   <ERPNextGen/>
   <ERPTabSectionDashboard/>
   <ERPCarouselDashboard/>
   <ERPCardDashboard/>
   
   <ERPGetBetterResult/>
   
      {/* <Footer/> */}
    </div>
  );
};

export default ERPPage;