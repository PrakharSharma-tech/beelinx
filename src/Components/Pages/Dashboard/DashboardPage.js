import React from "react";
import DashboardSection from "../../Dashboard/Hero/Hero";
import NextGen from "../../Dashboard/NextGen/NextGen";
import CardDashboard from "../../Dashboard/Cards/Cards";
import GetBetterResult from "../../Dashboard/GetBetterResult/GetBetterResult";
import TabSectionDashboard from "../../Dashboard/TabSection/TabSectionDashboard";
import CarouselDashboard from "../../Dashboard/CarouselDashboard/CarouselDashboard";
import ScrollSection from "../../Dashboard/ScrollSection/ScrollSection";



const DashboardPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <DashboardSection/>
   <ScrollSection/>
   <NextGen/>
   <TabSectionDashboard/>
   <CarouselDashboard/>
   <CardDashboard/>
   
   <GetBetterResult/>
   
      {/* <Footer/> */}
    </div>
  );
};

export default DashboardPage;