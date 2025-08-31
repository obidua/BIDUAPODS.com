import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiry: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in Name, Email, and Message fields.');
      return;
    }

    // Generate email content
    const subject = `Contact Form: ${formData.inquiry.charAt(0).toUpperCase() + formData.inquiry.slice(1).replace(/([A-Z])/g, ' $1')} Inquiry`;
    
    let emailBody = `Contact Form Submission\n\n`;
    emailBody += `Name: ${formData.name}\n`;
    emailBody += `Email: ${formData.email}\n`;
    emailBody += `Company: ${formData.company || 'Not provided'}\n`;
    emailBody += `Phone: ${formData.phone || 'Not provided'}\n`;
    emailBody += `Inquiry Type: ${formData.inquiry.charAt(0).toUpperCase() + formData.inquiry.slice(1).replace(/([A-Z])/g, ' $1')}\n\n`;
    emailBody += `Message:\n${formData.message}\n\n`;
    emailBody += `---\nSubmitted via BIDUA Pods Contact Form`;

    // Encode for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(emailBody);
    
    // Create mailto URL with both email addresses
    const mailtoUrl = `mailto:biduaindustries@gmail.com,support@biduapods.com?subject=${encodedSubject}&body=${encodedBody}`;
    
    // Try WhatsApp first, fallback to email
    const whatsappNumber = '919512921903';
    const whatsappMessage = encodeURIComponent(emailBody);
    
    if (whatsappNumber) {
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    } else {
      window.open(mailtoUrl, '_blank');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <SEO
        title="Contact BIDUA Pods | Get Quote for Capsule Beds & Sleeping Pods"
        description="Contact BIDUA Pods for capsule beds quotes and inquiries. Phone: +91-9512921903, Email: biduaindustries@gmail.com. Located in Noida, UP. WhatsApp support available 24/7."
        canonical="https://biduapods.com/contact"
        ogTitle="Contact BIDUA Pods | Get Quote for Capsule Beds"
        ogDescription="Get quotes and inquiries for premium capsule beds. Phone, email, and WhatsApp support available."
      />
      <div className="min-h-screen bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-950 dark:via-blue-900/30 dark:to-cyan-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your sleep experience? Contact our experts for personalized consultations and custom solutions
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Let's Start a Conversation</h2>
              
              <div className="space-y-6 mb-12">
                <div className={`flex items-center space-x-4 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold">WhatsApp</h3>
                    <a 
                      href="https://wa.me/919512921903" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      +91 9512921903
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-4 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">9512921903</p>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-4 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">biduaindustries@gmail.com</p>
                    <p className="text-gray-600 dark:text-gray-400">support@biduapods.com</p>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-4 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold">Headquarters</h3>
                    <p className="text-gray-600 dark:text-gray-400">H-77 Sector 63<br />Noida UP</p>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-4 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 9AM - 6PM PST<br />24/7 Support Available</p>
                  </div>
                </div>
              </div>

              {/* Global Offices */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-cyan-400" />
                  <span>Global Offices</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={`bg-gray-100 dark:bg-gray-900/40 p-4 rounded-lg border border-gray-300 dark:border-cyan-500/30 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                    <h4 className="text-gray-900 dark:text-white font-medium">India</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Noida, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-cyan-500/30 shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-2">Inquiry Type</label>
                  <select
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="general">General Information</option>
                    <option value="quote">Request Quote</option>
                    <option value="demo">Schedule Demo</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Tell us about your project or questions..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-cyan-500/25"
                >
                  <span className="font-semibold">Send Message</span>
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="py-20 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-xl"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What is the typical installation time?',
                answer: 'We are the importer of sleeping pods and deliver them to your location. Installation is not provided directly by us; customers are expected to arrange their own installation. However, we do provide a detailed installation instruction PDF along with step-by-step content. If required, we can also offer remote training via video call. For on-site physical support, we can arrange installation services, which are chargeable (based on travel, lodging, and service costs).'
              },
              {
                question: 'Do you offer international shipping?',
                answer: 'Yes, we ship worldwide. Delivery, installation, and support services can be arranged in more than 25 countries, but please note that these services are chargeable and quoted separately depending on location.'
              },
              {
                question: 'What warranty do you provide?',
                answer: 'Since we are the importer, we do not provide our own warranty or guarantee. The pods are imported products, and their durability depends on the material quality and user handling/care. Proper maintenance will ensure a longer product life. Any limited warranty that may exist is subject to the original manufacturer\'s terms, not ours.'
              },
              {
                question: 'Can the pods be customized?',
                answer: 'Customization depends on the manufacturing partner from whom we import. In most cases, customization (colors, materials, or additional features) is possible but depends on order size and factory availability. Large orders usually allow more flexibility for custom options.'
              }
            ].map((faq, index) => (
              <div key={index} className={`bg-white dark:bg-gray-900/40 rounded-lg p-6 border border-gray-200 dark:border-cyan-500/30 shadow-md ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                <h3 className="text-gray-900 dark:text-white font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
    </>
  );
};

export default Contact;
