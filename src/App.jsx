import './App.css'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Badge } from './components/ui/badge'

function App() {
  return (
    <div className="min-h-screen marble-bg">
      {/* Navigation */}
      <nav className="elegant-nav fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 rounded-full">
        <div className="flex items-center space-x-8">
          <div className="elegant-title text-2xl gold-text">Kimberly Lewis</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-yellow-400 transition-colors font-medium">Home</a>
            <a href="#services" className="text-white hover:text-yellow-400 transition-colors font-medium">Services</a>
            <a href="#portfolio" className="text-white hover:text-yellow-400 transition-colors font-medium">Portfolio</a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors font-medium">Contact</a>
          </div>
          <Button className="gold-btn hidden sm:block">Book Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="marble-hero min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center max-w-5xl mx-auto">
          <div className="elegant-card p-12 mb-12">
            <h1 className="elegant-title gold-text mb-4">
              Kimberly Lewis
            </h1>
            <div className="flex justify-center items-center gap-8 mb-6">
              <span className="text-white text-lg font-medium tracking-wider uppercase">Master Stylist</span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L7.5 7H2l4.5 3.5L5 16l5-3.5L15 16l-1.5-5.5L18 7h-5.5z"/>
              </svg>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <span className="text-white text-lg font-medium tracking-wider uppercase">Color Specialist</span>
            </div>
          </div>

          <div className="space-y-8 mb-12">
            <h2 className="elegant-subtitle purple-text mb-4">Maybe you want to make 'em see red</h2>
            <h2 className="elegant-subtitle text-white mb-4">Or get hair that turns heads</h2>
            <h2 className="elegant-subtitle purple-text mb-4">Looking for luxury color with effortless style</h2>
          </div>

          <h3 className="elegant-title gold-text mb-8">Beautiful Hair Starts Here!</h3>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="gold-btn text-lg px-10 py-4">
              Book Your Transformation
            </Button>
            <Button className="purple-btn text-lg px-10 py-4">
              View Portfolio
            </Button>
          </div>
        </div>
        
        {/* Elegant floating elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-32 right-16 animate-pulse" style={{ animationDelay: '2s' }}>
          <div className="w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute top-1/2 left-20 animate-pulse" style={{ animationDelay: '4s' }}>
          <div className="w-16 h-16 bg-purple-400/20 rounded-full blur-lg"></div>
        </div>
      </section>      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="elegant-title gold-text mb-6">Signature Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From bold color transformations to effortless everyday styles, 
              we create looks that celebrate your unique beauty and turn heads everywhere you go.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="marble-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold gold-text mb-4">Luxury Color Transformations</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Premium color treatments using the finest products. From subtle highlights 
                to dramatic transformations, achieve the perfect shade that complements your skin tone.
              </p>
              <div className="text-yellow-400 font-semibold text-lg">Starting at $150</div>
            </Card>

            <Card className="marble-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold gold-text mb-4">Effortless Style</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Custom cuts and styling that work with your lifestyle. Wake up gorgeous 
                every day with styles designed to enhance your natural beauty.
              </p>
              <div className="text-yellow-400 font-semibold text-lg">Starting at $85</div>
            </Card>

            <Card className="marble-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold gold-text mb-4">Hair That Turns Heads</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Statement looks and special occasion styling. From elegant updos to 
                glamorous blowouts, get ready to be the center of attention.
              </p>
              <div className="text-yellow-400 font-semibold text-lg">Starting at $95</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="elegant-title gold-text mb-6">Recent Transformations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the stunning results that keep our clients coming back for more beautiful transformations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="portfolio-marble">
                <div className="w-full h-full bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center aspect-square">
                  <span className="text-yellow-400 font-medium">Hair Transformation {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="elegant-title gold-text mb-6">What Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Sarah M.</h4>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Kimberly gave me the most amazing color! I've never felt more confident.
                She really knows how to make hair look absolutely stunning."
              </p>
            </Card>

            <Card className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Maria L.</h4>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Best stylist ever! My cut is so easy to style and looks perfect every day.
                Kimberly is truly talented and professional."
              </p>
            </Card>

            <Card className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Jessica R.</h4>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I get compliments on my hair everywhere I go! Kimberly created exactly
                the look I wanted. I'll never go anywhere else!"
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="elegant-title gold-text mb-8">Ready for Your Transformation?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Book your appointment today and discover why clients travel from across the city for Kimberly's expertise.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="elegant-glass p-8 text-white">
              <h3 className="text-2xl font-bold gold-text mb-4">Visit the Salon</h3>
              <div className="space-y-3 text-left">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  4580 W. University Drive, Suite 114, Prosper, TX 75078
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  972-467-4325
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Tue-Sat: 9am-7pm
                </p>
              </div>
            </Card>

            <Card className="glass p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Book Online</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="modern-input w-full"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="modern-input w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="modern-input w-full"
                />
                <select className="modern-input w-full">
                  <option>Select Service</option>
                  <option>Color Treatment</option>
                  <option>Cut & Style</option>
                  <option>Special Occasion</option>
                </select>
                <Button className="modern-btn w-full py-3">
                  Book Appointment
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4">Follow us on social media for daily inspiration</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-orange-300 hover:text-orange-200 transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-orange-300 hover:text-orange-200 transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.402-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.750-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017.001z" />
                </svg>
              </a>
              <a href="#" className="text-orange-300 hover:text-orange-200 transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.070-4.85.070-3.204 0-3.584-.012-4.849-.070-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gold-text mb-2">Kimberly Lewis</h3>
            <p className="text-gray-400">Master Stylist & Color Specialist</p>
          </div>
          <p className="text-gray-400">
            © 2024 Kimberly Lewis Hair Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
