import React from "react";
import HeroSection from "../EnterprisesHero1/EnterprisesHero1";
import TrustedBySection from "../TrustedBy/TrustedBy";
import DiscoverBeelinxSection from "../VideoSectionEnterprises/VideoSectionEnterprises";
import FeatureSection from "../EnterprisesFeatures/EnterprisesFeatures";
import EnterpriseSection from "../EndtoEndEnterprise/EndtoEndEnterprise";
import EnterprisesCards from "../EnterprisesCards/EnterprisesCards";
import TapIntoFutureSection from "../TapIntoFuture/TapIntoFuture";
import TabSection2 from "../TabSectionEnterprises/TabSectionEnterprises";
import FormSectionEnterprises from "../FormSectionEnterprises/FormSectionEnterprises";

import IntegrationsSectionEnterprises from "../ClientSectionEnterprises/ClientSectionEnterprises";
import EnterprisesCarousel from "../CarouselEnterprises/CarouselEnterprises";
import AnchorSection from "../AnchorSection/AnchorSection";

const EnterprisesPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
    <HeroSection/>
    {/* <TrustedBySection/> */}
    <AnchorSection/>
    <DiscoverBeelinxSection/>
    <TabSection2/>
    <FeatureSection/>
    <FormSectionEnterprises/>
    <EnterpriseSection/>
    <EnterprisesCards/>
    <IntegrationsSectionEnterprises/>
    <EnterprisesCarousel/>
    <TapIntoFutureSection/>
      {/* <Footer/> */}
    </div>
  );
};

export default EnterprisesPage;