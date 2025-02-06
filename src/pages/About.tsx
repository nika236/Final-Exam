import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <motion.div className="about-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <section className="about-hero">
        <motion.h1 className="about-title" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100 }}>
          About Us
        </motion.h1>
        <motion.p className="about-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Learn more about our passionate team of developers and the vision behind this project.
        </motion.p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          {[
            { name: "Alice Johnson", role: "Frontend Developer", desc: "Alice specializes in building responsive and interactive user interfaces." },
            { name: "Bob Smith", role: "Backend Developer", desc: "Bob is an expert in server-side logic and database management." },
            { name: "Charlie Lee", role: "UI/UX Designer", desc: "Charlie ensures our designs are user-friendly and visually appealing." },
            { name: "David Kim", role: "Project Manager", desc: "David keeps the team organized and the project on track." }
          ].map((member, index) => (
            <motion.div key={index} className="team-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Link to="/" className="back-button">Back to Home</Link>
    </motion.div>
  );
}

export default About;

