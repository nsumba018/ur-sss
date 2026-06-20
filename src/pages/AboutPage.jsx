import { motion } from 'framer-motion'
import {
  FaArrowDown, FaStar, FaShieldAlt, FaLightbulb, FaUsers, FaHandshake, FaBalanceScale,
  FaRocket, FaEye, FaCogs, FaFlask, FaGraduationCap, FaGlobeAfrica, FaLaptopCode,
  FaArrowRight, FaEnvelope,
} from 'react-icons/fa'

const coreValues = [
  { icon: FaStar, title: 'Excellence', desc: 'Striving for the highest standards in academic pursuit and clinical practice.' },
  { icon: FaShieldAlt, title: 'Professionalism', desc: 'Maintaining integrity, respect, and clinical ethics in every interaction.' },
  { icon: FaLightbulb, title: 'Innovation', desc: 'Embracing new technologies and research methods to advance surgery.' },
  { icon: FaUsers, title: 'Leadership', desc: 'Developing the skills to guide surgical teams and healthcare systems.' },
  { icon: FaHandshake, title: 'Collaboration', desc: 'Working across disciplines to provide holistic patient-centered care.' },
  { icon: FaBalanceScale, title: 'Integrity', desc: 'Honest practice and accountability in all society and clinical duties.' },
]

const stats = [
  { number: '2014', label: 'Established' },
  { number: '60+', label: 'Active Members' },
  { number: '25+', label: 'Workshops/Yr' },
  { number: '12', label: 'Global Partners' },
  { number: '150+', label: 'Papers Mentored' },
  { number: '1-on-1', label: 'Mentorship' },
]

const timeline = [
  { year: '2014', title: 'Society Founded', desc: 'A group of visionary students establishes UR-SSS at the University of Rwanda College of Medicine.' },
  { year: '2015', title: 'First Workshops', desc: 'Introduction of basic suturing workshops and clinical skills laboratory sessions.' },
  { year: '2017', title: 'Research Wing', desc: 'Launching the Research Directorate to support student-led clinical audits and papers.' },
  { year: '2019', title: 'Mentorship Program', desc: 'Establishing formal 1-on-1 mentorship paths between senior consultants and students.' },
  { year: '2022', title: 'Community Outreach', desc: 'Expanding society activities to public health education and surgical camps support.' },
  { year: '2026', title: 'Growing Community', desc: 'Vision for a fully integrated regional hub for surgical students across East Africa.' },
]

const directorates = [
  { icon: FaCogs, title: 'Skills', sub: 'Practical Training & Workshops' },
  { icon: FaFlask, title: 'Research', sub: 'Publications & Methodology' },
  { icon: FaGraduationCap, title: 'Mentorship', sub: 'Career Guidance & Networks' },
  { icon: FaGlobeAfrica, title: 'Outreach', sub: 'Community Health Initiatives' },
  { icon: FaLaptopCode, title: 'IT', sub: 'Digital Presence & Support' },
]

const partners = ['University of Rwanda', 'CHUK', 'RMH', 'RSS', 'ASSA']

const reasons = [
  {
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=85',
    label: 'Technical Mastery',
    title: 'Hands-On Learning',
    desc: 'Regular skill labs where students master basic suturing, surgical hygiene, and instrument handling under expert guidance.',
  },
  {
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=85',
    label: 'Intellectual Growth',
    title: 'Research Excellence',
    desc: 'Access to academic mentorship and databases to help students lead impactful surgical research projects and audits.',
  },
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=85',
    label: 'Career Guidance',
    title: 'Professional Mentorship',
    desc: 'Connecting students with leading surgeons in Rwanda and internationally to provide career roadmap and specialized insight.',
  },
]

