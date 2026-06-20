import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaEnvelope, FaUserPlus, FaCalendarAlt, FaFlask, FaHandshake, FaPhone,
  FaChevronRight, FaMapMarkerAlt, FaBus, FaClock, FaMap, FaCogs, FaClipboardList,
  FaGraduationCap, FaCalendarCheck, FaLaptopCode, FaCamera, FaShareAlt, FaGlobe,
  FaPlayCircle, FaPaperPlane, FaArrowRight, FaChevronDown,
} from 'react-icons/fa'

const contactMethods = [
  {
    icon: FaEnvelope,
    title: 'General Inquiries',
    desc: 'Questions about the society or general support.',
    link: 'mailto:info@ursss.org',
    label: 'info@ursss.org',
  },
  {
    icon: FaUserPlus,
    title: 'Membership',
    desc: 'Learn how to join or renew your student membership.',
    link: 'mailto:membership@ursss.org',
    label: 'membership@ursss.org',
  },
  {
    icon: FaCalendarAlt,
    title: 'Events',
    desc: 'RSVP details, symposium info, and workshop schedules.',
    link: 'mailto:events@ursss.org',
    label: 'events@ursss.org',
  },
  {
    icon: FaFlask,
    title: 'Research',
    desc: 'Collaborations, publications, and grant inquiries.',
    link: 'mailto:research@ursss.org',
    label: 'research@ursss.org',
  },
  {
    icon: FaHandshake,
    title: 'Partnerships',
    desc: 'Strategic NGO and industry hospital partnerships.',
    link: 'mailto:partners@ursss.org',
    label: 'partners@ursss.org',
  },
  {
    icon: FaPhone,
    title: 'Direct Contact',
    desc: 'Available Mon-Fri, 9am - 5pm CAT.',
    label: '+250 788 000 000',
    phone: true,
  },
]

const directorates = [
  { icon: FaCogs, name: 'Skills & Education' },
  { icon: FaClipboardList, name: 'Research Hub' },
  { icon: FaGraduationCap, name: 'Mentorship' },
  { icon: FaCalendarCheck, name: 'Events Wing' },
  { icon: FaLaptopCode, name: 'IT & Media' },
]

const faqs = [
  {
    q: 'How can I become a member of UR-SSS?',
    a: 'Membership is open to all medical students at the University of Rwanda. You can register via our online portal or visit our membership desk during the annual orientation week.',
  },
  {
    q: 'Does UR-SSS provide clinical workshops?',
    a: 'Yes, we organize monthly suture workshops, basic surgical skills training, and trauma management seminars led by senior residents and faculty mentors.',
  },
  {
    q: 'Can international students collaborate?',
    a: 'Absolutely. We have a dedicated International Affairs liaison to handle exchange programs, cross-border research collaborations, and visiting student initiatives.',
  },
]

