import React, { useState, useEffect, menuRef,useRef } from "react";
import "./Nav.css"; // Import styles
import "@fortawesome/fontawesome-free/css/all.min.css"; 
const Navbar = () => {
  const [dropdown, setDropdown] = useState(null); // Track which dropdown is open
  const [activeLink, setActiveLink] = useState("");
  const [activeSubNav, setActiveSubNav] = useState("marketing");
  const menuRef = useRef(null);
  // Toggle dropdown visibility
  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  // window.addEventListener('scroll', () => {
  //   const navbar = document.querySelector('.navbar');
  //   if (window.scrollY > 50) { // Adjust threshold if needed
  //     navbar.classList.add('scrolled');
  //   } else {
  //     navbar.classList.remove('scrolled');
  //   }
  // });
  // Close dropdown on outside click
  const closeDropdown = () => {
    setDropdown(null);
  };
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdown(null); // Close the menu
      }
    };

    document.addEventListener("click", handleOutsideClick);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <nav className="navbar" onClick={closeDropdown}>
      <div className="navbar-container">
       <a href="/" className="logo">beelinx  </a>
        <ul className="navbar-links">
        <li onClick={(e) => e.stopPropagation()}>
            <a
              href="#"
              className={activeLink === "solutions" ? "active" : ""}
              onClick={() => {
                toggleDropdown("solutions");
                handleLinkClick("solutions");
              }}
            >
              Solutions
            </a>
            {dropdown === "solutions" && (
              <div className="mega-menu" ref={menuRef}>
                <div className="sub-nav">
                  <ul>
                    
                  <li
                      className={`sub-nav-link ${activeSubNav === "marketing" ? "active" : ""}`}
                      onClick={() => setActiveSubNav("marketing")}
                      
                    >
                      Marketing Teams-
                    </li>
                    <li
                      className={`sub-nav-link ${activeSubNav === "creative" ? "active" : ""}`}
                      onClick={() => setActiveSubNav("creative")}
                    >
                      Creative Teams-
                    </li>
                    
                  </ul>
                </div>
                <div className="mega-menu-content">
                  {activeSubNav === "marketing" && (
                    <>
                      <div className="mega-menu-column">
                        <h3>Marketing Teams</h3>
                        
                        <ul>
                          <li>
                            <i className="fas fa-bullhorn"></i>{" "}
                            <a href="/Product">Product</a>
                            <p style={{fontSize:"12px"}}>Streamline Proofing and reporting for seamless campaigns</p>
                          </li>
                          <li>
                            <i className="fas fa-share-alt"></i>{" "}
                            <a href="/BoundlessConfig">Boundless Config</a>
                            <p style={{fontSize:"12px"}}>Streamline Proofing and reporting for seamless campaigns & marketing reporting </p>
                          </li>
                          <li>
                            <i className="fas fa-ad"></i>{" "}
                            <a href="/Dashboard">Dashboard</a>
                            <p style={{fontSize:"12px"}}>Streamline Proofing and reporting for seamless campaigns</p>
                          </li>
                          <li>
                            <i className="fas fa-bullhorn"></i>{" "}
                            <a href="/Tour">Tour</a>
                          </li>
                          <li>
                            <i className="fas fa-share-alt"></i>{" "}
                            <a href="/demo">Demo</a>
                          </li>
                          <li>
                            <i className="fas fa-ad"></i>{" "}
                            <a href="/customerstories">Customer Stories</a>
                          </li>
                          <li>
                            <i className="fas fa-bullhorn"></i>{" "}
                            <a href="/templates">templates</a>
                          </li>
                          <li>
                            <i className="fas fa-share-alt"></i>{" "}
                            <a href="/roi">roi</a>
                          </li>
                          <li>
                            <i className="fas fa-ad"></i>{" "}
                            <a href="/legal">Legal</a>
                          </li>
                          <li>
                            <i className="fas fa-bullhorn"></i>{" "}
                            <a href="#">Campaign Management</a>
                          </li>
                          <li>
                            <i className="fas fa-share-alt"></i>{" "}
                            <a href="#">Social Media</a>
                          </li>
                          
                         
                          <button>Try Beelinx for free</button>
                          
                        </ul>
                      </div>
                      <div className="mega-menu-column">
                        <h3>Marketing Analytics</h3>
                        <ul>
                          <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="#">Lead Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="#">Lead Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="#">Lead Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="#">Lead Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                          <button>Contact Sales</button>
                        </ul>
                      </div>
                    </>
                  )}
                  {activeSubNav === "creative" && (
                    <>
                      <div className="mega-menu-column">
                        <h3>Creative Teams</h3>
                        <ul>
                        <li>
                            <i className="fas fa-bullhorn"></i>{" "}
                            <a href="#">Campaign Management</a>
                            <p style={{fontSize:"12px"}}>Streamline Proofing and reporting for seamless campaigns</p>
                          </li>
                          <li>
                            <i className="fas fa-share-alt"></i>{" "}
                            <a href="#">Social Media</a>
                            <p style={{fontSize:"12px"}}>Streamline Proofing and reporting for seamless campaigns & marketing reporting </p>
                          </li>
                          <li>
                            <i className="fas fa-ad"></i>{" "}
                            <a href="#">Advertising</a>
                            <p style={{fontSize:"12px"}}>Streamline Proofing and reporting for seamless campaigns</p>
                          </li>
                          <li>
                            <i className="fas fa-pencil-alt"></i>{" "}
                            <a href="#">Design Collaboration</a>
                          </li>
                          <li>
                            <i className="fas fa-palette"></i>{" "}
                            <a href="#">Brand Management</a>
                          </li>
                          <li>
                            <i className="fas fa-archive"></i>{" "}
                            <a href="#">Asset Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-pencil-alt"></i>{" "}
                            <a href="#">Design Collaboration</a>
                          </li>
                          <li>
                            <i className="fas fa-palette"></i>{" "}
                            <a href="#">Brand Management</a>
                          </li>
                          <li>
                            <i className="fas fa-archive"></i>{" "}
                            <a href="#">Asset Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-pencil-alt"></i>{" "}
                            <a href="#">Design Collaboration</a>
                          </li>
                          <li>
                            <i className="fas fa-pencil-alt"></i>{" "}
                            <a href="#">Design Collaboration</a>
                          </li>
                          <button>Try Beelinx for free</button>
                        </ul>
                      </div>
                      <div className="mega-menu-column">
                        <h3>Creative Workflows</h3>
                        <ul>
                          <li>
                            <i className="fas fa-cogs"></i>{" "}
                            <a href="#">Visual Prototyping</a>
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>{" "}
                            <a href="#">Review & Approval</a>
                          </li>
                          <li>
                            <i className="fas fa-truck"></i>{" "}
                            <a href="#">Content Delivery</a>
                          </li>
                          <li>
                            <i className="fas fa-cogs"></i>{" "}
                            <a href="#">Visual Prototyping</a>
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>{" "}
                            <a href="#">Review & Approval</a>
                          </li>
                          <li>
                            <i className="fas fa-truck"></i>{" "}
                            <a href="#">Content Delivery</a>
                          </li>
                          <li>
                            <i className="fas fa-cogs"></i>{" "}
                            <a href="#">Visual Prototyping</a>
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>{" "}
                            <a href="#">Review & Approval</a>
                          </li>
                          <li>
                            <i className="fas fa-truck"></i>{" "}
                            <a href="#">Content Delivery</a>
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>{" "}
                            <a href="#">Review & Approval</a>
                          </li>
                          <li>
                            <i className="fas fa-truck"></i>{" "}
                            <a href="#">Content Delivery</a>
                          </li><li>
                            <i className="fas fa-palette"></i>{" "}
                            <a href="#">Brand Management</a>
                          </li>
                          <li>
                            <i className="fas fa-archive"></i>{" "}
                            <a href="#">Asset Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-pencil-alt"></i>{" "}
                            <a href="#">Design Collaboration</a>
                          </li>
                          <li>
                            <i className="fas fa-pencil-alt"></i>{" "}
                            <a href="#">Design Collaboration</a>
                          </li>
                          <button>Contact Sales</button>
                        </ul>
                      </div>
                    </>
                  )}
                  <div className="mega-menu-column">
                    <h3>Project Management</h3>
                    <ul>
                      <li>
                        <i className="fas fa-tasks"></i>{" "}
                        <a href="#">Task Management</a>
                      </li>
                      <li>
                        <i className="fas fa-clock"></i>{" "}
                        <a href="#">Timeline Tracking</a>
                      </li>
                      <li>
                        <i className="fas fa-users-cog"></i>{" "}
                        <a href="#">Resource Allocation</a>
                      </li>
                      <li>
                        <i className="fas fa-tasks"></i>{" "}
                        <a href="#">Task Management</a>
                      </li>
                      <li>
                        <i className="fas fa-clock"></i>{" "}
                        <a href="#">Timeline Tracking</a>
                      </li>
                      <li>
                        <i className="fas fa-users-cog"></i>{" "}
                        <a href="#">Resource Allocation</a>
                      </li>
                      <li>
                        <i className="fas fa-tasks"></i>{" "}
                        <a href="#">Task Management</a>
                      </li>
                      <li>
                        <i className="fas fa-clock"></i>{" "}
                        <a href="#">Timeline Tracking</a>
                      </li>
                      <li>
                        <i className="fas fa-users-cog"></i>{" "}
                        <a href="#">Resource Allocation</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li onClick={(e) => e.stopPropagation()}>
          <a
              href="#"
              className={activeLink === "product" ? "active" : ""}
              onClick={() => { toggleDropdown("product"); handleLinkClick("product"); }}
            >
              Product
            </a>
            {dropdown === "product" && (
              <div className="mega-menu" ref={menuRef}>
                <div className="mega-menu-column">
                  <h3>Features</h3>
                  <ul>
                  <li>
                            <i className="fas fa-bullhorn"></i>{" "}
                            <a href="#">Campaign Management</a>
                          </li>
                          <li>
                            <i className="fas fa-share-alt"></i>{" "}
                            <a href="#">Social Media</a>
                          </li>
                          <li>
                            <i className="fas fa-ad"></i>{" "}
                            <a href="#">Advertising</a>
                          </li>
                          <li>
                            <i className="fas fa-bullhorn"></i>{" "}
                            <a href="#">Campaign Management</a>
                          </li>
                          <li>
                            <i className="fas fa-share-alt"></i>{" "}
                            <a href="#">Social Media</a>
                          </li>
                          <li>
                            <i className="fas fa-ad"></i>{" "}
                            <a href="#">Advertising</a>
                          </li>
                          <li>
                            <i className="fas fa-bullhorn"></i>{" "}
                            <a href="#">Campaign Management</a>
                          </li>
                          <li>
                            <i className="fas fa-share-alt"></i>{" "}
                            <a href="#">Social Media</a>
                          </li>
                          <li>
                            <i className="fas fa-ad"></i>{" "}
                            <a href="#">Advertising</a>
                          </li>
                          <li>
                            <i className="fas fa-bullhorn"></i>{" "}
                            <a href="#">Campaign Management</a>
                          </li>
                          <li>
                            <i className="fas fa-share-alt"></i>{" "}
                            <a href="#">Social Media</a>
                          </li>
                          <li>
                            <i className="fas fa-bullhorn"></i>{" "}
                            <a href="#">Campaign Management</a>
                          </li>
                          <li>
                            <i className="fas fa-share-alt"></i>{" "}
                            <a href="#">Social Media</a>
                          </li>
                          <li>
                            <i className="fas fa-ad"></i>{" "}
                            <a href="#">Advertising</a>
                          </li>
                          <li>
                            <i className="fas fa-bullhorn"></i>{" "}
                            <a href="#">Campaign Management</a>
                          </li>
                          

                    <button>Try Beelinx for free</button>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Pricing</h3>
                  <ul>
                  <li>
                            <i className="fas fa-cogs"></i>{" "}
                            <a href="#">Visual Prototyping</a>
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>{" "}
                            <a href="#">Review & Approval</a>
                          </li>
                          <li>
                            <i className="fas fa-truck"></i>{" "}
                            <a href="#">Content Delivery</a>
                          </li>
                          <li>
                            <i className="fas fa-cogs"></i>{" "}
                            <a href="#">Visual Prototyping</a>
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>{" "}
                            <a href="#">Review & Approval</a>
                          </li>
                          <li>
                            <i className="fas fa-truck"></i>{" "}
                            <a href="#">Content Delivery</a>
                          </li>
                          <li>
                            <i className="fas fa-cogs"></i>{" "}
                            <a href="#">Visual Prototyping</a>
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>{" "}
                            <a href="#">Review & Approval</a>
                          </li>
                          <li>
                            <i className="fas fa-truck"></i>{" "}
                            <a href="#">Content Delivery</a>
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>{" "}
                            <a href="#">Review & Approval</a>
                          </li>
                          <li>
                            <i className="fas fa-truck"></i>{" "}
                            <a href="#">Content Delivery</a>
                          </li> <li>
                            <i className="fas fa-bullhorn"></i>{" "}
                            <a href="#">Campaign Management</a>
                          </li>
                          <li>
                            <i className="fas fa-share-alt"></i>{" "}
                            <a href="#">Social Media</a>
                          </li>
                          <li>
                            <i className="fas fa-ad"></i>{" "}
                            <a href="#">Advertising</a>
                          </li>
                          <li>
                            <i className="fas fa-bullhorn"></i>{" "}
                            <a href="#">Campaign Management</a>
                          </li>
                          
                          <button>Contact Sales</button>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Project Management</h3>
                  <ul>
                  <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="#">Lead Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="#">Lead Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="#">Lead Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                   
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Project Management</h3>
                  <ul>
                  <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="#">Lead Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="#">Lead Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="#">Lead Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                   
                  </ul>
                </div>
              </div>
              
            )}
          </li>
          <li onClick={(e) => e.stopPropagation()}>
          <a
              href="#"
              className={activeLink === "why-Beelinx" ? "active" : ""}
              onClick={() => { toggleDropdown("why-Beelinx"); handleLinkClick("why-Beelinx"); }}
            >
              Why beelinx?
            </a>
            {dropdown === "why-Beelinx" && (
              <div className="mega-menu" ref={menuRef}>
                <div className="mega-menu-column">
                  <h3>Customer Stories</h3>
                  <ul>
                  <li>
                        <i className="fas fa-tasks"></i>{" "}
                        <a href="#">Task Management</a>
                      </li>
                      <li>
                        <i className="fas fa-clock"></i>{" "}
                        <a href="#">Timeline Tracking</a>
                      </li>
                      <li>
                        <i className="fas fa-users-cog"></i>{" "}
                        <a href="#">Resource Allocation</a>
                      </li>
                      <li>
                        <i className="fas fa-tasks"></i>{" "}
                        <a href="#">Task Management</a>
                      </li>
                      <li>
                        <i className="fas fa-tasks"></i>{" "}
                        <a href="#">Task Management</a>
                      </li> 
                    <button>Try Beelinx for free</button>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Resources</h3>
                  <ul>
                  <li>
                        <i className="fas fa-tasks"></i>{" "}
                        <a href="#">Task Management</a>
                      </li>
                      <li>
                        <i className="fas fa-clock"></i>{" "}
                        <a href="#">Timeline Tracking</a>
                      </li>
                      <li>
                        <i className="fas fa-users-cog"></i>{" "}
                        <a href="#">Resource Allocation</a>
                      </li>
                      <li>
                        <i className="fas fa-tasks"></i>{" "}
                        <a href="#">Task Management</a>
                      </li>
                      <li>
                        <i className="fas fa-tasks"></i>{" "}
                        <a href="#">Task Management</a>
                      </li> 
                      
                     
                      <button>Contact Sales</button>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Resources</h3>
                  <ul>
                  <li>
                            <i style={{Color:"green"}}  className="fas fa-cogs"></i>{" "}
                            <a href="#">Visual Prototyping</a>
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>{" "}
                            <a href="#">Review & Approval</a>
                          </li>
                          <li>
                            <i className="fas fa-truck"></i>{" "}
                            <a href="#">Content Delivery</a>
                          </li>
                          <li>
                            <i className="fas fa-cogs"></i>{" "}
                            <a href="#">Visual Prototyping</a>
                          </li>
                          <li>
                            <i className="fas fa-cogs"></i>{" "}
                            <a href="#">Visual Prototyping</a>
                          </li>
                          
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Project Management</h3>
                  <ul>
                  <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="#">Lead Tracking</a>
                          </li>
                          <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="#">Performance Metrics</a>
                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="#">Customer Insights</a>
                          </li>
                         
                         
                   
                  </ul>
                </div>
                
              </div>
              
            )}
          </li>
          <li><a
              href="/enterprises"
              className={activeLink === "enterprise" ? "active" : ""}
              onClick={() => handleLinkClick("enterprise")}
            >
              Enterprise
            </a></li>
          <li><a
              href="/pricing"
              className={activeLink === "pricing" ? "active" : ""}
              onClick={() => handleLinkClick("pricing")}
            >
              Pricing
            </a></li>
          <li><a
              href="/contactsales"
              className={activeLink === "contact-sales" ? "active" : ""}
              onClick={() => handleLinkClick("contact-sales")}
            >
              Contact Sales
            </a></li>
          <li className="login"><a
              href="#"
              className={activeLink === "login" ? "active" : ""}
              onClick={() => handleLinkClick("login")}
            >
              Log in
            </a></li>
        </ul>
        <button className="cta-button">Try Beelinx for free</button>
      </div>
    </nav>
  );
};

export default Navbar;