export default function AboutPage() {
  return (
    <div className="overflow-hidden pt-20">
      {/* ========== 1. HERO ========== */}
      <section className="relative flex min-h-[700px] items-center overflow-hidden" style={{ minHeight: '85vh' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85"
            alt=""
            className="h-full w-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ur-green-primary/80 to-transparent" />
        </div>
        <div className="section-container relative z-10 w-full">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ur-green-secondary/40 bg-ur-green-secondary/30 px-4 py-1.5 backdrop-blur-md">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-ur-green-sage" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Established 2014</span>
                </div>
                <nav className="mb-4 flex gap-2 text-sm text-white/70">
                  <span>Home</span>
                  <span>/</span>
                  <span className="text-white">About</span>
                </nav>
                <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">About UR-SSS</h1>
                <p className="mb-8 mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
                  Building the future of surgery through education, research, mentorship, and leadership. We are the premier platform for aspiring surgeons at the University of Rwanda.
                </p>
                <a
                  href="#story"
                  className="inline-flex items-center gap-2 rounded-lg bg-ur-green-primary px-8 py-3.5 font-bold text-white transition-transform hover:scale-105"
                >
                  Discover Our Mission
                  <FaArrowDown size={16} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. OUR STORY ========== */}
      <section className="bg-white py-20 md:py-24" id="story">
        <div className="section-container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-4 -rotate-2 rounded-xl bg-ur-green-primary/5 transition-transform group-hover:rotate-0" />
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=85"
                alt=""
                className="relative z-10 aspect-[4/3] w-full rounded-xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 z-20 rounded-lg border border-gray-200/20 bg-white p-6 shadow-xl">
                <div className="text-2xl font-bold text-ur-green-primary">10+ Years</div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Of Surgical Excellence</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 font-bold text-ur-green-secondary">
                <span className="h-px w-8 bg-ur-green-secondary" />
                <span className="text-xs uppercase tracking-[0.2em]">Our Story</span>
              </div>
              <h2 className="text-3xl font-bold text-ur-green-primary lg:text-4xl">A Legacy of Academic Ambition</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Founded in 2014 by a group of visionary medical students at the University of Rwanda, UR-SSS began as a small study circle with a singular goal: to bridge the gap between classroom theory and the demanding reality of the operating theater.
              </p>
              <p className="leading-relaxed text-gray-500">
                Today, we have evolved into a vibrant academic ecosystem. We serve as a professional bridge, connecting students with global surgical networks, fostering a culture of rigorous clinical research, and providing hands-on skills training that prepares the next generation of Rwandan surgeons for the world stage.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-gray-200/50 pt-6">
                <div>
                  <div className="text-xl font-bold text-ur-green-secondary">2014</div>
                  <p className="text-sm text-gray-500">Year Founded</p>
                </div>
                <div>
                  <div className="text-xl font-bold text-ur-green-secondary">Global</div>
                  <p className="text-sm text-gray-500">Partnership Reach</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== 3. HORIZONTAL TIMELINE ========== */}
      <section className="relative overflow-hidden bg-ur-green-primary py-20 text-white md:py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 -translate-y-1/2 skew-x-12 bg-white/5" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-extrabold lg:text-5xl">Milestones of Progress</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/70">Tracking our evolution from a student initiative to a recognized institutional society.</p>
          </motion.div>
          <div className="flex snap-x gap-8 overflow-x-auto pb-12">
            {timeline.map((item) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-72 flex-none snap-center group"
              >
                <div className="mb-2 text-xl font-bold text-ur-green-sage">{item.year}</div>
                <div className="relative mb-8 h-1 w-full bg-white/20">
                  <div className="absolute -top-1.5 left-0 h-4 w-4 rounded-full bg-ur-green-sage ring-4 ring-ur-green-primary" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-all group-hover:bg-white/15">
                  <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4. MISSION & VISION ========== */}
      <section className="bg-ur-green-light/50 py-20 md:py-24">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between rounded-2xl border border-gray-200/30 bg-white p-12 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-ur-green-primary/5">
                  <FaRocket className="text-ur-green-primary" size={28} />
                </div>
                <h3 className="mb-6 text-3xl font-bold text-ur-green-primary">Our Mission</h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  To empower surgical students through high-quality educational resources, a robust research culture, and meaningful professional exposure, fostering the technical and ethical competencies required for future surgical leaders.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 font-bold text-ur-green-secondary">
                <span className="h-px w-12 bg-ur-green-secondary" />
                Advancing Rwanda&apos;s Surgical Care
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col justify-between rounded-2xl bg-ur-green-primary p-12 shadow-sm transition-all duration-500 hover:shadow-xl"
            >
              <div>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <FaEye className="text-white" size={28} />
                </div>
                <h3 className="mb-6 text-3xl font-bold text-white">Our Vision</h3>
                <p className="text-lg leading-relaxed text-white/80">
                  To be the premier society that nurtures a cadre of globally competitive, research-oriented, and service-driven surgical specialists who will transform healthcare delivery within Rwanda and the international community.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 font-bold text-ur-green-sage">
                <span className="h-px w-12 bg-ur-green-sage" />
                Leaders in Global Surgery
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== 5. CORE VALUES ========== */}
      <section className="bg-white py-20 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-ur-green-secondary">Our Foundation</span>
            <h2 className="mt-4 text-3xl font-bold text-ur-green-primary lg:text-4xl">Core Values</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-gray-200/20 bg-white p-8 transition-all hover:-translate-y-1 hover:border-ur-green-primary/50"
              >
                <value.icon className="mb-4 text-ur-green-primary" size={36} />
                <h4 className="mb-3 text-xl font-bold text-ur-green-primary">{value.title}</h4>
                <p className="text-sm leading-relaxed text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 6. IMPACT STATS ========== */}
      <section className="relative overflow-hidden bg-ur-green-primary py-16">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" patternUnits="userSpaceOnUse" width="10" height="10">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1" />
              </pattern>
            </defs>
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          </svg>
        </div>
        <div className="section-container relative z-10">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="mb-2 text-3xl font-bold text-green-200 lg:text-4xl">{stat.number}</div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7. ORGANIZATIONAL STRUCTURE ========== */}
      <section className="bg-ur-green-light/50 py-20 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-ur-green-primary lg:text-4xl">Organizational Structure</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">A structured approach to excellence, governed by the Executive Committee and fueled by five specialized directorates.</p>
          </motion.div>

          <div className="relative">
            {/* Executive Level */}
            <div className="relative mb-20 flex justify-center">
              <div className="z-20 w-full max-w-sm rounded-xl bg-ur-green-primary p-8 text-center text-white shadow-lg">
                <div className="mb-1 text-xl font-bold">Executive Committee</div>
                <p className="text-sm italic text-white/70">Presidency &amp; General Secretariat</p>
              </div>
              <div className="absolute left-1/2 top-full h-20 w-px -translate-x-1/2 bg-gray-300" />
            </div>

            {/* Directorates Level */}
            <div className="relative">
              <div className="absolute left-0 top-0 h-px w-full bg-gray-300" />
              <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-5">
                {directorates.map((dir, i) => (
                  <motion.div
                    key={dir.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="group relative"
                  >
                    <div className="absolute left-1/2 top-0 -mt-10 h-10 w-px -translate-x-1/2 bg-gray-300" />
                    <div className="rounded-xl border border-gray-200/30 bg-white p-6 text-center transition-colors hover:border-ur-green-secondary">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ur-green-secondary/10 text-ur-green-secondary transition-all group-hover:bg-ur-green-secondary group-hover:text-white">
                        <dir.icon size={20} />
                      </div>
                      <h4 className="mb-1 font-bold text-ur-green-primary">{dir.title}</h4>
                      <p className="text-xs text-gray-500">{dir.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 8. ACADEMIC PARTNERS ========== */}
      <section className="border-y border-gray-200/20 bg-white py-16">
        <div className="section-container text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-xs font-bold uppercase tracking-widest text-gray-500"
          >
            Our Academic Partners &amp; Affiliations
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-16 opacity-50 grayscale transition-all duration-700 hover:grayscale-0">
            {partners.map((partner) => (
              <div key={partner} className="flex items-center gap-2 text-xl font-extrabold text-ur-green-primary">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 9. WHY UR-SSS MATTERS ========== */}
      <section className="bg-white py-20 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-ur-green-primary lg:text-4xl">Why UR-SSS Matters</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">Bridging the distance between being a student and becoming a world-class surgeon.</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[16/10] h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-2 text-xs font-bold uppercase tracking-widest text-ur-green-secondary">{item.label}</div>
                  <h4 className="mb-4 text-xl font-bold text-ur-dark">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 10. FINAL CTA ========== */}
      <section className="relative overflow-hidden bg-ur-green-primary py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=85"
            alt=""
            className="h-full w-full object-cover opacity-20 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ur-green-primary/90 via-ur-green-primary/50 to-transparent" />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Join the Next Generation of Surgical Leaders
            </h2>
            <p className="mx-auto mb-10 mt-4 max-w-2xl text-lg text-white/80">
              Whether you&apos;re a first-year student or a final-year intern, UR-SSS provides the community and tools to excel in your surgical career journey.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <button className="rounded-lg bg-white px-10 py-4 font-bold text-ur-green-primary shadow-xl transition-all hover:scale-105 hover:bg-ur-green-light">
                Join UR-SSS
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-10 py-4 font-bold text-white transition-all hover:bg-white/10">
                Contact Us
                <FaEnvelope size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
