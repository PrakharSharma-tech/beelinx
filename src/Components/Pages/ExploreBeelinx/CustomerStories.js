import React from "react";
import { CustomerStoriesHero } from "../../ExploreBeelinx/Customer Stories/CustStoriesHero/CustStoriesHero";
import { CustomerStories } from "../../ExploreBeelinx/Customer Stories/CustomerStoriesSection/CSSection";



const CustomerStoriesPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <CustomerStoriesHero/>
      <CustomerStories/>
      {/* <Footer/> */}
    </div>
  );
};

export default CustomerStoriesPage;