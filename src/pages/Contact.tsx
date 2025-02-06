import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <motion.div className="contact-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <section className="contact-hero">
        <motion.h1 className="contact-title" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100 }}>
          Contact Us
        </motion.h1>
        <motion.p className="contact-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Have questions or need support? Reach out to us through the channels below.
        </motion.p>
      </section>

      <section className="contact-details">
        <h2>Get in Touch</h2>
        <div className="contact-info">
          <p><strong>Email:</strong> FinalExam@gmail.com</p>
          <p><strong>Phone:</strong> 593456*** - ბოლოს სამ ციფრს არ ვასახელებთ</p>
          <p><strong>Address:</strong> 123 Innovation Street, Tech City, USA</p>
        </div>
      </section>

      <Link to="/" className="back-button">Back to Home</Link>
    </motion.div>
  );
}

export default Contact;
