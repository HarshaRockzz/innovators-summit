import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-violet-950 text-gray-300 p-8 mt-12" role="contentinfo">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold text-white">Innovators' Summit 2024</h2>
          <p className="mt-4 text-sm">
            Join us for an inspiring journey at the Innovators' Summit: Igniting Entrepreneurship & Innovation. 
            Learn from industry leaders, participate in interactive sessions, and connect with future innovators and entrepreneurs.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#schedule" className="hover:text-white">Schedule</a></li>
            <li><a href="#news" className="hover:text-white">News</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Follow Us</h3>
          <div className="mt-4 flex space-x-4">
            <a href="https://x.com/Iiits_Ecell" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ecell-iiit-sricity/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/ecell.iiits/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; 2024 Innovators' Summit. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
