import React from 'react';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      date: 'February 2024',
      destination: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      review: 'WanderLux exceeded all my expectations! The Santorini trip was absolutely magical. Every detail was perfectly planned, from the luxury accommodation to the private sunset dinner. The local guide was incredibly knowledgeable and showed us hidden gems we never would have found on our own.',
      tripHighlight: 'Private sunset yacht cruise'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Singapore',
      rating: 5,
      date: 'January 2024',
      destination: 'Machu Picchu, Peru',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      review: 'The Inca Trail adventure was life-changing! WanderLux handled everything flawlessly - from the permits to the professional guides. The sunrise at Machu Picchu was breathtaking. The small group size made it feel very personal and exclusive.',
      tripHighlight: 'Sunrise at Machu Picchu'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'Madrid, Spain',
      rating: 5,
      date: 'March 2024',
      destination: 'Maldives',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      review: 'Our honeymoon in the Maldives was pure paradise! The overwater villa was stunning, and the service was impeccable. WanderLux arranged romantic dinners, spa treatments, and even a dolphin watching excursion. It was the perfect romantic getaway.',
      tripHighlight: 'Overwater villa with glass floor'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'London, UK',
      rating: 5,
      date: 'December 2023',
      destination: 'Iceland',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      review: 'Iceland in winter was absolutely spectacular! WanderLux organized the perfect Northern Lights tour, and we were lucky enough to see them on three different nights. The Blue Lagoon spa experience and glacier hiking were unforgettable.',
      tripHighlight: 'Northern Lights photography tour'
    },
    {
      id: 5,
      name: 'Lisa Park',
      location: 'Seoul, South Korea',
      rating: 5,
      date: 'November 2023',
      destination: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      review: 'Bali was a perfect blend of culture, relaxation, and adventure. The temple tours were fascinating, the cooking class was so much fun, and the spa treatments were heavenly. WanderLux really knows how to create authentic experiences.',
      tripHighlight: 'Traditional Balinese cooking class'
    },
    {
      id: 6,
      name: 'James Wilson',
      location: 'Toronto, Canada',
      rating: 5,
      date: 'October 2023',
      destination: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      review: 'Tokyo was an incredible cultural immersion! From the traditional tea ceremony to the sushi making class, every experience was authentic and memorable. The cherry blossom viewing was the highlight of our trip.',
      tripHighlight: 'Private tea ceremony experience'
    }
  ];

  const stats = [
    { number: '4.9/5', label: 'Average Rating' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '15,000+', label: 'Reviews' },
    { number: '95%', label: 'Repeat Customers' }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Travelers
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real travelers who have experienced the magic of WanderLux
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-on-scroll">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 animate-on-scroll stagger-${(index % 6) + 1}`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{review.location}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center text-sm text-purple-600 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{review.date} • {review.destination}</span>
                </div>
                <div className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full inline-block mb-3">
                  {review.tripHighlight}
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-purple-200" />
                <p className="text-gray-600 text-sm leading-relaxed pl-6">
                  {review.review}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-center text-white animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6">Trusted by Travelers Worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Star className="w-8 h-8" />
              </div>
              <div className="text-sm">TripAdvisor Excellence</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Quote className="w-8 h-8" />
              </div>
              <div className="text-sm">Google Reviews 4.9★</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="text-sm">Travel + Leisure Award</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="text-sm">Conde Nast Recommended</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Your Own Story?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers and let us create an unforgettable journey just for you.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Start Planning Your Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;