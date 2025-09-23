import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
   useEffect(() => {
      // Hero animations
      gsap.fromTo('.hero-title',
         { opacity: 0, y: 100 },
         { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      )

      gsap.fromTo('.hero-subtitle',
         { opacity: 0, y: 50 },
         { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      )

      gsap.fromTo('.hero-cta',
         { opacity: 0, scale: 0.8 },
         { opacity: 1, scale: 1, duration: 0.8, delay: 0.6, ease: 'back.out(1.7)' }
      )

      // Features animation
      gsap.fromTo('.feature-card',
         { opacity: 0, y: 80 },
         {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
               trigger: '.features-section',
               start: 'top 80%',
               end: 'bottom 20%',
               toggleActions: 'play none none reverse'
            }
         }
      )

      // Stats animation
      gsap.fromTo('.stat-item',
         { opacity: 0, scale: 0.5 },
         {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
               trigger: '.stats-section',
               start: 'top 80%',
               end: 'bottom 20%',
               toggleActions: 'play none none reverse'
            }
         }
      )

      // Gallery animation
      gsap.fromTo('.gallery-item',
         { opacity: 0, scale: 0.8 },
         {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
               trigger: '.gallery-item',
               start: 'top 90%',
               end: 'bottom 10%',
               toggleActions: 'play none none reverse'
            }
         }
      )
   }, [])

   const features = [
      {
         title: 'Fresh Ingredients',
         description: 'We source the finest, freshest ingredients from local farms and trusted suppliers.',
         icon: '🌿',
         image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
         title: 'Expert Chefs',
         description: 'Our culinary team brings years of experience and passion to every dish.',
         icon: '👨‍🍳',
         image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
         title: 'Cozy Atmosphere',
         description: 'Enjoy your meal in our warm, welcoming environment perfect for any occasion.',
         icon: '🏠',
         image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
   ]

   const stats = [
      { number: '500+', label: 'Happy Customers' },
      { number: '50+', label: 'Signature Dishes' },
      { number: '5', label: 'Years Experience' },
      { number: '4.9', label: 'Average Rating' }
   ]

   return (
      <div className="min-h-screen">
         {/* Hero Section */}
         <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            <div
               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
               style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
               }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
               <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
                  Welcome to <span className="text-teal-200">Savouria</span>
               </h1>
               <p className="hero-subtitle text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  Where culinary artistry meets exceptional hospitality. Experience flavors that tell a story.
               </p>
               <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                     to="/menu"
                     className="bg-white text-teal-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105"
                  >
                     View Our Menu
                  </Link>
                  <Link
                     to="/reservations"
                     className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-teal-700 transition-all duration-300 transform hover:scale-105"
                  >
                     Make Reservation
                  </Link>
               </div>
            </div>
         </section>

         {/* Features Section */}
         <section className="features-section py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold gradient-text mb-4">Why Choose Savouria?</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                     We're committed to providing an exceptional dining experience through quality, service, and atmosphere.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                     <div key={index} className="feature-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${feature.image}')` }}></div>
                        <div className="p-8">
                           <div className="text-4xl mb-4">{feature.icon}</div>
                           <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                           <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Stats Section */}
         <section className="stats-section py-20 gradient-bg text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                     <div key={index} className="stat-item text-center">
                        <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                        <div className="text-lg text-teal-100">{stat.label}</div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Gallery Section */}
         <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold gradient-text mb-4">Experience Savouria</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                     Take a glimpse into our culinary world and the memorable moments we create.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="gallery-item col-span-1 lg:col-span-2 row-span-2">
                     <img
                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Signature dish"
                        className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                     />
                  </div>
                  <div className="gallery-item">
                     <img
                        src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="Restaurant interior"
                        className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                     />
                  </div>
                  <div className="gallery-item">
                     <img
                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="Wine selection"
                        className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                     />
                  </div>
                  <div className="gallery-item">
                     <img
                        src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="Dessert presentation"
                        className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                     />
                  </div>
                  <div className="gallery-item">
                     <img
                        src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="Chef preparing food"
                        className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
               <h2 className="text-4xl font-bold gradient-text mb-6">Ready for an Unforgettable Experience?</h2>
               <p className="text-xl text-gray-600 mb-8">
                  Join us for a culinary journey that will delight your senses and create lasting memories.
               </p>
               <Link
                  to="/reservations"
                  className="inline-block bg-teal-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
               >
                  Book Your Table Now
               </Link>
            </div>
         </section>
      </div>
   )
}

export default Home