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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/" + targetId;
    }
  };

  return (
    <nav
      className={`navbar waya-navbar z-50 px-6 md:px-16 sticky top-0 w-full transition-all duration-300 ${
        scrolled ? "scrolled" : ""
      } ${isMenuOpen ? "menu-open" : ""}`}
    >
      {/* ─── MOBILE layout (flex row: spacer | logo | hamburger) ─── */}
      <div className="flex items-center justify-between w-full lg:hidden">
        {/* Invisible spacer — same width as hamburger so logo sits dead-centre */}
        <div className="w-11" aria-hidden="true" />

        <Link to="/" className="navbar-brand z-50" onClick={closeMenu}>
          <img
            src={Logo}
            alt="WayaBank Logo"
            className="transition-all duration-300 logo-bold"
          />
        </Link>

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

      {/* ─── DESKTOP layout (logo | nav links | sign-in) ─── */}
      <div className="hidden lg:flex items-center justify-between w-full">
        <Link to="/" className="navbar-brand z-50">
          <img
            src={Logo}
            alt="WayaBank Logo"
            className="transition-all duration-300 logo-bold"
          />
        </Link>

        <div className="nav items-center gap-10 flex">
          {/* Home Dropdown */}
          <div className="nav-item group relative">
            <Link
              to="/"
              className="font-bold text-sm flex items-center gap-1 transition-colors py-2 uppercase tracking-wide text-white hover:text-orange-500"
            >
              Home
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </Link>
            <div className="absolute top-full left-0 w-56 shadow-2xl rounded-xl border border-gray-100 py-3 hidden group-hover:block animate-fade-in-down bg-white/98 backdrop-blur-xl">
              {homeLinks.map((link) => (
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

          <Link
            to="/developer/docs"
            className="font-bold text-sm transition-colors py-2 uppercase tracking-wide text-white hover:text-orange-500"
          >
            API Documentation
          </Link>

          <Link
            to="/blogs"
            className="font-bold text-sm transition-colors py-2 uppercase tracking-wide text-white hover:text-orange-500"
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className="font-bold text-sm transition-colors py-2 uppercase tracking-wide text-white hover:text-orange-500"
          >
            Contact
          </Link>
        </div>

        <div className="items-center gap-6 flex">
          <Button onClick={() => setDownloadModal(true)} size="md">
            SIGN IN
          </Button>
        </div>
      </div>

      {/* ─── Mobile Overlay Menu ─── */}
      <div
        className={`mobile-menu lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-6 sm:px-10 gap-6 overflow-y-auto pb-10">
          {homeLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-3xl sm:text-4xl font-black text-white hover:text-orange-500 uppercase tracking-tighter transition-colors break-words"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px w-full bg-white/10 my-2" />
          <Link
            onClick={closeMenu}
            to="/developer/docs"
            className="text-xl sm:text-2xl font-bold text-white/70 hover:text-white uppercase tracking-wide transition-colors"
          >
            API Documentation
          </Link>
          <Link
            onClick={closeMenu}
            to="/blogs"
            className="text-xl sm:text-2xl font-bold text-white/70 hover:text-white uppercase tracking-wide transition-colors"
          >
            Blog
          </Link>
          <Link
            onClick={closeMenu}
            to="/contact"
            className="text-xl sm:text-2xl font-bold text-white/70 hover:text-white uppercase tracking-wide transition-colors"
          >
            Contact
          </Link>

          <div className="mt-4">
            <Button
              onClick={() => {
                setDownloadModal(true);
                closeMenu();
              }}
              className="w-full min-height-[56px] text-lg !bg-orange-600"
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