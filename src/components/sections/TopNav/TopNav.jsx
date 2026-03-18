import React, { useState, useEffect } from "react";
import "../../../styles/nav.scss";
import Button from "../../parts/Button";
import { useLocation } from "react-router-dom";
import wayablacklogo from "../../../assets/waya-colored-logo.png";
// import wayablacklogo from "../../../assets/waya-black-logo.png";
import wayawhitelogo from "../../../assets/waya-colored-logo.png";

const navLinks = [
  {
    label: "Our Solution",
    href: "/#solution",
    subLinks: [],
  },
  {
    label: "Contact",
    href: "/#contact",
    subLinks: [],
  },
  {
    label: "API Documentation",
    href: "https://documenter.getpostman.com/view/19310490/UVeKqQWd",
    subLinks: [],
    external: true,
  },
  {
    label: "Sign In",
    href: "/login",
    hideOnPath: "/signin",
    subLinks: [],
  },
];

function TopNav({ onSignInClick }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLinks = (links) => {
    return links.map((link, index) => {
      // Hide link on specific path
      if (link.hideOnPath && location.pathname === link.hideOnPath) {
        return null;
      }

      const isActive = location.pathname === link.href;
      const hasSubLinks = link.subLinks && link.subLinks.length > 0;
      
      const isSignIn = link.label === "Sign In";

      return (
        <li
          key={link.label}
          className={`nav-item ${link.className || ""} ${
            hasSubLinks ? "dropdown" : ""
          }`}
        >
          {isSignIn ? (
            <Button 
              size="navbar" 
              onClick={onSignInClick}
            >
              {link.label}
            </Button>
          ) : (
            <a
              className={`nav-link ${isActive ? "border-bottom" : ""} ${
                hasSubLinks ? "dropdown-toggle" : ""
              }`}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              {...(hasSubLinks && {
                id: `dropdown-${index}`,
                "data-toggle": "dropdown",
                "aria-haspopup": "true",
                "aria-expanded": "false",
              })}
            >
              {link.label}
            </a>
          )}

          {hasSubLinks && (
            <div
              className="dropdown-menu"
              aria-labelledby={`dropdown-${index}`}
            >
              {link.subLinks.map((sub, subIndex) => (
                <a
                  key={subIndex}
                  className="dropdown-item"
                  href={sub.href}
                  target={sub.external ? "_blank" : undefined}
                  rel={sub.external ? "noopener noreferrer" : undefined}
                >
                  {sub.label}
                </a>
              ))}
            </div>
          )}
        </li>
      );
    });
  };

  return (
    <nav
      className={`navbar navbar-expand-lg w-100 ${scrolled ? "scrolled" : ""}`}
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(15px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(15px)" : "none",
        transition: "all 0.4s ease-in-out",
        boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.05)" : "none"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <a className="navbar-brand" href="/">
          <img 
            src={wayablacklogo} 
            alt="wayabank logo" 
            style={{ height: "50px", transition: "all 0.3s" }} 
          />
        </a>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span style={{ filter: scrolled ? "none" : "invert(1)" }}>
          <img src="/menu-icon.png" alt="menu" />
        </span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav mx-auto align-items-center">
          {renderNavLinks(navLinks.slice(0, 3))}
        </ul>
        <ul className="navbar-nav ml-auto align-items-center">
          {renderNavLinks(navLinks.slice(3))}
        </ul>
      </div>
    </nav>
  );
}

export default TopNav;