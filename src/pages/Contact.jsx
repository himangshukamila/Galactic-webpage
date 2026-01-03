import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp } from "../utils/effects.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  const handleSocialClick = (e) => {
    e.preventDefault();
    toast.warning("This social link is disabled for personal reasons.", {
      position: "bottom-right",
      autoClose: 3000,
      closeButton: true,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
      theme: "dark",
    });

  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "explore@galactic.space",
      color: "from-purple-600 to-indigo-600",
    },
    {
      icon: "🌐",
      title: "Website",
      value: "www.galacticexplorer.space",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Earth, Solar System",
      color: "from-green-600 to-emerald-600",
    },
  ];

  const socialLinks = [
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "GitHub", icon: "💻", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" },
    { name: "Discord", icon: "💬", url: "#" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <ToastContainer
        position="bottom-right"
        closeButton={true}
        newestOnTop={false}
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have questions or want to learn more? We'd love to hear from you!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CONTACT FORM (unchanged UI) */}
          <motion.div
            {...fadeInUp}
            className="lg:col-span-2 bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-space">
              Send Us a Message
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-600/20 border border-green-500/50 rounded-xl p-8 text-center"
              >
                <div className="text-5xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Its a normal website project so don't expect any answers!
                </h4>
                <p className="text-gray-300">
                  Thank you for reaching tho. We'll try to implement this in upcoming project.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cosmic-dark/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cosmic-dark/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cosmic-dark/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-cosmic-dark/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg shadow-cosmic-lg hover:shadow-glow transition-all duration-300 btn-cosmic"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {/* CONTACT DETAILS */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-6 font-space">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-12 h-12 bg-linear-to-br ${info.color} rounded-lg flex items-center justify-center text-2xl`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SOCIAL LINKS WITH TOAST */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-6 font-space">
                Follow Us
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    onClick={handleSocialClick}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 bg-cosmic-dark/50 rounded-lg p-3 border border-purple-500/20 hover:border-purple-500/50 transition-colors"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="text-white text-sm font-medium">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* SUPPORT HOURS */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="bg-linear-to-br from-cosmic-navy/50 to-cosmic-purple/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-4 font-space">
                Support Hours
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                We're here to help you explore the universe!
              </p>

              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white">NA</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">NA</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
