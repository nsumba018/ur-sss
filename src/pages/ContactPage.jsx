import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden bg-ur-green-primary py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white" />
        </div>
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-white/60">Contact</span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Get In Touch</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Have a question, suggestion, or want to collaborate? We would love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-extrabold text-ur-dark">Contact Information</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Reach out to us through any of the channels below.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ur-green-light text-ur-green-primary">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ur-dark">Address</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      College of Medicine & Health Sciences<br />
                      University of Rwanda, Kigali
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ur-green-light text-ur-green-primary">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ur-dark">Phone</h3>
                    <p className="mt-1 text-sm text-gray-600">+250 788 123 456</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ur-green-light text-ur-green-primary">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ur-dark">Email</h3>
                    <p className="mt-1 text-sm text-gray-600">info@ur-sss.org</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-ur-dark">Follow Us</h3>
                <div className="mt-4 flex gap-3">
                  {[
                    { icon: FaFacebook, label: 'Facebook' },
                    { icon: FaTwitter, label: 'Twitter' },
                    { icon: FaInstagram, label: 'Instagram' },
                    { icon: FaLinkedin, label: 'LinkedIn' },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-ur-green-light text-ur-green-primary transition hover:bg-ur-green-primary hover:text-white"
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-gray-100 bg-ur-green-light p-8 shadow-sm"
            >
              <h2 className="text-xl font-extrabold text-ur-dark">Send a Message</h2>
              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="First Name" className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:outline-none" />
                  <input type="text" placeholder="Last Name" className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:outline-none" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:outline-none" />
                <input type="text" placeholder="Subject" className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:outline-none" />
                <textarea rows={5} placeholder="Your Message" className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:outline-none" />
                <button className="btn-primary w-full">Send Message</button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  )
}
