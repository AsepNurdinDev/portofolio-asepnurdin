import { useState } from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., send data to email or server)
    alert("Message Sent!");
  };

  return (
    <section className="bg-gray-900 text-white py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg mx-auto max-w-3xl">
            dont hesitate to contact me via the form or via the available social media

          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 py-3 rounded-lg text-white font-semibold hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Contact me via social media:</h3>
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.linkedin.com/in/asep-nurdin-079b3626b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-400 hover:text-blue-600 text-4xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/asep1902"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-400 hover:text-gray-400 text-4xl"
            >
              <FaGithub />
            </a>
            <a
              // href="https://mail.google.com/mail/u/0/#inbox"
              className="text-white-400 hover:text-blue-500 text-4xl"
              target="_blank"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/aseppnrdn/"
              className="text-white-400 hover:text-red-500 text-4xl"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100061405787813&mibextid=ZbWKwL"
              className="text-white-400 hover:text-blue-500 text-4xl"
              target="_blank"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
