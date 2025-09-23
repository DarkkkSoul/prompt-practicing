import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Globe } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      info: '+1 (555) 123-WANDER',
      subInfo: 'Available 24/7 for emergencies',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      info: 'hello@wanderlux.com',
      subInfo: 'Response within 2 hours',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      info: 'Chat with our experts',
      subInfo: 'Available 9 AM - 9 PM EST',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Book Consultation',
      info: 'Free 30-min session',
      subInfo: 'Personalized travel planning',
      color: 'from-violet-500 to-violet-600'
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Fifth Avenue, Suite 1500',
      zipCode: 'New York, NY 10001',
      phone: '+1 (555) 123-4567',
      hours: '9 AM - 7 PM EST'
    },
    {
      city: 'Los Angeles',
      address: '456 Sunset Boulevard, Floor 12',
      zipCode: 'Los Angeles, CA 90028',
      phone: '+1 (555) 987-6543',
      hours: '9 AM - 7 PM PST'
    },
    {
      city: 'London',
      address: '789 Oxford Street, Suite 300',
      zipCode: 'London W1C 1JN, UK',
      phone: '+44 20 7123 4567',
      hours: '9 AM - 6 PM GMT'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start planning your dream vacation? Our travel experts are here to help you every step of the way
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-on-scroll stagger-${index + 1}`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${method.color} text-white mb-4`}>
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-purple-600 font-semibold mb-1">{method.info}</p>
              <p className="text-gray-500 text-sm">{method.subInfo}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Select a destination</option>
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>Africa</option>
                    <option>South America</option>
                    <option>North America</option>
                    <option>Australia & Oceania</option>
                    <option>Multiple Destinations</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your dream vacation..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Offices</h3>
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{office.city} Office</h4>
                      <p className="text-gray-600 mb-1">{office.address}</p>
                      <p className="text-gray-600 mb-3">{office.zipCode}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1 text-purple-600">
                          <Phone className="w-4 h-4" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-2xl border border-red-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <Globe className="w-5 h-5 text-red-500 mr-2" />
                24/7 Emergency Support
              </h4>
              <p className="text-gray-600 mb-3">
                Traveling and need immediate assistance? Our emergency hotline is available around the clock.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-red-600 font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 911-HELP</span>
                </div>
                <div className="text-gray-500 text-sm">Available worldwide</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 sm:p-12 animate-on-scroll">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How far in advance should I book?</h4>
              <p className="text-gray-600 text-sm mb-4">We recommend booking 3-6 months in advance for the best availability and rates, especially for peak season travel.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer travel insurance?</h4>
              <p className="text-gray-600 text-sm mb-4">Yes, we provide comprehensive travel insurance options to protect your investment and give you peace of mind.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can you accommodate special dietary needs?</h4>
              <p className="text-gray-600 text-sm mb-4">Absolutely! We work with our partners to ensure all dietary restrictions and preferences are accommodated.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What if I need to cancel my trip?</h4>
              <p className="text-gray-600 text-sm mb-4">Our flexible cancellation policies vary by destination and package. We'll work with you to find the best solution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;