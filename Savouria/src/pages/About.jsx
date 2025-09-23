import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
   useEffect(() => {
      gsap.fromTo('.about-header',
         { opacity: 0, y: -50 },
         { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )

      gsap.fromTo('.story-content',
         { opacity: 0, x: -50 },
         { opacity: 1, x: 0, duration: 0.8, delay: 0.3 }
      )

      gsap.fromTo('.story-image',
         { opacity: 0, x: 50 },
         { opacity: 1, x: 0, duration: 0.8, delay: 0.5 }
      )

      gsap.fromTo('.team-member',
         { opacity: 0, y: 50 },
         {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            scrollTrigger: {
               trigger: '.team-section',
               start: 'top 80%',
               end: 'bottom 20%',
               toggleActions: 'play none none reverse'
            }
         }
      )

      gsap.fromTo('.value-item',
         { opacity: 0, scale: 0.8 },
         {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
               trigger: '.values-section',
               start: 'top 80%',
               end: 'bottom 20%',
               toggleActions: 'play none none reverse'
            }
         }
      )
   }, [])

   const teamMembers = [
      {
         name: 'Chef Marcus Rodriguez',
         role: 'Executive Chef',
         description: 'With over 15 years of culinary experience, Chef Marcus brings innovative techniques and passion to every dish.',
         image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
         name: 'Isabella Chen',
         role: 'Pastry Chef',
         description: 'Isabella creates our exquisite desserts, combining traditional techniques with modern artistry.',
         image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
         name: 'James Thompson',
         role: 'Sommelier',
         description: 'James curates our wine selection and creates perfect pairings for every meal.',
         image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
         name: 'Sofia Martinez',
         role: 'Restaurant Manager',
         description: 'Sofia ensures every guest receives exceptional service and has a memorable dining experience.',
         image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
   ]

   const values = [
      {
         title: 'Quality',
         description: 'We never compromise on the quality of our ingredients or preparation.',
         icon: '⭐'
      },
      {
         title: 'Sustainability',
         description: 'We source locally and practice environmentally responsible cooking.',
         icon: '🌱'
      },
      {
         title: 'Innovation',
         description: 'We constantly evolve our menu with creative and exciting new dishes.',
         icon: '💡'
      },
      {
         title: 'Community',
         description: 'We believe in bringing people together through exceptional food.',
         icon: '🤝'
      }
   ]

   return (
      <div className="min-h-screen pt-16">
         {/* Header */}
         <section className="relative py-20 text-white overflow-hidden">
            <div
               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
               style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
               }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h1 className="about-header text-5xl md:text-6xl font-bold mb-6">About Savouria</h1>
               <p className="about-header text-xl md:text-2xl max-w-3xl mx-auto">
                  Discover the story behind our passion for exceptional cuisine and unforgettable experiences.
               </p>
            </div>
         </section>

         {/* Our Story */}
         <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="story-content">
                     <h2 className="text-4xl font-bold gradient-text mb-6">Our Story</h2>
                     <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p>
                           Founded in 2019, Savouria began as a dream to create a dining destination where culinary artistry
                           meets warm hospitality. Our journey started with a simple belief: that exceptional food has the
                           power to bring people together and create lasting memories.
                        </p>
                        <p>
                           What sets us apart is our commitment to sourcing the finest ingredients from local farms and
                           trusted suppliers. Every dish is crafted with meticulous attention to detail, combining traditional
                           techniques with innovative approaches to create flavors that surprise and delight.
                        </p>
                        <p>
                           Today, Savouria stands as a testament to our dedication to excellence. We continue to evolve,
                           always striving to exceed expectations and provide our guests with an unforgettable culinary journey.
                        </p>
                     </div>
                  </div>
                  <div className="story-image">
                     <img
                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Restaurant interior"
                        className="w-full h-96 object-cover rounded-2xl shadow-lg"
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* Our Values */}
         <section className="values-section py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold gradient-text mb-4">Our Values</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                     The principles that guide everything we do at Savouria.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                     <div key={index} className="value-item bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-4xl mb-4">{value.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Our Team */}
         <section className="team-section py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold gradient-text mb-4">Meet Our Team</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                     The talented individuals who make Savouria's magic happen every day.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
                     <div key={index} className="team-member bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${member.image}')` }}></div>
                        <div className="p-6">
                           <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                           <p className="text-teal-600 font-semibold mb-3">{member.role}</p>
                           <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Location & Hours */}
         <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                     <h2 className="text-4xl font-bold gradient-text mb-8">Visit Us</h2>
                     <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="space-y-6">
                           <div>
                              <h3 className="text-xl font-bold text-gray-800 mb-3">Location</h3>
                              <p className="text-gray-600">
                                 123 Culinary Street<br />
                                 Food District, FD 12345<br />
                                 United States
                              </p>
                           </div>

                           <div>
                              <h3 className="text-xl font-bold text-gray-800 mb-3">Hours</h3>
                              <div className="space-y-2 text-gray-600">
                                 <div className="flex justify-between">
                                    <span>Monday - Thursday</span>
                                    <span>5:00 PM - 10:00 PM</span>
                                 </div>
                                 <div className="flex justify-between">
                                    <span>Friday - Saturday</span>
                                    <span>5:00 PM - 11:00 PM</span>
                                 </div>
                                 <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>5:00 PM - 9:00 PM</span>
                                 </div>
                              </div>
                           </div>

                           <div>
                              <h3 className="text-xl font-bold text-gray-800 mb-3">Contact</h3>
                              <div className="space-y-2 text-gray-600">
                                 <p>Phone: (555) 123-4567</p>
                                 <p>Email: info@savouria.com</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div>
                     <div className="h-96 bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
                        <img
                           src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                           alt="Restaurant exterior"
                           className="w-full h-full object-cover"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default About