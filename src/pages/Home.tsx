import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.h1
            className="hero-title"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            Welcome to My SPA
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          >
            Explore and discover amazing pages with smooth animations!
          </motion.p>
        </motion.div>
      </section>

      <section className="features">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Features
        </motion.h2>
        <div className="feature-cards">
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>
              <Link to="/about">About Us</Link>
            </h3>
            <p>Learn more about us.</p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>
              <Link to="/contact">Contact Us</Link>
            </h3>
            <p>Get in touch with us.</p>
          </motion.div>
        </div>
      </section>

      <section className="interactive-scroll">
        <motion.div
          className="scroll-content"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        >
          <h2>Discover More</h2>
          <p>
            Scroll down to learn more about our services, contact us, or check out the FAQ section.
          </p>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="social-links">
          {"Facebook Twitter Instagram".split(" ").map((platform, index) => (
            <Link key={index} to="/">{platform}</Link>
          ))}
        </div>
        <p>© {new Date().getFullYear()} My SPA | All rights reserved.</p>
      </footer>
    </motion.div>
  );
}

export default Home;