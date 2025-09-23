import React from 'react';
import { Compass, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'About Us',
    'Destinations',
    'Travel Packages',
    'Special Offers',
    'Reviews',
    'Blog',
    'Careers',
    'Press'
  ];

  const destinations = [
    'Europe Tours',
    'Asian Adventures',
    'African Safaris',
    'South America',
    'North America',
    'Australia & Oceania',
    'Middle East',
    'Antarctica'
  ];

  const support = [
    'Help Center',
    'Travel Insurance',
    'Booking Terms',
    'Privacy Policy',
    'Cookie Policy',
    'Accessibility',
    'Site Map',
    'Contact Us'
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook', color: 'hover:text-blue-500' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter', color: 'hover:text-sky-500' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram', color: 'hover:text-pink-500' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', name: 'YouTube', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold">WanderLux</span>
                <p className="text-purple-300 text-sm -mt-1">Premium Travel Experiences</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted luxury travel partner since 2014. We create extraordinary journeys 
              that transform wanderlust into unforgettable memories. From hidden gems to iconic 
              landmarks, we craft personalized experiences that exceed expectations.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">hello@wanderlux.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">+1 (555) 123-WANDER</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-300">123 Fifth Avenue, New York, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group text-sm"
                  >
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Destinations</h3>
            <ul className="space-y-3">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <a
                    href="#destinations"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group text-sm"
                  >
                    {destination}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group text-sm"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-12 mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive travel deals, destination insights, and insider tips 
              delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center max-w-lg mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold mb-4 text-white">Awards & Recognition</h4>
            <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-400 text-sm">
              <span>Travel + Leisure World's Best 2024</span>
              <span>•</span>
              <span>Conde Nast Traveler Readers' Choice</span>
              <span>•</span>
              <span>TripAdvisor Travelers' Choice</span>
              <span>•</span>
              <span>World Travel Awards Winner</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© 2024 WanderLux. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with love for travelers</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;