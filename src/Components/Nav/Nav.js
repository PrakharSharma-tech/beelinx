import React, { useState, useEffect, useRef } from "react";
import "./Nav.css"; // Import styles
import "@fortawesome/fontawesome-free/css/all.min.css"; 
const Navbar = () => {
  const [dropdown, setDropdown] = useState(null); // Track which dropdown is open
  const [activeLink, setActiveLink] = useState("");
  const [activeSubNav, setActiveSubNav] = useState("marketing");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuRef = useRef(null);
  // Toggle dropdown visibility
  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
      <a href="/" className="logo">
          <img src="beelinx logo cropped 2.png" alt="Beelinx Logo" />
        </a>

       <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}> {/* Mobile menu toggle */}

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
                <div className="mega-menu-column">
                  <h3>Software Solutions</h3>
                  <ul>
                  <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="sds">Software Development Services</a>
                            <p style={{fontSize:"12px"}}>We provide tailored software development solutions to meet your business needs.
</p>

                          </li>

                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="solutionsms">Software Maintenance and Support</a>
                            <p style={{fontSize:"12px"}}>We offer ongoing software maintenance and support to ensure optimal performance and reliability.</p>

                          </li>

                          <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="sci">Software Customization and Integration</a>
                            <p style={{fontSize:"12px"}}>We specialize in customizing and integrating software to fit your unique business requirements.
</p>

                          </li>
                          {/* <button>Try Beelinx for free</button> */}

                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>API Solutions</h3>
                  <ul>
                  <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="adi">API Design and Implementation</a>
                            <p style={{fontSize:"12px"}}>We design and implement seamless APIs to enhance system connectivity.
</p>

                          </li>

                          <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="adm">API Development and Management</a>
                            <p style={{fontSize:"12px"}}>We specialize in API development and management for smooth, efficient integration.</p>

                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="ati">API Testing and Integration</a>
                            <p style={{fontSize:"12px"}}>We ensure robust API testing and seamless integration for flawless performance.</p>

                          </li>
                          {/* <button>Try Beelinx for free</button> */}
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Professional Solutions</h3>
                  <ul>
                  <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="cps">Consulting Professional Services</a>
                            <p style={{fontSize:"12px"}}>We offer expert consulting to drive your business success with strategy and innovation.</p>

                          </li>

 <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="ste">Software Training and Education</a>
                            <p style={{fontSize:"12px"}}>We provide expert software training to empower your team with essential skills.
</p>

                          </li>
<li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="osa">Outsourcing and Staff Augmentation</a>
                            <p style={{fontSize:"12px"}}>We provide outsourcing and staff augmentation to enhance your team’s capabilities.
</p>

                          </li>

                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Other Solutions</h3>
                  <ul>
                  <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="saas">Software as a Service (SaaS)</a>
                            <p style={{fontSize:"12px"}}>We deliver scalable, cloud-based software solutions through SaaS for efficiency and growth.
</p>

                          </li>
<li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="cas">Custom API Solutions</a>
                            <p style={{fontSize:"12px"}}>We create tailored API solutions to meet your specific business needs.</p>

                          </li>
<li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="pac">Partnership and Collaboration</a>
                            <p style={{fontSize:"12px"}}>We foster strategic partnerships to drive mutual growth and innovation.</p>

                          </li>
                  </ul>
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
              Products
            </a>
            {dropdown === "product" && (
              <div className="mega-menu" ref={menuRef}>
                <div className="mega-menu-column">
                  <h3>Payment Products</h3>
                  <ul>
                  <li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="pms"> Payin Management Software</a>
                            <p style={{fontSize:"12px"}}>We provide payin management software for seamless payment processing.</p>

                          </li>
<li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="payoutms"> Payout Management Software</a>
                            <p style={{fontSize:"12px"}}>We offer payout management software for smooth and secure payment disbursements.</p>

                          </li>

<li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="trs"> Transaction Reconciliation Software</a>
                            <p style={{fontSize:"12px"}}>We provide software for accurate and efficient transaction reconciliation.
</p>

                          </li>
                          
                         
                          
                          

                    {/* <button>Try Beelinx for free</button> */}
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Enterprise Products</h3>
                  <ul>
                  <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="crm">CRM Software</a>
                            <p style={{fontSize:"12px"}}>We provide CRM software to optimize customer relationships and boost sales</p>

                          </li>


<li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="erp"> ERP Software</a>
                            <p style={{fontSize:"12px"}}>We offer ERP software to streamline business processes and improve efficiency.</p>

                          </li>
 <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="pos">Retail POS Softwares</a>
                            <p style={{fontSize:"12px"}}>We offer retail POS software for efficient sales and inventory management.</p>

                          </li>
                          
                          
                          {/* <button>Contact Sales</button> */}
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Management Products</h3>
                  <ul>
                  <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="ams"> API Management Software</a>
                            <p style={{fontSize:"12px"}}>We provide powerful API management software for seamless control and security.
</p>

                          </li>
<li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="lms"> Loan Management Software</a>
                            <p style={{fontSize:"12px"}}>We provide loan management software for efficient loan tracking and processing.</p>

                          </li>

<li>
                            <i className="fas fa-chart-pie"></i>{" "}
                            <a href="cms"> Chargeback Management Software</a>
                            <p style={{fontSize:"12px"}}>We offer chargeback management software to streamline dispute resolution.</p>

                          </li>
                         
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Other Products</h3>
                  <ul>
                  <li>
                            <i className="fas fa-chart-line"></i>{" "}
                            <a href="hms"> Hospital Management Software</a>
                            <p style={{fontSize:"12px"}}>We provide software to simplify hospital management and improve care.</p>

                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="sms">School Management Software</a>
                            <p style={{fontSize:"12px"}}>We provide school management software to simplify administration and operations.</p>

                          </li>
                          <li>
                            <i className="fas fa-users"></i>{" "}
                            <a href="csms"> Co-op Society Management Software</a>
                            <p style={{fontSize:"12px"}}>We offer software to efficiently manage cooperative society operatio</p>

                          </li>
                          
                   
                  </ul>
                </div>
              </div>
              
            )}
          </li>
          {/* <li onClick={(e) => e.stopPropagation()}>
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
          </li> */}
          <li><a
              href="/enterprises"
              className={activeLink === "enterprise" ? "active" : ""}
              onClick={() => handleLinkClick("enterprise")}
            >
              Enterprise
            </a></li>
          {/* <li><a
              href="/pricing"
              className={activeLink === "pricing" ? "active" : ""}
              onClick={() => handleLinkClick("pricing")}
            >
              Pricing
            </a></li> */}
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
        {/* <button className="cta-button">Try Beelinx for free</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
