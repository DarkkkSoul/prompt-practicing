import React from 'react';
import { Heart, Globe, Users, Award, Shield, Clock, Compass, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion for Excellence',
      description: 'We live and breathe travel, dedicating ourselves to creating extraordinary experiences that exceed expectations.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Expertise',
      description: 'With extensive knowledge of destinations worldwide, we provide authentic local insights and exclusive access.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Personalized Service',
      description: 'Every traveler is unique, and we tailor each journey to match your individual dreams and preferences.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Safety',
      description: 'Your safety and peace of mind are our top priorities, with comprehensive support throughout your journey.'
    }
  ];

  const milestones = [
    { year: '2014', event: 'WanderLux Founded', description: 'Started with a vision to revolutionize luxury travel' },
    { year: '2016', event: 'Global Expansion', description: 'Expanded to serve 50+ countries worldwide' },
    { year: '2018', event: 'Award Recognition', description: 'Won "Best Luxury Travel Agency" award' },
    { year: '2020', event: 'Digital Innovation', description: 'Launched virtual travel planning platform' },
    { year: '2022', event: 'Sustainability Focus', description: 'Committed to carbon-neutral travel options' },
    { year: '2024', event: '75K+ Travelers', description: 'Reached milestone of serving 75,000+ happy travelers' }
  ];

  const team = [
    {
      name: 'Alexandra Sterling',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former luxury hotel executive with 20+ years in hospitality'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Travel industry veteran specializing in premium experiences'
    },
    {
      name: 'Sophie Chen',
      role: 'Chief Experience Officer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Expert in cultural immersion and authentic travel experiences'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> WanderLux</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your gateway to extraordinary adventures and unforgettable memories since 2014
          </p>
        </div>

        {/* Hero Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting Dreams Into Reality
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2014 by travel enthusiast Alexandra Sterling, WanderLux was born from a simple belief:
              that travel should be transformative, not just transactional. After years of experiencing
              cookie-cutter travel packages, Alexandra envisioned a company that would craft personalized
              journeys as unique as the travelers themselves.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, WanderLux stands as a premier luxury travel company, having curated over 75,000
              extraordinary journeys across 180+ countries. We don't just plan trips; we create
              life-changing experiences that connect you with the world's most incredible destinations,
              cultures, and moments.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold">
                Award Winning Service
              </div>
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold">
                Sustainable Tourism Leader
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold">
                24/7 Global Support
              </div>
            </div>
          </div>

          <div className="relative animate-on-scroll">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="WanderLux team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">10+</div>
                <div className="text-gray-600 text-sm">Years of Excellence</div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-1">75K+</div>
                <div className="text-gray-600 text-sm">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-on-scroll">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll stagger-${index + 1}`}
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-on-scroll">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-on-scroll stagger-${(index % 6) + 1}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">{milestone.year}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{milestone.event}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-on-scroll">Meet Our Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll stagger-${index + 1}`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-purple-100"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-white animate-on-scroll">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">WanderLux by the Numbers</h3>
            <p className="text-purple-100 text-lg">A decade of creating extraordinary travel experiences</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">180+</div>
              <div className="text-purple-100">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">75K+</div>
              <div className="text-purple-100">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-purple-100">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Global Support</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <Compass className="w-12 h-12 text-purple-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              "To inspire and enable transformative travel experiences that connect people with the world's
              most extraordinary destinations, cultures, and moments. We believe that travel has the power
              to broaden perspectives, create lasting memories, and foster a deeper understanding of our
              beautiful, diverse planet."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;