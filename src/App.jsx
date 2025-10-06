import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, Star, Scissors, Palette, Sparkles, Instagram, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'
import promoImage from './assets/kimberly-lewis-promo.png'

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Sample portfolio images (using the promo image as placeholder)
  const portfolioImages = [
    { src: promoImage, alt: "Red hair transformation", category: "Color" },
    { src: promoImage, alt: "Blonde highlights", category: "Highlights" },
    { src: promoImage, alt: "Luxury color treatment", category: "Color" },
    { src: promoImage, alt: "Stylish cut", category: "Cut" },
  ]

  const services = [
    {
      title: "Color Transformation",
      description: "From bold reds to stunning blondes, get hair that turns heads with our luxury color services.",
      icon: <Palette className="w-6 h-6" />,
      price: "Starting at $150"
    },
    {
      title: "Precision Cuts",
      description: "Expert cuts tailored to your face shape and lifestyle for effortless style.",
      icon: <Scissors className="w-6 h-6" />,
      price: "Starting at $85"
    },
    {
      title: "Styling & Treatments",
      description: "Professional styling and nourishing treatments for healthy, beautiful hair.",
      icon: <Sparkles className="w-6 h-6" />,
      price: "Starting at $65"
    }
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Kimberly transformed my hair completely! The color is exactly what I dreamed of.",
      rating: 5
    },
    {
      name: "Jessica L.",
      text: "Best stylist in Texas! Professional, talented, and such a lovely person.",
      rating: 5
    },
    {
      name: "Maria R.",
      text: "I finally found my hair stylist for life. Kimberly is absolutely amazing!",
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-gold-400 bg-clip-text text-transparent"
            >
              Kimberly Lewis
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-purple-300 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-purple-300 transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-purple-300 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple-300 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple-300 transition-colors">Contact</button>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0">
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-black/70 z-10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10"></div>
        </div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                Kimberly Lewis
              </span>
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
              <Badge variant="outline" className="text-purple-300 border-purple-400 bg-purple-900/30 text-lg px-4 py-2">
                Master Stylist
              </Badge>
              <Badge variant="outline" className="text-purple-300 border-purple-400 bg-purple-900/30 text-lg px-4 py-2">
                Color Specialist
              </Badge>
            </div>
            <p className="text-2xl md:text-3xl text-purple-200 mb-8 font-light">
              BEAUTIFUL HAIR STARTS HERE!
            </p>
            <p className="text-lg text-purple-300 mb-12 max-w-2xl mx-auto">
              Transform your look with luxury color services and effortless style. 
              Whether you want to make them see red or get hair that turns heads, 
              your dream hair awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-4 rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Your Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('portfolio')}
                className="border-purple-400 text-purple-300 hover:bg-purple-900/30 text-lg px-8 py-4 rounded-full"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Signature Services
            </h2>
            <p className="text-xl text-purple-300 max-w-3xl mx-auto">
              Experience luxury hair services tailored to your unique style and personality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-purple-900/50 to-black/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-purple-300 mb-6">{service.description}</p>
                    <p className="text-yellow-400 font-semibold text-lg">{service.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hair Transformations
            </h2>
            <p className="text-xl text-purple-300 max-w-3xl mx-auto">
              See the stunning results that make our clients feel confident and beautiful
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-purple-600 text-white">{image.category}</Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client Love
            </h2>
            <p className="text-xl text-purple-300">
              What our satisfied clients say about their experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-purple-900/50 to-black/50 border-purple-500/30">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-purple-200 mb-6 italic">"{testimonial.text}"</p>
                    <p className="text-purple-400 font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Kimberly
              </h2>
              <p className="text-lg text-purple-300 mb-6">
                As a Master Stylist and Color Specialist, I bring years of expertise and passion 
                to every appointment. My mission is to help you discover your most confident, 
                beautiful self through the art of hair transformation.
              </p>
              <p className="text-lg text-purple-300 mb-6">
                Whether you're looking for luxury color with effortless style, a bold new look 
                that turns heads, or simply want to enhance your natural beauty, I'm here to 
                make your hair dreams a reality.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="text-purple-300 border-purple-400 bg-purple-900/30">
                  Master Stylist Certified
                </Badge>
                <Badge variant="outline" className="text-purple-300 border-purple-400 bg-purple-900/30">
                  Color Specialist
                </Badge>
                <Badge variant="outline" className="text-purple-300 border-purple-400 bg-purple-900/30">
                  10+ Years Experience
                </Badge>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={promoImage} 
                  alt="Kimberly Lewis"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-purple-300">
              Ready to transform your hair? Let's schedule your appointment today
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-black/50 border-purple-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-purple-300 text-sm">Phone</p>
                        <p className="text-white text-lg font-semibold">972-467-4325</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-purple-300 text-sm">Email</p>
                        <p className="text-white text-lg font-semibold">kimberly.lewis@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-purple-300 text-sm">Address</p>
                        <p className="text-white text-lg font-semibold">
                          4580 W. University Drive<br />
                          Suite 114, Prosper, TX 75078
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-purple-500/30">
                    <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="icon" className="border-purple-400 text-purple-300 hover:bg-purple-900/30">
                        <Instagram className="w-5 h-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="border-purple-400 text-purple-300 hover:bg-purple-900/30">
                        <Facebook className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-purple-300 mb-8 text-lg">
                  Book your appointment today and let's create the hair of your dreams together.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl px-12 py-6 rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Your Appointment Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-purple-400">
              © 2024 Kimberly Lewis - Master Stylist & Color Specialist. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
