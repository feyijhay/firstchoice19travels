import React from 'react';
import logo from "../../asset/images/logo1.jpg";
import { FaWhatsapp, FaTiktok, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full bg-white text-black py-10 px-4 md:px-20 border-t border-gray-300'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>

                    {/* Logo + Company */}
                    <div className='flex flex-col'>
                        <div className="flex items-center">
                            <img src={logo} alt="Logo" className="h-10 w-auto"/>
                            <span className='text-base text-sky-900 md:text-lg font-bold ml-2'>
                                Firstchoice19travels
                            </span>
                        </div>
                        <p className='text-sm mt-2'>
                            © 2025 Firstchoice19Travels. All rights reserved.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className='flex flex-col space-y-3 text-left'>
                        <h3 className="font-bold text-sky-900">Contact Info</h3>
                        <div className="flex items-center space-x-2">
                            <FaWhatsapp className="text-green-500 w-5 h-5"/>
                            <a href="https://wa.me/2349081601321" className="hover:underline" target="_blank"
                               rel="noopener noreferrer">
                                090 8160 1321
                            </a>
                        </div>
                        <p>📞 070 3632 3199</p>
                        <p>
                            📧 <a href="mailto:firstchoice19travels@gmail.com"
                                 className="hover:underline">firstchoice19travels@gmail.com</a>
                        </p>
                        <div className="flex items-center space-x-2">
                            <FaInstagram className="text-black w-5 h-5"/>
                            <a href="https://instagram.com/Firstchoice19travels" className="hover:underline"
                               target="_blank" rel="noopener noreferrer">
                                Firstchoice19travels
                            </a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaTiktok className="text-black w-5 h-5"/>
                            <a href="https://www.tiktok.com/@Firstchoice19_travels" className="hover:underline"
                               target="_blank" rel="noopener noreferrer">
                                Firstchoice19_travels
                            </a>
                        </div>
                    </div>

                    {/* Office Address */}
                    <div className='flex flex-col space-y-3 text-left'>
                        <h3 className="font-bold text-sky-900">Office Address</h3>
                        <div className="flex items-start space-x-2">
                            <FaMapMarkerAlt className="text-red-500 w-5 h-5 mt-1"/>
                            <p className="text-sm">
                                Shop 8, Jesus Plaza, Boys Town Bus Stop,<br/> Ipaja, Lagos.npm
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='flex flex-col'>
                        <h3 className="text-xl font-semibold text-sky-600 mb-4 text-left md:text-right">
                            Get In Touch With Us!
                        </h3>
                        <form
                            action="https://formspree.io/f/xovdzbaw"
                            method="POST"
                            className="flex flex-col space-y-3"
                        >
                            <input type="text" name="name" placeholder="Your Name" required
                                   className="p-2 border border-gray-300 rounded"/>
                            <input type="email" name="email" placeholder="Your Email" required
                                   className="p-2 border border-gray-300 rounded"/>
                            <textarea name="message" placeholder="Your Message" rows="1" required
                                      className="p-2 border border-gray-300 rounded resize-none"/>
                            <button type="submit"
                                    className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700 self-end">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
