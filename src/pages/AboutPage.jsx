import { motion } from 'framer-motion'
import { FaArrowRight, FaBullseye, FaEye, FaStar, FaUsers, FaHandsHelping, FaLightbulb, FaShieldAlt } from 'react-icons/fa'

const coreValues = [
  { icon: FaStar, title: 'Excellence', desc: 'Striving for the highest standards in academic growth and professional practice.' },
  { icon: FaShieldAlt, title: 'Professionalism', desc: 'Maintaining integrity, respect, and ethical conduct in every interaction.' },
  { icon: FaLightbulb, title: 'Innovation', desc: 'Encouraging new ideas, creativity, and research-driven solutions.' },
  { icon: FaUsers, title: 'Leadership', desc: 'Developing the skills to guide, inspire, and positively influence others.' },
  { icon: FaHandsHelping, title: 'Collaboration', desc: 'Working across disciplines to achieve meaningful educational and professional outcomes.' },
  { icon: FaShieldAlt, title: 'Integrity', desc: 'Acting with honesty, accountability, and responsibility in all activities.' },
]

const stats = [
  { number: '2014', label: 'Established' },
  { number: '60+', label: 'Active Members' },
  { number: '25+', label: 'Workshops' },
  { number: '12', label: 'Global Partners' },
  { number: '150+', label: 'Reach' },
  { number: '1-on-1', label: 'Mentorship' },
]

const directorates = [
  'Directory of Surgical Skills',
  'Education & Research',
  'Mentorship',
  'Outreach & Events',
  'IT & Publications',
]

const partners = ['University of Rwanda', 'CHUK', 'RMA', 'RSS', 'ASSA']

