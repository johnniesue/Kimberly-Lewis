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

      {/* Hero Section with Video */}
      <header className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src="BeautifulhairstartshereVideo(2).mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <h1>Beautiful Hair Starts Here</h1>
          <p>Kimberly Lewis – Master Stylist & Color Specialist</p>
          <a href="#booking" className="cta-button">Book Now</a>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>Meet Kimberly</h2>
          <p>With over a decade of experience in luxury hair styling and color artistry, Kimberly brings precision, passion, and personal care to every appointment.</p>
          <p>Specializing in color transformations and effortless styling, she creates looks that enhance your natural beauty and turn heads wherever you go.</p>
          <p>Every client receives a personalized consultation to ensure their new look perfectly complements their lifestyle, face shape, and personal style preferences.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Haircut & Styling</h3>
            <p>Precision cuts tailored to your look.</p>
          </div>
          <div className="service-card">
            <h3>Color Services</h3>
            <p>Balayage, highlights, root touch-ups.</p>
          </div>
          <div className="service-card">
            <h3>Treatments</h3>
            <p>Deep conditioning, keratin, scalp care.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <h2>Hair Transformations</h2>
        <p>See the stunning results that keep clients coming back</p>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src="KimberlyLewis(1).png" alt="Beautiful blonde balayage transformation" />
            <div className="portfolio-overlay">
              <h3>Blonde Balayage</h3>
              <p>Color & Cut Transformation</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="KimberlyLewis(1).png" alt="Precision cut and style" />
            <div className="portfolio-overlay">
              <h3>Precision Cut</h3>
              <p>Modern Bob with layers</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="KimberlyLewis(1).png" alt="Red color transformation" />
            <div className="portfolio-overlay">
              <h3>Red Transformation</h3>
              <p>Bold color change</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="KimberlyLewis(1).png" alt="Highlights and lowlights" />
            <div className="portfolio-overlay">
              <h3>Dimensional Color</h3>
              <p>Highlights & Lowlights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking" id="booking">
        <h2>Book Your Appointment</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <select required>
            <option value="">Select Service</option>
            <option value="cut">Haircut & Styling</option>
            <option value="color">Color Services</option>
            <option value="treatment">Treatments</option>
          </select>
          <input type="date" required />
          <button type="submit">Confirm Booking</button>
        </form>
      </section>      <footer>
        <p>&copy; 2025 Kimberly Lewis Hair Studio</p>
      </footer>
    </div>
  )
}

export default App