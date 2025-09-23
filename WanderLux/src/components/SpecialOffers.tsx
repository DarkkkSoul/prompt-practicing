import React from 'react';
import { Percent, Clock, Gift, Zap, Calendar, Users } from 'lucide-react';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: 'Early Bird Special',
      discount: '30% OFF',
      description: 'Book 3 months in advance and save big on your dream vacation',
      destinations: ['Maldives', 'Santorini', 'Bali'],
      validUntil: 'March 31, 2024',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?auto=compress&cs=tinysrgb&w=400',
      originalPrice: '$4,599',
      salePrice: '$3,219'
    },
    {
      id: 2,
      title: 'Honeymoon Package',
      discount: '25% OFF',
      description: 'Romantic getaways with luxury accommodations and special amenities',
      destinations: ['Paris', 'Venice', 'Santorini'],
      validUntil: 'April 15, 2024',
      icon: <Gift className="w-6 h-6" />,
      color: 'from-pink-500 to-pink-600',
      image: 'https://images.pexels.com/photos/322035/pexels-photo-322035.jpeg',
      originalPrice: '$3,299',
      salePrice: '$2,474'
    },
    {
      id: 3,
      title: 'Group Adventure',
      discount: '20% OFF',
      description: 'Special rates for groups of 6 or more travelers',
      destinations: ['Iceland', 'Peru', 'Nepal'],
      validUntil: 'May 30, 2024',
      icon: <Users className="w-6 h-6" />,
      color: 'from-indigo-500 to-indigo-600',
      image: 'https://images.pexels.com/photos/33402445/pexels-photo-33402445.jpeg',
      originalPrice: '$3,799',
      salePrice: '$3,039'
    },
    {
      id: 4,
      title: 'Last Minute Deals',
      discount: '40% OFF',
      description: 'Amazing savings on departures within the next 30 days',
      destinations: ['Dubai', 'Tokyo', 'Thailand'],
      validUntil: 'Limited Time',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=400',
      originalPrice: '$2,899',
      salePrice: '$1,739'
    },
    {
      id: 5,
      title: 'Summer Escape',
      discount: '35% OFF',
      description: 'Beat the heat with our exclusive summer destinations',
      destinations: ['Norway', 'Alaska', 'Patagonia'],
      validUntil: 'June 30, 2024',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400',
      originalPrice: '$4,199',
      salePrice: '$2,729'
    },
    {
      id: 6,
      title: 'Cultural Explorer',
      discount: '28% OFF',
      description: 'Immerse yourself in rich cultures and ancient traditions',
      destinations: ['India', 'Morocco', 'Egypt'],
      validUntil: 'April 30, 2024',
      icon: <Percent className="w-6 h-6" />,
      color: 'from-violet-500 to-purple-500',
      image: 'https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=compress&cs=tinysrgb&w=400',
      originalPrice: '$2,599',
      salePrice: '$1,871'
    }
  ];

  return (
    <section id="offers" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Exclusive
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Special Offers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't miss out on these incredible deals! Limited time offers on our most popular destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden animate-on-scroll stagger-${(index % 6) + 1}`}
            >
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${offer.color} text-white rounded-full px-4 py-2 font-bold text-lg shadow-lg`}>
                  {offer.discount}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className={`text-purple-600`}>
                    {offer.icon}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{offer.description}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Available Destinations:</p>
                  <div className="flex flex-wrap gap-2">
                    {offer.destinations.map((dest, idx) => (
                      <span key={idx} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg text-gray-400 line-through">{offer.originalPrice}</span>
                    <span className="text-2xl font-bold text-purple-600 ml-2">{offer.salePrice}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">Valid Until:</span>
                    <span className="text-sm font-semibold text-red-600">{offer.validUntil}</span>
                  </div>
                  <button className={`w-full py-3 bg-gradient-to-r ${offer.color} hover:opacity-90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                    Claim This Offer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flash Sale Banner */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl p-8 text-center text-white animate-on-scroll animate-pulse-custom">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 mr-2" />
            <h3 className="text-3xl font-bold">Flash Sale Alert!</h3>
          </div>
          <p className="text-xl mb-6">48 Hours Only - Up to 50% OFF on Selected Destinations</p>
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold">23</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">45</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Shop Flash Sale Now
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Never Miss a Deal!</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive offers, flash sales, and new destinations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;