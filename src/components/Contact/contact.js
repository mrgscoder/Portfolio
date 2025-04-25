import { useState } from "react";
import emailjs from "emailjs-com";
import './contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  const isEmailValid = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  
  const isFormValid =
    formData.name && formData.email && formData.message && isEmailValid(formData.email);
  

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            required
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="contact-textarea"
          />
          <button
            type="submit"
            disabled={!isFormValid}
            className="contact-button"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;