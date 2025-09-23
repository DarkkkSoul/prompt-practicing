import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Reservations = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      occasion: '',
      requests: ''
   })

   useEffect(() => {
      gsap.fromTo('.reservation-header',
         { opacity: 0, y: -50 },
         { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )

      gsap.fromTo('.reservation-form',
         { opacity: 0, x: -50 },
         { opacity: 1, x: 0, duration: 0.8, delay: 0.3 }
      )

      gsap.fromTo('.info-card',
         { opacity: 0, x: 50 },
         { opacity: 1, x: 0, duration: 0.8, delay: 0.5 }
      )
   }, [])

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      // Here you would typically send the data to your backend
      console.log('Reservation submitted:', formData)
      alert('Thank you! Your reservation request has been submitted. We will contact you shortly to confirm.')

      // Reset form
      setFormData({
         name: '',
         email: '',
         phone: '',
         date: '',
         time: '',
         guests: '2',
         occasion: '',
         requests: ''
      })
   }

   const timeSlots = [
      '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
      '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
   ]

   const occasions = [
      'Birthday', 'Anniversary', 'Date Night', 'Business Dinner',
      'Family Gathering', 'Celebration', 'Other'
   ]

   return (
      <div className="min-h-screen pt-16">
         {/* Header */}
         <section className="relative py-20 text-white overflow-hidden">
            <div
               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
               style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
               }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h1 className="reservation-header text-5xl md:text-6xl font-bold mb-6">Make a Reservation</h1>
               <p className="reservation-header text-xl md:text-2xl max-w-3xl mx-auto">
                  Reserve your table for an exceptional dining experience. We look forward to serving you.
               </p>
            </div>
         </section>

         {/* Reservation Form */}
         <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Form */}
                  <div className="reservation-form">
                     <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-bold gradient-text mb-8">Reservation Details</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name *
                                 </label>
                                 <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your full name"
                                 />
                              </div>

                              <div>
                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                 </label>
                                 <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your email"
                                 />
                              </div>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number *
                                 </label>
                                 <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your phone number"
                                 />
                              </div>

                              <div>
                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Number of Guests *
                                 </label>
                                 <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                                 >
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                       <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                    ))}
                                    <option value="9+">9+ Guests</option>
                                 </select>
                              </div>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Preferred Date *
                                 </label>
                                 <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                                 />
                              </div>

                              <div>
                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Preferred Time *
                                 </label>
                                 <select
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                                 >
                                    <option value="">Select a time</option>
                                    {timeSlots.map(time => (
                                       <option key={time} value={time}>{time}</option>
                                    ))}
                                 </select>
                              </div>
                           </div>

                           <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                 Special Occasion
                              </label>
                              <select
                                 name="occasion"
                                 value={formData.occasion}
                                 onChange={handleChange}
                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                              >
                                 <option value="">Select an occasion (optional)</option>
                                 {occasions.map(occasion => (
                                    <option key={occasion} value={occasion}>{occasion}</option>
                                 ))}
                              </select>
                           </div>

                           <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                 Special Requests
                              </label>
                              <textarea
                                 name="requests"
                                 value={formData.requests}
                                 onChange={handleChange}
                                 rows="4"
                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                                 placeholder="Any dietary restrictions, seating preferences, or special requests..."
                              ></textarea>
                           </div>

                           <button
                              type="submit"
                              className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                           >
                              Submit Reservation Request
                           </button>
                        </form>
                     </div>
                  </div>

                  {/* Info Cards */}
                  <div className="info-card space-y-8">
                     <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold gradient-text mb-6">Restaurant Hours</h3>
                        <div className="space-y-3">
                           <div className="flex justify-between">
                              <span className="font-semibold">Monday - Thursday</span>
                              <span>5:00 PM - 10:00 PM</span>
                           </div>
                           <div className="flex justify-between">
                              <span className="font-semibold">Friday - Saturday</span>
                              <span>5:00 PM - 11:00 PM</span>
                           </div>
                           <div className="flex justify-between">
                              <span className="font-semibold">Sunday</span>
                              <span>5:00 PM - 9:00 PM</span>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold gradient-text mb-6">Contact Information</h3>
                        <div className="space-y-4">
                           <div className="flex items-center gap-3">
                              <span className="text-teal-600">📍</span>
                              <span>123 Culinary Street, Food District, FD 12345</span>
                           </div>
                           <div className="flex items-center gap-3">
                              <span className="text-teal-600">📞</span>
                              <span>(555) 123-4567</span>
                           </div>
                           <div className="flex items-center gap-3">
                              <span className="text-teal-600">✉️</span>
                              <span>reservations@savouria.com</span>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold gradient-text mb-6">Reservation Policy</h3>
                        <ul className="space-y-3 text-gray-600">
                           <li>• Reservations are recommended, especially for weekends</li>
                           <li>• Please arrive within 15 minutes of your reservation time</li>
                           <li>• For parties of 8 or more, please call us directly</li>
                           <li>• Cancellations should be made at least 2 hours in advance</li>
                           <li>• We accommodate dietary restrictions with advance notice</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Reservations