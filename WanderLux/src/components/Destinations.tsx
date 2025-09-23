import React from 'react';
import { MapPin, Clock, Users, Star, Camera, Mountain, Waves } from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg',
      rating: 4.9,
      price: '$2,499',
      duration: '7 Days',
      groupSize: '12 People',
      description: 'Experience the magic of Santorini with its iconic blue-domed churches and breathtaking sunsets.',
      highlights: ['Oia Village Sunset', 'Wine Tasting Tours', 'Volcanic Beach Exploration', 'Traditional Greek Cuisine', 'Luxury Accommodation'],
      category: 'Romantic',
      icon: <Waves className="w-5 h-5" />
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      price: '$1,899',
      duration: '10 Days',
      groupSize: '15 People',
      description: 'Discover the spiritual heart of Indonesia with ancient temples, lush rice terraces, and pristine beaches.',
      highlights: ['Ubud Rice Terraces', 'Temple Hopping', 'Balinese Cooking Class', 'Beach Club Experience', 'Spa & Wellness'],
      category: 'Cultural',
      icon: <Mountain className="w-5 h-5" />
    },
    {
      id: 3,
      name: 'Machu Picchu, Peru',
      image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      price: '$3,299',
      duration: '8 Days',
      groupSize: '10 People',
      description: 'Trek through the ancient Inca Trail to reach the mystical lost city of Machu Picchu.',
      highlights: ['Inca Trail Hiking', 'Machu Picchu Sunrise', 'Sacred Valley Tour', 'Local Market Visit', 'Cusco City Exploration'],
      category: 'Adventure',
      icon: <Mountain className="w-5 h-5" />
    },
    {
      id: 4,
      name: 'Maldives Paradise',
      image: 'https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      price: '$4,599',
      duration: '6 Days',
      groupSize: '8 People',
      description: 'Indulge in luxury at overwater villas surrounded by crystal-clear turquoise waters.',
      highlights: ['Overwater Villa Stay', 'Snorkeling & Diving', 'Dolphin Watching', 'Spa Treatments', 'Private Beach Dining'],
      category: 'Luxury',
      icon: <Waves className="w-5 h-5" />
    },
    {
      id: 5,
      name: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      price: '$2,899',
      duration: '9 Days',
      groupSize: '12 People',
      description: 'Immerse yourself in the perfect blend of ancient traditions and cutting-edge technology.',
      highlights: ['Tokyo Skytree Visit', 'Traditional Tea Ceremony', 'Sushi Making Class', 'Cherry Blossom Viewing', 'Shibuya Crossing'],
      category: 'Cultural',
      icon: <Camera className="w-5 h-5" />
    },
    {
      id: 6,
      name: 'Iceland Adventure',
      image: 'https://images.pexels.com/photos/1123972/pexels-photo-1123972.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      price: '$3,799',
      duration: '12 Days',
      groupSize: '14 People',
      description: 'Explore the land of fire and ice with dramatic waterfalls, geysers, and Northern Lights.',
      highlights: ['Northern Lights Hunt', 'Blue Lagoon Spa', 'Golden Circle Tour', 'Glacier Hiking', 'Volcanic Landscapes'],
      category: 'Adventure',
      icon: <Mountain className="w-5 h-5" />
    },
    {
      id: 7,
      name: 'Dubai Luxury',
      image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      price: '$3,199',
      duration: '6 Days',
      groupSize: '10 People',
      description: 'Experience the epitome of luxury in the dazzling city of gold and innovation.',
      highlights: ['Burj Khalifa Visit', 'Desert Safari', 'Luxury Shopping', 'Fine Dining', 'Yacht Cruise'],
      category: 'Luxury',
      icon: <Camera className="w-5 h-5" />
    },
    {
      id: 8,
      name: 'Swiss Alps',
      image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      price: '$4,199',
      duration: '10 Days',
      groupSize: '12 People',
      description: 'Breathe in the crisp mountain air while exploring picturesque villages and pristine lakes.',
      highlights: ['Jungfraujoch Railway', 'Lake Geneva Cruise', 'Alpine Hiking', 'Swiss Chocolate Tour', 'Mountain Villages'],
      category: 'Adventure',
      icon: <Mountain className="w-5 h-5" />
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Handpicked
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated collection of breathtaking destinations, each offering unique experiences and unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer animate-on-scroll stagger-${(index % 6) + 1}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">{destination.rating}</span>
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-3 py-1 text-sm font-semibold flex items-center space-x-1">
                  {destination.icon}
                  <span>{destination.category}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white rounded-lg px-3 py-1 text-sm">
                  {destination.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{destination.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{destination.groupSize}</span>
                    </div>
                  </div>

                  <div className="border-t pt-3">
                    <p className="text-xs text-gray-500 mb-2">Trip Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">{destination.price}</span>
                    <span className="text-gray-500 text-sm ml-1">per person</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;