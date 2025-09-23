import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Menu = () => {
   const [activeCategory, setActiveCategory] = useState('appetizers')

   useEffect(() => {
      gsap.fromTo('.menu-header',
         { opacity: 0, y: -50 },
         { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )

      gsap.fromTo('.category-btn',
         { opacity: 0, x: -30 },
         { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, delay: 0.3 }
      )

      gsap.fromTo('.menu-item',
         { opacity: 0, y: 50 },
         {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
               trigger: '.menu-grid',
               start: 'top 80%',
               end: 'bottom 20%',
               toggleActions: 'play none none reverse'
            }
         }
      )
   }, [])

   const menuData = {
      appetizers: [
         {
            name: 'Truffle Arancini',
            description: 'Crispy risotto balls with truffle oil and parmesan',
            price: '$14',
            image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Seared Scallops',
            description: 'Pan-seared scallops with cauliflower puree',
            price: '$18',
            image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Burrata Caprese',
            description: 'Fresh burrata with heirloom tomatoes and basil',
            price: '$16',
            image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Tuna Tartare',
            description: 'Fresh tuna with avocado and citrus dressing',
            price: '$19',
            image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Oysters Rockefeller',
            description: 'Fresh oysters with spinach, herbs, and hollandaise',
            price: '$22',
            image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Foie Gras Terrine',
            description: 'House-made foie gras with brioche and fig compote',
            price: '$26',
            image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         }
      ],
      mains: [
         {
            name: 'Wagyu Beef Tenderloin',
            description: 'Grilled wagyu with roasted vegetables and red wine jus',
            price: '$45',
            image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Pan-Seared Salmon',
            description: 'Atlantic salmon with lemon herb butter and quinoa',
            price: '$28',
            image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Duck Confit',
            description: 'Slow-cooked duck leg with cherry gastrique',
            price: '$32',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Lobster Risotto',
            description: 'Creamy risotto with fresh lobster and saffron',
            price: '$38',
            image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Lamb Rack',
            description: 'Herb-crusted lamb with mint chimichurri',
            price: '$36',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Vegetarian Tasting',
            description: 'Seasonal vegetables with quinoa and tahini sauce',
            price: '$24',
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Sea Bass Fillet',
            description: 'Mediterranean sea bass with ratatouille and olive tapenade',
            price: '$34',
            image: 'https://images.unsplash.com/photo-1559847844-d5316462d8d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Osso Buco',
            description: 'Braised veal shank with saffron risotto and gremolata',
            price: '$42',
            image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         }
      ],
      desserts: [
         {
            name: 'Chocolate Soufflé',
            description: 'Dark chocolate soufflé with vanilla ice cream',
            price: '$12',
            image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Tiramisu',
            description: 'Classic Italian tiramisu with espresso and mascarpone',
            price: '$10',
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Crème Brûlée',
            description: 'Vanilla custard with caramelized sugar',
            price: '$11',
            image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Seasonal Fruit Tart',
            description: 'Fresh seasonal fruits with pastry cream',
            price: '$13',
            image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Lemon Posset',
            description: 'Silky lemon posset with shortbread cookies',
            price: '$9',
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Chocolate Lava Cake',
            description: 'Warm chocolate cake with molten center and berry compote',
            price: '$14',
            image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         }
      ],
      beverages: [
         {
            name: 'House Wine Selection',
            description: 'Red, white, or rosé from our curated collection',
            price: '$8-15',
            image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Craft Cocktails',
            description: 'Signature cocktails made with premium spirits',
            price: '$12-16',
            image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Artisan Coffee',
            description: 'Freshly roasted single-origin coffee',
            price: '$4',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Premium Tea Selection',
            description: 'Curated selection of loose-leaf teas',
            price: '$5',
            image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Fresh Juices',
            description: 'Daily selection of fresh-pressed juices',
            price: '$6',
            image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         },
         {
            name: 'Champagne & Sparkling',
            description: 'Premium champagne and sparkling wine selection',
            price: '$15-45',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
         }
      ]
   }

   const categories = [
      { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
      { id: 'mains', name: 'Main Courses', icon: '🍽️' },
      { id: 'desserts', name: 'Desserts', icon: '🍰' },
      { id: 'beverages', name: 'Beverages', icon: '🍷' }
   ]

   return (
      <div className="min-h-screen pt-16">
         {/* Header */}
         <section className="relative py-20 text-white overflow-hidden">
            <div
               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
               style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
               }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h1 className="menu-header text-5xl md:text-6xl font-bold mb-6">Our Menu</h1>
               <p className="menu-header text-xl md:text-2xl max-w-3xl mx-auto">
                  Discover our carefully crafted dishes made with the finest ingredients and culinary expertise.
               </p>
            </div>
         </section>

         {/* Menu Content */}
         <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               {/* Category Navigation */}
               <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {categories.map((category) => (
                     <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`category-btn flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === category.id
                           ? 'bg-teal-600 text-white shadow-lg'
                           : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-md'
                           }`}
                     >
                        <span className="text-xl">{category.icon}</span>
                        {category.name}
                     </button>
                  ))}
               </div>

               {/* Menu Items */}
               <div className="menu-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuData[activeCategory].map((item, index) => (
                     <div
                        key={index}
                        className="menu-item bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                     >
                        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }}></div>
                        <div className="p-6">
                           <div className="flex justify-between items-start mb-3">
                              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                              <span className="text-2xl font-bold text-teal-600">{item.price}</span>
                           </div>
                           <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Special Offers */}
         <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
               <h2 className="text-4xl font-bold gradient-text mb-6">Chef's Special</h2>
               <div className="bg-gradient-to-r from-teal-50 to-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Tasting Menu Experience</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                     Embark on a culinary journey with our 7-course tasting menu, featuring seasonal ingredients
                     and innovative techniques. Each course is paired with carefully selected wines.
                  </p>
                  <div className="text-3xl font-bold text-teal-600 mb-4">$85 per person</div>
                  <p className="text-sm text-gray-500">Available Friday and Saturday evenings. Advance reservation required.</p>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Menu