const socials = [
  { icon: FaCamera, label: 'Instagram' },
  { icon: FaShareAlt, label: 'Twitter' },
  { icon: FaGlobe, label: 'LinkedIn' },
  { icon: FaPlayCircle, label: 'YouTube' },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="overflow-hidden pt-20">
      {/* ========== HERO ========== */}
      <section className="relative flex min-h-[500px] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ur-green-primary/90 to-ur-green-primary/40" />
        </div>
        <div className="section-container relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70">
              <span>Home</span>
              <FaChevronRight size={10} />
              <span className="text-white">Contact</span>
            </nav>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Contact & Connect</h1>
            <p className="mb-8 mt-4 max-w-xl text-lg leading-relaxed text-white/80">
              Whether you&apos;re a student, mentor, researcher, healthcare professional, or potential partner, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-xl bg-white px-8 py-3 font-bold text-ur-green-primary transition hover:bg-ur-green-light">
                Join UR-SSS
              </button>
              <button className="rounded-xl border border-white/50 px-8 py-3 font-bold text-white backdrop-blur-sm transition hover:bg-white/10">
                Send a Message
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== INTRODUCTION ========== */}
      <section className="bg-ur-green-light/50 py-20 md:py-24">
        <div className="section-container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:rotate-0"
              style={{ transform: 'rotate(-1deg)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85"
                alt=""
                className="h-[450px] w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 pl-0 md:pl-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-ur-green-accent">Our Community</span>
              <h2 className="text-3xl font-bold text-ur-green-primary lg:text-4xl">Let&apos;s Start a Conversation</h2>
              <p className="leading-relaxed text-gray-600">
                At the University of Rwanda Surgical Students Society, we believe that Rwanda&apos;s surgical future is built on collaboration. Whether you are an aspiring surgeon seeking mentorship, a faculty member looking to support academic excellence, or an international partner interested in research synergy, our doors are open.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-4 border-ur-green-accent pl-4">
                  <h4 className="font-bold text-ur-green-primary">Active Students</h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">250+ Members</p>
                </div>
                <div className="border-l-4 border-ur-green-accent pl-4">
                  <h4 className="font-bold text-ur-green-primary">Research Hub</h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">15+ Annual Projects</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT METHODS GRID ========== */}
      <section className="bg-white py-20 md:py-24">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method, i) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-xl border border-gray-200/60 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-ur-green-light text-ur-green-primary transition-all group-hover:bg-ur-green-primary group-hover:text-white">
                  <method.icon size={22} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-ur-dark">{method.title}</h3>
                <p className="mb-4 text-sm text-gray-500">{method.desc}</p>
                {method.phone ? (
                  <p className="font-bold text-ur-green-primary">{method.label}</p>
                ) : (
                  <a href={method.link} className="font-semibold text-ur-green-accent hover:underline">
                    {method.label}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM ========== */}
      <section className="bg-ur-green-light/30 py-20 md:py-24">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl md:p-16">
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-ur-green-primary/5" />
            <div className="relative z-10 mx-auto mb-10 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-ur-green-primary lg:text-4xl">Send us a Detailed Message</h2>
              <p className="mt-3 text-gray-500">Our executive committee typically responds within 24-48 business hours.</p>
            </div>
            <form className="relative z-10 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ur-green-primary">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full rounded-xl border border-gray-200 bg-ur-green-light/30 px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:ring-ur-green-primary" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ur-green-primary">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full rounded-xl border border-gray-200 bg-ur-green-light/30 px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:ring-ur-green-primary" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ur-green-primary">Phone Number</label>
                <input type="tel" placeholder="+250..." className="w-full rounded-xl border border-gray-200 bg-ur-green-light/30 px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:ring-ur-green-primary" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ur-green-primary">Organization / Faculty</label>
                <input type="text" placeholder="University of Rwanda" className="w-full rounded-xl border border-gray-200 bg-ur-green-light/30 px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:ring-ur-green-primary" />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ur-green-primary">I want to:</label>
                <select className="w-full rounded-xl border border-gray-200 bg-ur-green-light/30 px-4 py-3 text-sm text-gray-500 focus:border-ur-green-primary focus:ring-ur-green-primary">
                  <option>Join the society as a student</option>
                  <option>Propose a research collaboration</option>
                  <option>Sponsor an upcoming event</option>
                  <option>Report a technical issue</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ur-green-primary">Message Details</label>
                <textarea rows={5} placeholder="How can we help you today?" className="w-full rounded-xl border border-gray-200 bg-ur-green-light/30 px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:ring-ur-green-primary" />
              </div>
              <div className="md:col-span-2 pt-2">
                <button type="submit" className="w-full rounded-xl bg-ur-green-primary px-8 py-4 font-bold text-white shadow-lg transition-transform hover:scale-[1.01]">
                  Send Secure Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ========== VISIT US ========== */}
      <section className="bg-white py-20 md:py-24">
        <div className="section-container">
          <div className="flex flex-col gap-8 lg:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] overflow-hidden rounded-[2rem] shadow-2xl lg:w-2/3"
            >
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85"
                alt=""
                className="h-full w-full object-cover transition duration-1000 hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/30 bg-white/70 p-6 backdrop-blur-md">
                <h3 className="text-xl font-bold text-ur-green-primary">College of Medicine & Health Sciences</h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                  <FaMapMarkerAlt className="text-ur-green-accent" size={14} />
                  University of Rwanda, Nyarugenge Campus, Kigali
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-6 lg:w-1/3"
            >
              <div className="flex-1 rounded-[2rem] bg-ur-green-primary p-8 text-white">
                <h3 className="mb-4 text-xl font-bold">Visit Us</h3>
                <p className="mb-8 text-sm leading-relaxed text-white/80">Find us at the heart of the capital. Our office is located in the medical students common room building.</p>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <FaBus className="mt-1 shrink-0 text-ur-green-accent" size={18} />
                    <div>
                      <h4 className="text-sm font-bold">Public Transport</h4>
                      <p className="text-xs text-white/70">Easily accessible via Nyabugogo-Kigali City Center bus routes.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FaClock className="mt-1 shrink-0 text-ur-green-accent" size={18} />
                    <div>
                      <h4 className="text-sm font-bold">Visitor Hours</h4>
                      <p className="text-xs text-white/70">Appointments preferred. Walk-ins Wednesday 2-4 PM.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-[2rem] border border-gray-200/50 bg-ur-green-light/30 p-6 text-center">
                <FaMap className="mb-2 text-3xl text-ur-green-primary" />
                <p className="font-bold text-ur-green-primary">Open in Google Maps</p>
                <p className="text-xs text-gray-400">Coordinates: -1.9441, 30.0619</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CONNECT WITH DIRECTORATE ========== */}
      <section className="bg-ur-green-light/50 py-20 md:py-24">
        <div className="section-container">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-ur-green-primary lg:text-4xl">Department-Specific Contacts</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">Connect directly with our directorates for specialized guidance and opportunities.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {directorates.map((dir, i) => (
              <motion.a
                key={dir.name}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group text-center"
              >
                <div className="mx-auto mb-4 flex aspect-square w-full items-center justify-center rounded-2xl border border-gray-200/60 bg-white shadow-sm transition-all group-hover:bg-ur-green-primary group-hover:text-white">
                  <dir.icon size={32} />
                </div>
                <p className="text-sm font-bold text-ur-green-primary">{dir.name}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PARTNERSHIP ========== */}
      <section className="bg-white py-20 md:py-24">
        <div className="section-container">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-ur-green-primary lg:text-4xl">Partner With UR-SSS</h2>
              <p className="leading-relaxed text-gray-600">
                We collaborate with leading hospitals, international NGOs, and global surgical societies to enhance surgical training in Rwanda. If your organization shares our vision of clinical excellence and academic rigor, we welcome a strategic partnership.
              </p>
              <button className="inline-flex items-center gap-3 rounded-xl bg-ur-green-primary px-8 py-3 font-bold text-white transition hover:shadow-lg">
                View Partnership Prospectus
                <FaArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85"
                  alt=""
                  className="relative z-10 w-full rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-ur-green-accent/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="bg-ur-green-light/50 py-20 md:py-24">
        <div className="section-container mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-ur-green-primary lg:text-4xl">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="flex w-full items-center justify-between p-6 text-left font-bold text-ur-green-primary"
                >
                  {faq.q}
                  <FaChevronDown className={`shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={16} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-gray-500">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOCIAL CONNECTIONS ========== */}
      <section className="bg-white py-16">
        <div className="section-container text-center">
          <h3 className="mb-12 text-xs font-bold uppercase tracking-widest text-gray-400">Connect With Us Online</h3>
          <div className="flex justify-center gap-8">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href="#"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.1 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-ur-green-light text-ur-green-primary shadow-md transition-all hover:bg-ur-green-primary hover:text-white"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="py-16">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-[3rem] bg-ur-green-primary p-16 text-center md:p-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#47705C_0%,_transparent_70%)] opacity-30" />
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">Stay Informed on Surgical Advancements</h2>
              <p className="mx-auto mb-10 max-w-2xl text-white/80">Join 1,000+ subscribers for monthly updates on research calls, workshop schedules, and surgical symposiums.</p>
              <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                <input type="email" placeholder="Enter your email" className="flex-1 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-white/40 backdrop-blur-sm focus:ring-ur-green-accent" />
                <button className="rounded-xl bg-ur-green-accent px-8 py-4 font-bold text-white transition hover:scale-105">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ur-green-primary/80 mix-blend-multiply" />
        </div>
        <div className="section-container relative z-10 text-center">
          <h2 className="mb-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Join the Community Shaping Rwanda&apos;s Future Surgeons
          </h2>
          <button className="rounded-2xl bg-white px-12 py-5 text-lg font-extrabold text-ur-green-primary shadow-2xl transition hover:bg-ur-green-light">
            Start Your Journey Now
          </button>
        </div>
      </section>
    </div>
  )
}
