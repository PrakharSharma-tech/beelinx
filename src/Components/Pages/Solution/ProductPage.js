import React from "react";
import ProductHero from "../../Product/ProductHero/ProductHero";
import ConsistentlyDeliver from "../../Product/ConsistentlyDeliver/ConsistentlyDeliver";
import SplitBanner1 from "../../Product/Split-Banner1/Split-Banner1";
import SplitBanner2 from "../../Product/Split-Banner2/Split-banner2";
import SplitBanner3 from "../../Product/Split-Banner3/Split-Banner3";
import Accelerate from "../../Product/Accelerate/Accelerate";
import Cards from "../../Product/Cards/Cards";
import ShortenTheJourney from "../../Product/ShortenTheJourney/ShortenTheJourney";
import CarouselProductSolution from "../../Product/CarouselProduct/CarouselProduct";
import ProductClient from "../../Product/ProductClient/ProductClient";
import AccordionSection from "../../Product/AccordianSection/AccordianSection";



const ProductPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
   <ProductHero/>
   <ConsistentlyDeliver/>
   <SplitBanner1/>
   <SplitBanner2/>
   <SplitBanner3/>
   <AccordionSection/>
   <ProductClient/>
   <CarouselProductSolution/>
   <Cards/>
   
   <Accelerate/>
   
   <ShortenTheJourney/>
      {/* <Footer/> */}
    </div>
  );
};

export default ProductPage;