import React, { useState } from 'react';
import logo1 from "../../asset/images/logo1.jpg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="flex justify-between items-center py-4 px-4 w-full max-w-full mx-0">
                {/* Logo + Text */}
                <div className="flex items-center">
                    <img src={logo1} alt="Main logo" style={{ height: '60px', width: 'auto' }} />
                    <h1 className="text-2xl md:text-3xl font-extrabold text-sky-900 tracking-wide -ml-2">
                        Firstchoice19travels
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="hover:text-black cursor-pointer text-black text-xl">Home</a>
                    <a href="#book-flights" className="hover:text-black cursor-pointer text-black text-xl">Book
                        Flights</a>

                    <a href="#services" className="hover:text-black cursor-pointer text-black text-xl">Services</a>
                    <a href="#destinations"
                       className="hover:text-black cursor-pointer text-black text-xl">Destination</a>
                    <a href="#testimonials"
                       className="hover:text-black cursor-pointer text-black text-xl">Testimonial</a>
                    <a href="#about" className="hover:text-black cursor-pointer text-black text-xl">About Us</a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                <button className="focus:outline-none" onClick={toggleMenu}>
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white">
                    <a href="#home" className="hover:text-black cursor-pointer text-black text-xl"
                       onClick={toggleMenu}>Home</a>
                    <a href="#book-flights" className="hover:text-black cursor-pointer text-black text-xl"
                       onClick={toggleMenu}>Book Flights</a>
                    <a href="#services" className="hover:text-black cursor-pointer text-black text-xl"
                       onClick={toggleMenu}>Services</a>
                    <a href="#destinations" className="hover:text-black cursor-pointer text-black text-xl"
                       onClick={toggleMenu}>Destination</a>
                    <a href="#testimonials" className="hover:text-black cursor-pointer text-black text-xl"
                       onClick={toggleMenu}>Testimonial</a>
                    <a href="#about" className="hover:text-black cursor-pointer text-black text-xl"
                       onClick={toggleMenu}>About Us</a>

                </div>
            )}
        </nav>
    );
};

export default Navbar;