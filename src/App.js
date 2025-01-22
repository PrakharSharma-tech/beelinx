import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/HomePage';
import PricingPage from './Components/Pages/PricingPage';
import ContactSalesPage from './Components/Pages/ContactSales';
import EnterprisesPage from './Components/Pages/EnterprisesPage';
import ProductPage from './Components/Pages/Solution/ProductPage';
import BoundlessConfigPage from './Components/Pages/WhyBeelinx/BoundlessConfigPage';
import DashboardPage from './Components/Pages/Dashboard/DashboardPage';
import TakeAProductTour from './Components/Pages/ExploreBeelinx/TakeAProductTour';
import BookADemo from './Components/Pages/ExploreBeelinx/BookADemo';
import CustomerStoriesPage from './Components/Pages/ExploreBeelinx/CustomerStories';
import TemplatePage from './Components/Pages/ExploreBeelinx/TemplatePage';
import ROICalculatorPage from './Components/Pages/ExploreBeelinx/ROIcalculator';
import LegalPage from './Components/Pages/LegalPage/LegalPage';
import NotificationBar from './Components/NotificationBar/NotificationBar';
import AMSPage from './Components/Pages/BeelinxProductPages/AMSPage';
import TRSPage from './Components/Pages/BeelinxProductPages/TRSPage';
import CMSPage from './Components/Pages/BeelinxProductPages/CMSPage';
import CRMPage from './Components/Pages/BeelinxProductPages/CRMPage';
import POSPage from './Components/Pages/BeelinxProductPages/POS';
import PMSPage from './Components/Pages/BeelinxProductPages/PMSPage';
import PayoutMSPage from './Components/Pages/BeelinxProductPages/PayoutMS';
import LMSPage from './Components/Pages/BeelinxProductPages/CMSPage';
import ERPPage from './Components/Pages/BeelinxProductPages/ERPPage';
import HMSPage from './Components/Pages/BeelinxProductPages/HMSPage';
import SMSPage from './Components/Pages/BeelinxProductPages/SMSPage';
import CSMSPage from './Components/Pages/BeelinxProductPages/CSMSPage';
import SDSPage from './Components/Pages/BeelinxSolutionPages/SDSPage';
import SolutionSMSPage from './Components/Pages/BeelinxSolutionPages/SolutionSMSPage';
import SCIPage from './Components/Pages/BeelinxSolutionPages/SCIPage';
import STEPage from './Components/Pages/BeelinxSolutionPages/STEPage';
import SAASPage from './Components/Pages/BeelinxSolutionPages/SAASPage';
import CPSPage from './Components/Pages/BeelinxSolutionPages/CPSPage';
import OSAPage from './Components/Pages/BeelinxSolutionPages/OSAPage';
import PACPage from './Components/Pages/BeelinxSolutionPages/PACPage';
import ADIPage from './Components/Pages/BeelinxSolutionPages/ADIPage';
import ADMPage from './Components/Pages/BeelinxSolutionPages/ADMPage';
import ATIPage from './Components/Pages/BeelinxSolutionPages/ATIPage';
import CASPage from './Components/Pages/BeelinxSolutionPages/CASPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NotificationBar/>
        <Header />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/Pricing"  element ={<PricingPage/>} />
          <Route path="/ContactSales"  element ={<ContactSalesPage/>} />
          <Route path="/Enterprises"  element ={<EnterprisesPage/>} />
          <Route path="/Product"  element ={<ProductPage/>} />
          <Route path="/BoundlessConfig"  element ={<BoundlessConfigPage/>} />
          <Route path="/Dashboard"  element ={<DashboardPage/>} />
          <Route path="/Tour"  element ={<TakeAProductTour/>} />
          <Route path="/demo"  element ={<BookADemo/>} />
          <Route path="/customerstories"  element ={<CustomerStoriesPage/>} />
          <Route path="/templates"  element ={<TemplatePage/>} />
          <Route path="/roi"  element ={<ROICalculatorPage/>} />
          <Route path="/legal"  element ={<LegalPage/>} />

          <Route path="/ams"  element ={<AMSPage/>} />
          <Route path="/trs"  element ={<TRSPage/>} />
          <Route path="/cms"  element ={<CMSPage/>} />
          <Route path="/crm"  element ={<CRMPage/>} />
          <Route path="/pos"  element ={<POSPage/>} />
          <Route path="/pms"  element ={<PMSPage/>} />
          <Route path="/payoutms"  element ={<PayoutMSPage/>} />
          <Route path="/lms"  element ={<LMSPage/>} />
          <Route path="/erp"  element ={<ERPPage/>} />
          <Route path="/hms"  element ={<HMSPage/>} />
          <Route path="/sms"  element ={<SMSPage/>} />
          <Route path="/csms"  element ={<CSMSPage/>} />

          <Route path="/sds"  element ={<SDSPage/>} />
          <Route path="/solutionsms"  element ={<SolutionSMSPage/>} />
          <Route path="/sci"  element ={<SCIPage/>} />
          <Route path="/ste"  element ={<STEPage/>} />
          <Route path="/saas"  element ={<SAASPage/>} />
          <Route path="/cps"  element ={<CPSPage/>} />
          <Route path="/osa"  element ={<OSAPage/>} />
          <Route path="/pac"  element ={<PACPage/>} />
          <Route path="/adi"  element ={<ADIPage/>} />
          <Route path="/adm"  element ={<ADMPage/>} />
          <Route path="/ati"  element ={<ATIPage/>} />
          <Route path="/cas"  element ={<CASPage/>} />
          {/* <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/getstarted" element={<GetStartedPage />} />
          <Route path="/termsandconditions" element={<TandC/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/crm" element={<CRMComponent/>} /> */}
          {/* You can add more routes here for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;