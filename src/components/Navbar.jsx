
// import {useEffect} from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const showDropdown = () => {
        document.querySelector(".dropdown").classList.toggle("hidden");
    }
    return (
        <nav class="navbar z-20 px-8 md:px-16 flex">
            <Link to="/" class="navbar-brand">
                <img src={Logo} alt="" width="130px" />
            </Link>
            <div class="nav items-center gap-6 -ml-8 hidden md:flex">
                <Link to="/solution" className="font-semibold text-md">OUR SOLUTIONS</Link>
                <Link to="/contact" className="font-semibold text-md">CONTACT</Link>
            </div>
            <div class="items-center gap-6 hidden md:flex">
                <button class="text-white font-semibold">LOGIN</button>
                <button class="bg-white py-3 px-8 rounded text-primary-theme font-semibold">REGISTER</button>
            </div>
            <div className="flex md:hidden relative">
                <span className="menu-btn relative w-6 h-1 bg-white block" onClick={showDropdown}></span>

                <div className="dropdown absolute w-48 right-0 py-4 top-8 flex hidden flex-col space-y-3 h-40 bg-white rounded-lg shadow">
                    <Link to="/solution" className="font-medium px-4 text-md text-gray-700">OUR SOLUTIONS</Link>
                    <Link to="/contact" className="font-medium px-4 text-md text-gray-700">CONTACT</Link>
                    <Link to="/#" className="font-medium px-4 text-md text-gray-700">LOGIN</Link>
                    <Link to="/#" className="font-medium px-4 text-md text-gray-700">REGISTER</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
