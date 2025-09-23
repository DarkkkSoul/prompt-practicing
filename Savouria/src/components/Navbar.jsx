import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [scrolled, setScrolled] = useState(false)
   const location = useLocation()

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   useEffect(() => {
      gsap.fromTo('.nav-item',
         { opacity: 0, y: -20 },
         { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.2 }
      )
   }, [])

   const navItems = [
      { name: 'Home', path: '/' },
      { name: 'Menu', path: '/menu' },
      { name: 'Reservations', path: '/reservations' },
      { name: 'About', path: '/about' }
   ]

   return (
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
         }`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
               <Link to="/" className="nav-item">
                  <h1 className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'gradient-text' : 'text-white'
                     }`}>
                     Savouria
                  </h1>
               </Link>

               {/* Desktop Menu */}
               <div className="hidden md:flex space-x-8">
                  {navItems.map((item) => (
                     <Link
                        key={item.name}
                        to={item.path}
                        className={`nav-item px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${location.pathname === item.path
                              ? scrolled
                                 ? 'text-teal-600 bg-teal-50'
                                 : 'text-teal-200 bg-white/20'
                              : scrolled
                                 ? 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                                 : 'text-white hover:text-teal-200 hover:bg-white/10'
                           }`}
                     >
                        {item.name}
                     </Link>
                  ))}
               </div>

               {/* Mobile menu button */}
               <div className="md:hidden">
                  <button
                     onClick={() => setIsOpen(!isOpen)}
                     className={`nav-item p-2 rounded-md transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:bg-teal-50' : 'text-white hover:bg-white/10'
                        }`}
                  >
                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                     </svg>
                  </button>
               </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
               <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2">
                     {navItems.map((item) => (
                        <Link
                           key={item.name}
                           to={item.path}
                           onClick={() => setIsOpen(false)}
                           className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${location.pathname === item.path
                                 ? 'text-teal-600 bg-teal-50'
                                 : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                              }`}
                        >
                           {item.name}
                        </Link>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </nav>
   )
}

export default Navbar