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

  const showDropdown = () => {
    document.querySelector(".dropdown").classList.toggle("hidden");
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
    const element = document.getElementById(targetId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = "/" + targetId;
    }
  };

  return (
    <nav className={`navbar waya-navbar z-50 px-8 md:px-16 flex items-center justify-between sticky top-0 w-full transition-all duration-300 h-[72px] ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="navbar-brand">
        <img src={Logo} alt="" width="180px" className="transition-all duration-300 logo-bold" />
      </Link>
      
      <div className="nav items-center gap-10 hidden md:flex">
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

        {/* API Documentation */}
        <Link to="/developer/docs" className="font-bold text-sm transition-colors py-2 uppercase tracking-wide text-white hover:text-orange-500">
          API Documentation
        </Link>

        {/* Blog */}
        <Link to="/blogs" className="font-bold text-sm transition-colors py-2 uppercase tracking-wide text-white hover:text-orange-500">
          Blog
        </Link>

        {/* Contact */}
        <Link to="/contact" className="font-bold text-sm transition-colors py-2 uppercase tracking-wide text-white hover:text-orange-500">
          Contact
        </Link>
      </div>

      <div className="items-center gap-6 hidden md:flex">
        <Button 
          onClick={() => setDownloadModal(true)}
          size="md"
        >
          SIGN IN
        </Button>
      </div>

      <div className="flex md:hidden">
        <span
          className="menu-btn relative w-6 h-1 bg-white block"
          onClick={showDropdown}
        ></span>

        <div className="dropdown absolute w-full left-0 top-24 z-20 flex hidden sm:hidden flex-col h-auto rounded shadow-2xl overflow-hidden bg-white/98 backdrop-blur-xl">
          {homeLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="font-bold px-6 text-md text-[#0a0b10]/80 border-b border-gray-100 h-14 flex items-center uppercase tracking-wide hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
          <Link to="/developer/docs" className="font-bold px-6 text-md text-[#0a0b10]/80 border-b border-gray-100 h-16 flex items-center uppercase tracking-wide hover:text-orange-500">API DOCUMENTATION</Link>
          <Link to="/blogs" className="font-bold px-6 text-md text-[#0a0b10]/80 border-b border-gray-100 h-16 flex items-center uppercase tracking-wide hover:text-orange-500">BLOG</Link>
          <Link to="/contact" className="font-bold px-6 text-md text-[#0a0b10]/80 border-b border-gray-100 h-16 flex items-center uppercase tracking-wide hover:text-orange-500">CONTACT</Link>
          <Button 
            onClick={() => { setDownloadModal(true); showDropdown(); }}
            className="w-full text-left justify-start px-6 h-20 bg-transparent hover:bg-black/5 border-none rounded-none text-[#0a0b10] shadow-none"
            variant="outline"
          >
            SIGN IN
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;