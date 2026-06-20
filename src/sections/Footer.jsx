import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Directorates', href: '#directorates' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const programs = [
  'Surgical Skills Training',
  'Research Mentorship',
  'Community Outreach',
  'Leadership Development',
  'Academic Conferences',
]

const socialLinks = [
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-ur-dark text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-ur-green-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">UR</span>
              </div>
              <span className="font-bold text-xl">UR-SSS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The University of Rwanda Surgical Students Society is dedicated to advancing surgical education, research, and mentorship for the next generation of healthcare leaders in Rwanda.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ur-green-primary transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-ur-green-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-gray-400 text-sm">{program}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-ur-green-primary mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-400 text-sm">
                  College of Medicine & Health Sciences<br />
                  University of Rwanda, Kigali
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-ur-green-primary flex-shrink-0" size={16} />
                <span className="text-gray-400 text-sm">+250 788 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-ur-green-primary flex-shrink-0" size={16} />
                <span className="text-gray-400 text-sm">info@ur-sss.org</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold text-sm mb-3">Newsletter</h4>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-ur-green-primary transition-colors sm:flex-1"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full whitespace-nowrap bg-ur-green-primary text-white px-4 py-2.5 rounded-md text-sm font-medium hover:bg-ur-green-secondary transition-colors sm:w-auto"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} UR-SSS. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
