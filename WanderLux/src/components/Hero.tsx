import React from 'react';
import { Search, MapPin, Star, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 pb-10">

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/80 to-pink-900/90 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Beautiful landscape"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Discover Your Next
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
              Dream Destination
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
            Embark on extraordinary journeys with WanderLux. We craft personalized travel experiences
            that transform your wanderlust into unforgettable memories.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in-up stagger-3">
            <div className="flex items-center space-x-2 text-white">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Users className="w-5 h-5 text-purple-300" />
              <span className="font-semibold">50K+ Happy Travelers</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Award className="w-5 h-5 text-pink-300" />
              <span className="font-semibold">Award Winning Service</span>
            </div>
          </div>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto animate-fade-in-up stagger-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20">
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1 w-full">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Where would you like to explore?"
                      className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Explore Now</span>
                </button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12 animate-fade-in-up stagger-5">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              View Destinations
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
              Watch Our Story
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-purple-400/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>

    </section>
  );
};

export default Hero;