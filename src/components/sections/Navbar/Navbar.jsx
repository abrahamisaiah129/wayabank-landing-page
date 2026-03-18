import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../../assets/waya-white-logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { downloadModalState } from "../../../states/home";
import Button from "../../parts/Button";

function Navbar({ forceScrolled = false }) {
  const setDownloadModal = useSetRecoilState(downloadModalState);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(forceScrolled || location.pathname !== "/");

  useEffect(() => {
    if (location.pathname !== "/") {
      setScrolled(true);
      return;
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, forceScrolled]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const homeLinks = [
    { name: "Welcome", href: "#banner" },
    { name: "Services", href: "#services" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog Posts", href: "#blog-preview" },
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(targetId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = "/" + targetId;
    }
  };

  return (
    <nav className={`navbar waya-navbar z-50 px-6 md:px-16 flex items-center justify-between sticky top-0 w-full transition-all duration-300 ${scrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
      <Link to="/" className="navbar-brand z-50">
        <img src={Logo} alt="WayaBank Logo" className="transition-all duration-300 logo-bold" />
      </Link>

      
      {/* Desktop Navigation */}
      <div className="nav items-center gap-10 hidden lg:flex">
        {/* Home Dropdown */}
        <div className="nav-item group relative ">
          <Link to="/" className="font-bold text-sm flex items-center gap-1 transition-colors py-2 uppercase tracking-wide text-white hover:text-orange-500">
            Home
            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </Link>
          <div className="absolute top-full left-0 w-56 shadow-2xl rounded-xl border border-gray-100 py-3 hidden group-hover:block animate-fade-in-down bg-white/98 backdrop-blur-xl">
            {homeLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-6 py-2 hover:bg-black/5 hover:text-orange-500 text-[#0a0b10]/80 transition-colors font-bold text-xs uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <Link to="/developer/docs" className="font-bold text-sm transition-colors py-2 uppercase tracking-wide text-white hover:text-orange-500">
          API Documentation
        </Link>

        <Link to="/blogs" className="font-bold text-sm transition-colors py-2 uppercase tracking-wide text-white hover:text-orange-500">
          Blog
        </Link>

        <Link to="/contact" className="font-bold text-sm transition-colors py-2 uppercase tracking-wide text-white hover:text-orange-500">
          Contact
        </Link>
      </div>

      <div className="items-center gap-6 hidden lg:flex">
        <Button 
          onClick={() => setDownloadModal(true)}
          size="md"
        >
          SIGN IN
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex lg:hidden z-50">
        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      {/* Mobile Overflow Menu */}
      <div className={`mobile-menu lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-500 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="flex flex-col h-full pt-32 px-10 gap-8 overflow-y-auto pb-10">
          {homeLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-4xl font-black text-white hover:text-orange-500 uppercase tracking-tighter transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px w-full bg-white/10 my-4" />
          <Link onClick={closeMenu} to="/developer/docs" className="text-2xl font-bold text-white/70 hover:text-white uppercase tracking-wide transition-colors">API Documentation</Link>
          <Link onClick={closeMenu} to="/blogs" className="text-2xl font-bold text-white/70 hover:text-white uppercase tracking-wide transition-colors">Blog</Link>
          <Link onClick={closeMenu} to="/contact" className="text-2xl font-bold text-white/70 hover:text-white uppercase tracking-wide transition-colors">Contact</Link>
          
          <div className="mt-8">
            <Button 
              onClick={() => { setDownloadModal(true); closeMenu(); }}
              className="w-full h-16 text-lg !bg-orange-600"
            >
              SIGN IN
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;