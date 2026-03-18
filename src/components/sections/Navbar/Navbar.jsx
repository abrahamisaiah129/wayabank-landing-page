import React, { useState, useEffect, useRef } from "react";
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
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef(null);
  const homeButtonRef = useRef(null);

  useEffect(() => {
    if (location.pathname !== "/") {
      setScrolled(true);
      return;
    }
    if (forceScrolled) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, forceScrolled]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setHomeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
    setHomeDropdownOpen(false);
    const element = document.getElementById(targetId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/" + targetId;
    }
  };

  return (
    <>
      <nav
        className={`navbar waya-navbar z-50 px-6 md:px-16 sticky top-0 w-full transition-all duration-300 ${
          scrolled ? "scrolled" : ""
        } ${isMenuOpen ? "menu-open" : ""}`}
      >
        {/* ─── MOBILE layout ─── */}
        <div className="flex items-center justify-between w-full lg:hidden">
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
            <svg
              className={`w-8 h-8 text-white transition-transform duration-500 ${isMenuOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* ─── DESKTOP layout ─── */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <Link to="/" className="navbar-brand z-50">
            <img
              src={Logo}
              alt="WayaBank Logo"
              className="transition-all duration-300 logo-bold"
            />
          </Link>

          <div className="nav items-center gap-10 flex">
            {/* Home Dropdown — controlled via state, rendered in portal */}
            <div className="nav-item relative" ref={dropdownRef}>
              <button
                ref={homeButtonRef}
                onClick={() => {
                  if (!homeDropdownOpen && homeButtonRef.current) {
                    const rect = homeButtonRef.current.getBoundingClientRect();
                    setDropdownPos({ top: rect.bottom + 8, left: rect.left });
                  }
                  setHomeDropdownOpen((v) => !v);
                }}
                className="font-bold text-sm flex items-center gap-1 transition-colors py-2 uppercase tracking-wide text-white hover:text-orange-500 bg-transparent border-none cursor-pointer"
              >
                Home
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${homeDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown rendered directly — no overflow clipping */}
              {homeDropdownOpen && (
                <div
                  className="home-dropdown"
                  style={{ top: dropdownPos.top, left: dropdownPos.left }}
                >
                  {homeLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
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
    </>
  );
}

export default Navbar;