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

function App() {
  return (
    <Router>
      <div className="App">
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