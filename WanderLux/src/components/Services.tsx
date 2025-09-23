import React from 'react';
import { Plane, Shield, MapPin, Users, Clock, Award, Camera, Utensils, Car, Hotel } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Flight Booking',
      description: 'Best flight deals with our exclusive airline partnerships and flexible booking options.',
      features: ['24/7 Flight Support', 'Price Match Guarantee', 'Flexible Cancellation']
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: 'Luxury Accommodations',
      description: 'Handpicked hotels, resorts, and unique stays that exceed your expectations.',
      features: ['5-Star Properties', 'Room Upgrades', 'VIP Check-in']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Travel Insurance',
      description: 'Comprehensive protection for your journey with worldwide coverage.',
      features: ['Medical Coverage', 'Trip Cancellation', 'Lost Baggage Protection']
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Expert Local Guides',
      description: 'Professional guides who reveal hidden gems and authentic local experiences.',
      features: ['Certified Guides', 'Local Insights', 'Cultural Immersion']
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Premium Transportation',
      description: 'Comfortable and reliable transportation for all your travel needs.',
      features: ['Private Transfers', 'Luxury Vehicles', 'Professional Drivers']
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photography Services',
      description: 'Professional photographers to capture your precious travel memories.',
      features: ['Professional Photos', 'Drone Photography', 'Same-day Delivery']
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Culinary Experiences',
      description: 'Authentic food tours and cooking classes with renowned local chefs.',
      features: ['Food Tours', 'Cooking Classes', 'Wine Tastings']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Group & Private Tours',
      description: 'Customized tours for couples, families, and groups of all sizes.',
      features: ['Small Groups', 'Private Tours', 'Custom Itineraries']
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Concierge',
      description: 'Round-the-clock support and assistance wherever you are in the world.',
      features: ['Emergency Support', 'Booking Changes', 'Local Recommendations']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'VIP Experiences',
      description: 'Exclusive access to premium experiences and luxury amenities.',
      features: ['Skip-the-line Access', 'Private Events', 'Luxury Amenities']
    }
  ];

  const stats = [
    { number: '180+', label: 'Countries Covered', color: 'from-purple-500 to-purple-600' },
    { number: '75K+', label: 'Happy Travelers', color: 'from-pink-500 to-pink-600' },
    { number: '15+', label: 'Years Experience', color: 'from-indigo-500 to-indigo-600' },
    { number: '24/7', label: 'Customer Support', color: 'from-violet-500 to-violet-600' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Premium Travel 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for the perfect luxury travel experience, crafted with attention to every detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 animate-on-scroll stagger-${(index % 6) + 1}`}
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <ul className="space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-purple-600 flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 animate-on-scroll">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Why Choose WanderLux?</h3>
            <p className="text-purple-100 text-lg">Trusted by thousands of travelers worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold text-white mb-2 bg-gradient-to-r ${stat.color} bg-clip-text`}>
                  {stat.number}
                </div>
                <div className="text-purple-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-on-scroll">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our travel experts create a personalized itinerary that matches your dreams and exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Plan My Trip
            </button>
            <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold rounded-xl transition-all duration-300">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;