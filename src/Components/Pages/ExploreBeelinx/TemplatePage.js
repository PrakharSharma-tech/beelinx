import React from "react";
import { TemplateHero } from "../../StartWithTemplate/TemplateHero/TemplateHero";
import { TemplatePageSection } from "../../StartWithTemplate/TemplateSection/TemplatePageSection";



const TemplatePage = () => {
  return (
    <div>
      {/* <Navbar/> */}
     <TemplateHero/>
    <TemplatePageSection/>
      {/* <Footer/> */}
    </div>
  );
};

export default TemplatePage;