const reasons = [
  {
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=85',
    title: 'Technical Mastery',
    desc: 'Hands-on surgical skills training that bridges classroom theory with clinical practice.',
  },
  {
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=85',
    title: 'Intellectual Curiosity',
    desc: 'Research-driven learning that cultivates evidence-based surgical thinking and innovation.',
  },
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=85',
    title: 'Professional Mentorship',
    desc: 'Direct guidance from experienced surgeons and faculty shaping the next generation.',
  },
]

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* ========== 1. HERO BANNER ========== */}
      <section className="relative h-[550px] overflow-hidden bg-ur-green-primary text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=85"
            alt="Medical students in a hospital corridor"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ur-green-primary/80" />
        </div>
        <div className="section-container relative z-10 flex h-full flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="mb-4 text-sm text-white/60">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white">About Us</span>
            </nav>
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-white/60">About Us</span>
            <h1 className="text-5xl font-extrabold leading-tight sm:text-[3.5rem]">About UR-SSS</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
              Building the future of surgery through education, research, mentorship, and leadership.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-8 bg-white text-ur-green-primary hover:bg-ur-green-light"
            >
              Discover Our Mission
              <FaArrowRight size={14} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ========== 2. OUR STORY ========== */}
      <section className="bg-ur-green-light py-20 md:py-24">
        <div className="section-container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=85"
                  alt="Students participating in practical surgical training"
                  className="h-[420px] w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 rounded-xl bg-ur-green-primary p-6 text-white shadow-xl"
              >
                <div className="text-3xl font-extrabold">10+</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/80">Years<br />of Surgical<br />Excellence</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="section-kicker">Our Story</span>
              <h2 className="section-title max-w-xl">A Legacy of Academic Ambition</h2>
              <p className="section-copy mt-5">
                Founded in 2014 at the University of Rwanda&apos;s College of Medicine and Health Sciences, UR-SSS was built by students who wanted more than textbooks — they wanted hands-on surgical exposure, research mentorship, and a community of like-minded future surgeons. What started as a small group has grown into a society that touches every aspect of surgical education in Rwanda.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-extrabold text-ur-green-primary">2014</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-gray-500">Year Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-ur-green-primary">Global</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-gray-500">Partnership Reach</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== 3. MILESTONES OF PROGRESS ========== */}
      <section className="bg-ur-green-primary py-20 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-extrabold">Milestones of Progress</h2>
            <p className="mt-3 text-white/70">Key moments that shaped our journey.</p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { year: '2014', title: 'Society Founded', desc: 'A group of aspiring medical students at the College of Medicine established UR-SSS to promote interest in surgery and professional development.' },
              { year: '2015', title: 'First Workshops', desc: 'Introduced hands-on surgical skills and clinical skills training sessions for medical students.' },
              { year: '2017', title: 'Research Wing', desc: 'Expanded academic engagement through student-led research projects, journal clubs, and case presentations.' },
              { year: '2019', title: 'Mentorship Program', desc: 'Established formal mentorship initiatives connecting students with residents, consultants, and healthcare professionals.' },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col rounded-xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-sm"
              >
                <div className="text-3xl font-extrabold">{item.year}</div>
                <div className="mt-2 text-sm font-medium">{item.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4. MISSION & VISION ========== */}
      <section className="bg-ur-green-light py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white p-8 shadow-sm md:p-10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-ur-green-light text-ur-green-primary">
                <FaBullseye size={24} />
              </div>
              <h2 className="text-2xl font-extrabold text-ur-dark">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                To equip future surgeons with practical surgical skills, research acumen, ethical leadership, and professional networks that prepare them for excellence in surgical practice and healthcare delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl bg-ur-green-primary p-8 text-white shadow-sm md:p-10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-white/20 text-white">
                <FaEye size={24} />
              </div>
              <h2 className="text-2xl font-extrabold">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-white/80">
                To be the leading student-led surgical society in East Africa, producing a pipeline of compassionate, globally competitive surgeons who transform healthcare in Rwanda and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== 5. CORE VALUES ========== */}
      <section className="bg-white py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-extrabold text-ur-dark">Core Values</h2>
            <p className="mt-3 text-gray-500">The principles that guide everything we do.</p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex flex-col items-center rounded-lg border border-gray-100 bg-ur-green-light/50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ur-green-primary/10 text-ur-green-primary">
                  <value.icon size={20} />
                </div>
                <h3 className="mt-4 font-extrabold text-ur-dark">{value.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 6. STATISTICS STRIP ========== */}
      <section className="bg-ur-green-primary py-14">
        <div className="section-container">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="text-2xl font-extrabold text-white lg:text-3xl">{stat.number}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7. ORGANIZATIONAL STRUCTURE ========== */}
      <section className="bg-ur-green-light py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-extrabold text-ur-dark">Organizational Structure</h2>
            <p className="mt-3 text-gray-500">How we are organized to deliver impact.</p>
          </motion.div>

          {/* Executive Committee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-8 max-w-xs rounded-xl bg-ur-green-primary p-6 text-center text-white shadow-lg"
          >
            <FaUsers size={28} className="mx-auto" />
            <h3 className="mt-3 text-lg font-extrabold">Executive Committee</h3>
            <p className="mt-1 text-sm text-white/70">Presidents & Advisors</p>
          </motion.div>

          {/* Connecting line */}
          <div className="mx-auto mb-8 h-8 w-0.5 bg-ur-green-sage" />

          {/* Directorates */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {directorates.map((dir, i) => (
              <motion.div
                key={dir}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-lg bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-xs font-extrabold uppercase tracking-[0.1em] text-ur-green-primary">{dir}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 8. ACADEMIC PARTNERS ========== */}
      <section className="bg-white py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-extrabold text-ur-dark">Academic Partners</h2>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-lg bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-gray-500 transition hover:bg-ur-green-primary hover:text-white"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 9. WHY UR-SSS MATTERS ========== */}
      <section className="bg-ur-green-light py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-center"
          >
            <h2 className="text-4xl font-extrabold text-ur-dark">Why UR-SSS Matters</h2>
            <p className="mt-3 text-gray-500">Three pillars that define our impact on future surgeons.</p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-extrabold text-ur-dark">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 10. FINAL CTA ========== */}
      <section className="relative overflow-hidden bg-ur-green-primary py-20 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ur-green-primary/85" />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Join the Next Generation of Surgical Leaders
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Become part of a community that is shaping the future of surgery in Rwanda.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary bg-white text-ur-green-primary hover:bg-ur-green-light"
              >
                Join UR-SSS
                <FaArrowRight size={14} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary border-white/40 text-white hover:border-white hover:bg-white hover:text-ur-green-primary"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
