import React from 'react';
import { FaLinkedin, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-t border-gray-300 text-white bg-[#121212] bg-opacity-100bg-gray-900 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Branding */}
        <div className='text-xl md:text-xl text-orange-400 font-semibold font-serif'>
          NormaWeb
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 my-4 md:my-0">
          <a
            href="www.linkedin.com/in/blessingokwong"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={50} />
          </a>
          <a
            href="https://www.facebook.com/share/1AZw8p4BTT/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebook size={50} />
          </a>
          <a
            href="https://wa.me/+2347014236712"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-gray-400 hover:text-white"
          >
            <FaWhatsapp size={50} />
          </a>
          <a
            href="https://www.instagram.com/okwongnorma/profilecard/?igsh=MWlxMDllaXZ0dGlvMw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={50} />
          </a>
        </div>

        {/* Copyright Info */}
        <div className="text-sm text-white">
          © {currentYear} NormaWeb. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
