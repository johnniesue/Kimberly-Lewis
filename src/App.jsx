import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <a href="#" className="logo">
            Kimberly Lewis
          </a>
          <div className="nav-links">
            <a href="#services" className="nav-link">Services</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <button className="primary-button">Book Now</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title animate-fade-in">
              BEAUTIFUL HAIR<br />
              STARTS HERE
            </h1>
            <p className="hero-subtitle animate-fade-in">
              Kimberly Lewis – Master Stylist & Color Specialist
            </p>
            <div className="flex gap-4 animate-fade-in">
              <button className="primary-button">Book Now</button>
              <button className="secondary-button">View Portfolio</button>
            </div>
          </div>
          <div className="hero-image-container animate-fade-in">
            <img 
              src="/KimberlyLewis(1).png" 
              alt="Kimberly Lewis styling beautiful blonde hair"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="services-container">
          <h2 className="section-title">Signature Services</h2>
          <p className="text-lg">
            From bold color transformations to effortless everyday styles,
            we create looks that celebrate your unique beauty.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3 className="service-title">Color Transformation</h3>
              <p className="service-description">
                From bold reds to stunning blondes, get hair that turns heads with our luxury color services.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">✂️</div>
              <h3 className="service-title">Effortless Style</h3>
              <p className="service-description">
                Custom cuts and styling that work with your lifestyle. Wake up gorgeous every day.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">💫</div>
              <h3 className="service-title">Hair That Turns Heads</h3>
              <p className="service-description">
                Statement looks and special occasion styling. From elegant updos to glamorous blowouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>About Kimberly</h2>
            <p>
              With over 10 years of experience as a master stylist and color specialist, 
              Kimberly Lewis has built a reputation for creating stunning hair transformations 
              that enhance each client's natural beauty.
            </p>
            <p>
              Specializing in luxury color services and effortless styling, Kimberly believes 
              that beautiful hair starts with understanding each client's unique lifestyle and personality.
            </p>
            <button className="primary-button mt-6">Learn More</button>
          </div>
          <div>
            <img 
              src="/KimberlyLewis(1).png" 
              alt="Kimberly Lewis in her salon"
              className="about-image"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">Ready for Your Transformation?</h2>
          <p className="text-lg mb-8">
            Book your appointment today and discover why clients choose Kimberly Lewis 
            for their most important hair transformations.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <h3>Book Appointment</h3>
              <p>Call or text to schedule your consultation</p>
              <p className="font-bold">(555) 123-4567</p>
            </div>
            
            <div className="contact-item">
              <h3>Salon Hours</h3>
              <p>Tuesday - Saturday</p>
              <p className="font-bold">9:00 AM - 7:00 PM</p>
            </div>
            
            <div className="contact-item">
              <h3>Location</h3>
              <p>Premium Salon Suite</p>
              <p className="font-bold">Downtown Hair District</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="primary-button text-lg px-8 py-4">
              Book Your Transformation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Kimberly Lewis - Master Stylist & Color Specialist. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App