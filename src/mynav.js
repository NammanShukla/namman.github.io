import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./assets/web-logo.svg";
import navIcon1 from "./assets/github-mark-white.svg";
import navIcon3 from "./assets/linkedin.svg";
import { BrowserRouter as Router } from "react-router-dom";

export const MyNavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="nav-container">
              <img src={logo} className="logo"/>

          <Navbar.Collapse id="basic-navbar-nav">
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/NammanShukla" target="blank">
                  <img src={navIcon1} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/namman-shukla-7b0531275/" target="blank">
                  <img src={navIcon3} alt="Linkedin" />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
