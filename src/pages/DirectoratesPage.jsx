import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaUsers, FaFlask, FaBookOpen, FaBrain, FaBullhorn, FaStethoscope, FaGraduationCap, FaShareAlt, FaShieldAlt, FaLightbulb, FaSitemap, FaComments, FaAward } from 'react-icons/fa'

const directorates = [
  {
    number: 'I',
    title: 'Surgical Skills',
    subtitle: 'Focused on bridging the gap between theory and practice. We organize hands-on workshops covering fundamental surgical techniques, from basic suturing and knot-tying to advanced simulation-based training.',
    items: ['Hands-on suturing workshops', 'Clinical simulation sessions', 'Peer-to-peer technical mentorship'],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=85',
    align: 'right',
  },
  {
    number: 'II',
    title: 'Education & Research',
    subtitle: 'Fostering a culture of scientific inquiry among students. This directorate oversees research projects, scientific writing workshops, and our signature Journal Clubs to keep members at the forefront of medical literature.',
    items: ['Research Projects', 'Journal Clubs'],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85',
    align: 'left',
    features: [
      { icon: FaFlask, title: 'Research Projects', desc: 'Active student-led surgical research initiatives.' },
      { icon: FaBookOpen, title: 'Journal Clubs', desc: 'Critical analysis of global surgical trends.' },
    ],
  },
  {
    number: 'III',
    title: 'Mentorship',
    subtitle: 'Connecting the surgeons of tomorrow with the leaders of today. Our mentorship programs pair students with established professionals to provide career guidance, shadowing opportunities, and professional network building.',
    items: [],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=85',
    align: 'right',
    highlight: {
      icon: FaBrain,
      label: 'Career Guidance',
      desc: 'Personalized pathways to residency and beyond.',
    },
  },
  {
    number: 'IV',
    title: 'Outreach & Events',
    subtitle: 'Expanding our impact beyond the classroom. We organize community health screenings, surgical awareness campaigns, and major society events that bring together the national surgical community.',
    items: [
      'Surgical health awareness programs in underserved regions across Rwanda.',
      'Annual society summits and prestigious surgical networking galas.',
    ],
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=85',
    align: 'left',
    dark: true,
  },
  {
    number: 'V',
    title: 'IT & Publications',
    subtitle: 'The digital voice of UR-SSS. This team manages our digital presence, branding, and all society publications, ensuring that our work is visible and accessible to the global academic community.',
    items: [],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
    align: 'right',
    tags: ['Web Management', 'Design & Branding', 'Digital Journals'],
  },
]

const skillsCards = [
  { icon: FaUsers, title: 'Leadership', desc: 'Managing cross-functional teams and coordinating complex institutional programs at a national level.' },
  { icon: FaSitemap, title: 'Coordination', desc: 'Mastering the logistics of international events, intensive workshops, and multi-center clinical sessions.' },
  { icon: FaComments, title: 'Communication', desc: 'Persuasive public speaking and high-impact professional writing for global surgical academic audiences.' },
  { icon: FaLightbulb, title: 'Strategy', desc: 'Developing long-term strategic visions for student-led surgical development and healthcare innovation.' },
]

const gainCards = [
  { icon: FaStethoscope, title: 'Clinical Skills' },
  { icon: FaGraduationCap, title: 'Research Portfolio' },
  { icon: FaShareAlt, title: 'Global Networks' },
  { icon: FaShieldAlt, title: 'Certifications' },
]

export default function DirectoratesPage() {
  return (
    <div className="overflow-hidden pt-20">
      {/* ========== HERO ========== */}
      <section className="relative h-[800px] overflow-hidden bg-ur-green-primary text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-ur-green-primary/95 via-ur-green-primary/70 to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=85"
            alt="Medical students in a modern facility"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="section-container relative z-20 flex h-full flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-8 inline-flex w-fit rounded-full bg-ur-green-primary/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
              How We Work
            </span>
            <h1 className="text-6xl font-extrabold leading-[1.05] sm:text-7xl max-w-[700px] mb-6">Our Directorates</h1>
            <p className="text-xl text-white/90 max-w-[580px] mb-12 leading-relaxed">
              Five dedicated teams working together to advance surgical education, mentorship, research, innovation, and student development.
            </p>
            <div className="flex gap-16">
              {[
                { number: '5', label: 'Directorates' },
                { number: '100%', label: 'Student-Led' },
                { number: '2014', label: 'Established' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-extrabold text-ur-green-sage">{stat.number}</div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== INTRODUCTION ========== */}
      <section className="bg-white py-24">
        <div className="section-container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=85"
              alt="Strategic Planning"
              className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-start pr-0 lg:pr-12"
          >
            <h2 className="mb-8 text-3xl font-bold leading-tight text-ur-dark lg:text-4xl">Building Opportunities Through Leadership</h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              At the heart of UR-SSS lies a structured ecosystem of specialized directorates. Each team is designed to provide students with specific skill sets, from clinical mastery to editorial excellence. Our collaborative model ensures that every member finds a path that aligns with their professional aspirations.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-ur-green-light/50 px-6 py-4">
                <FaUsers size={28} className="text-ur-green-primary" />
                <span className="text-sm font-bold text-ur-green-primary">Collaborative Culture</span>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-ur-green-light/50 px-6 py-4">
                <FaAward size={28} className="text-ur-green-primary" />
                <span className="text-sm font-bold text-ur-green-primary">Excellence Driven</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== DIRECTORATES ========== */}
      <section className="space-y-32 bg-ur-green-light py-24 lg:space-y-40">
        {directorates.map((dir, idx) => {
          const isLeft = dir.align === 'left'
          return (
            <div key={dir.title} className="section-container">
              {dir.dark ? (
                /* Dark card layout (Outreach & Events) */
                <div className="relative overflow-hidden rounded-[40px] bg-ur-green-primary p-10 text-white shadow-2xl lg:p-20">
                  <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 bg-[radial-gradient(circle_at_center,_white,_transparent)] pointer-events-none" />
                  <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="overflow-hidden rounded-2xl shadow-xl border-8 border-white/5"
                    >
                      <img src={dir.image} alt={dir.title} className="h-[480px] w-full object-cover" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="pl-0 lg:pl-8"
                    >
                      <span className="mb-4 block text-sm font-bold uppercase tracking-[0.25em] text-ur-green-sage">Directorate {dir.number}</span>
                      <h3 className="mb-8 text-3xl font-bold text-white lg:text-4xl">{dir.title}</h3>
                      <p className="mb-10 text-lg leading-relaxed text-white/80">{dir.subtitle}</p>
                      <div className="mb-12 space-y-4">
                        {dir.items.map((item) => (
                          <div key={item} className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
                            <FaBullhorn size={24} className="mt-0.5 shrink-0 text-ur-green-sage" />
                            <p className="text-white/80">{item}</p>
                          </div>
                        ))}
                      </div>
                      <button className="inline-flex items-center gap-2 rounded-xl bg-white px-12 py-4 text-base font-bold text-ur-green-primary transition hover:bg-ur-green-light">
                        View Events Calendar
                        <FaArrowRight size={16} />
                      </button>
                    </motion.div>
                  </div>
                </div>
              ) : (
                /* Standard alternating layout */
                <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-24 ${isLeft ? '' : ''}`}>
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="overflow-hidden rounded-2xl shadow-2xl h-[400px] lg:h-[540px]"
                    >
                      <img src={dir.image} alt={dir.title} className="h-full w-full object-cover" />
                    </motion.div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}
                  >
                    <span className={`mb-4 block text-sm font-bold uppercase tracking-[0.25em] text-ur-green-primary ${isLeft ? 'lg:text-right' : ''}`}>
                      Directorate {dir.number}
                    </span>
                    <h3 className={`mb-8 text-3xl font-bold text-ur-dark lg:text-4xl ${isLeft ? 'lg:text-right' : ''}`}>{dir.title}</h3>
                    <p className={`mb-10 text-lg leading-relaxed text-gray-600 ${isLeft ? 'lg:text-right' : ''}`}>{dir.subtitle}</p>

                    {/* Features grid (Education & Research) */}
                    {dir.features && (
                      <div className={`mb-12 grid grid-cols-2 gap-6 ${isLeft ? 'lg:ml-auto' : ''}`}>
                        {dir.features.map((f) => (
                          <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <f.icon size={28} className="mb-4 text-ur-green-primary" />
                            <h4 className="mb-1 text-lg font-bold text-ur-dark">{f.title}</h4>
                            <p className="text-sm text-gray-500">{f.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Highlight card (Mentorship) */}
                    {dir.highlight && (
                      <div className={`mb-12 flex items-center gap-6 rounded-2xl border border-gray-200 bg-ur-green-light/50 p-6 ${isLeft ? 'lg:ml-auto' : ''}`}>
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ur-green-primary text-white">
                          <dir.highlight.icon size={28} />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-ur-dark">{dir.highlight.label}</p>
                          <p className="text-sm text-gray-500">{dir.highlight.desc}</p>
                        </div>
                      </div>
                    )}

                    {/* Checklist items (Surgical Skills) */}
                    {dir.items.length > 0 && !dir.dark && (
                      <ul className={`mb-12 space-y-4 text-gray-600 ${isLeft ? 'lg:ml-auto lg:text-right' : ''}`}>
                        {dir.items.map((item) => (
                          <li key={item} className="flex items-center gap-4 text-base">
                            <FaCheckCircle className="shrink-0 text-ur-green-primary" size={20} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tags (IT & Publications) */}
                    {dir.tags && (
                      <div className={`mb-12 flex flex-wrap gap-3 ${isLeft ? 'lg:justify-end' : ''}`}>
                        {dir.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-ur-green-light px-6 py-2.5 text-sm font-bold text-ur-green-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <button className={`inline-flex w-fit items-center gap-2 rounded-xl border-2 border-ur-green-primary px-10 py-4 text-base font-bold text-ur-green-primary transition hover:bg-ur-green-primary hover:text-white ${isLeft ? 'lg:ml-auto' : ''}`}>
                      Explore
                      <FaArrowRight size={16} />
                    </button>
                  </motion.div>
                  {!isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="overflow-hidden rounded-2xl shadow-2xl h-[400px] lg:h-[540px]"
                    >
                      <img src={dir.image} alt={dir.title} className="h-full w-full object-cover" />
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </section>

      {/* ========== ECOSYSTEM DIAGRAM ========== */}
      <section className="bg-ur-green-light/30 py-24 overflow-hidden">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-ur-dark lg:text-4xl">Our Ecosystem</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-500">A unified student-led organization where specialized expertise converges to create a holistic professional environment.</p>
          </motion.div>

          <div className="relative mx-auto flex h-[500px] w-full max-w-[900px] items-center justify-center lg:h-[600px]">
            {/* Center Node */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="z-10 flex h-[180px] w-[180px] items-center justify-center rounded-full border-[10px] border-white/20 bg-ur-green-primary p-6 text-center text-2xl font-bold text-white shadow-2xl lg:h-[200px] lg:w-[200px] lg:text-3xl"
            >
              UR-SSS
            </motion.div>

            {/* Orbiting Nodes */}
            <div className="absolute inset-0">
              {[
                { label: 'Surgical Skills', top: '5%', left: '50%', x: '-50%', color: 'border-l-deep-green' },
                { label: 'Education & Research', top: '40%', left: '100%', y: '-50%', color: 'border-l-deep-green-secondary' },
                { label: 'Mentorship', top: '100%', left: '75%', y: '-100%', color: 'border-l-deep-green-accent' },
                { label: 'Outreach & Events', top: '100%', left: '25%', y: '-100%', color: 'border-l-primary' },
                { label: 'IT & Publications', top: '40%', left: '0%', y: '-50%', color: 'border-l-outline' },
              ].map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`absolute w-[160px] -translate-x-1/2 rounded-2xl border-l-[6px] border-ur-green-primary bg-white p-5 text-center shadow-xl ${
                    i === 0 ? 'border-l-ur-green-primary' : i === 1 ? 'border-l-ur-green-secondary' : i === 2 ? 'border-l-ur-green-accent' : i === 3 ? 'border-l-ur-green-primary' : 'border-l-gray-400'
                  }`}
                  style={{ top: node.top, left: node.left, transform: `translate(${node.x || '0'}, ${node.y || '0'})` }}
                >
                  <span className="text-sm font-bold text-ur-dark">{node.label}</span>
                </motion.div>
              ))}

              {/* Decorative lines */}
              <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                {[
                  [50, 50, 50, 15],
                  [50, 50, 90, 40],
                  [50, 50, 75, 85],
                  [50, 50, 25, 85],
                  [50, 50, 10, 40],
                ].map(([x1, y1, x2, y2], i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#316123" strokeWidth="0.3" strokeDasharray="2" />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LEADERSHIP SKILLS ========== */}
      <section className="bg-white py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold text-ur-dark lg:text-4xl">Develop Leadership Skills</h2>
            <p className="mb-16 max-w-2xl text-lg text-gray-500">We don&apos;t just teach surgery; we build leaders who can navigate complex healthcare environments.</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillsCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex min-h-[300px] flex-col items-start rounded-[2rem] border border-gray-100 bg-ur-green-light/30 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-ur-green-primary shadow-sm">
                  <card.icon size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-ur-dark">{card.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* What Members Gain */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative mt-20 overflow-hidden rounded-[40px] bg-ur-green-primary p-10 text-white lg:p-20"
          >
            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <div>
                <h2 className="mb-8 text-4xl font-bold leading-tight">What Members Gain</h2>
                <p className="mb-12 text-lg leading-relaxed text-white/80">
                  Membership in a directorate provides more than just a title. It&apos;s a transformative experience that prepares you for the clinical and leadership realities of modern surgery.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="mb-2 block text-4xl font-bold text-ur-green-sage">90%</div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/80">Technical Growth</p>
                    <p className="mt-1 text-sm text-white/60">Improvement in clinical technical proficiency reported by active members.</p>
                  </div>
                  <div>
                    <div className="mb-2 block text-4xl font-bold text-ur-green-sage">50+</div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/80">Annual Connections</p>
                    <p className="mt-1 text-sm text-white/60">Direct professional networking opportunities with world-renowned senior surgeons.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {gainCards.map((card) => (
                  <div key={card.title} className="cursor-default rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition hover:bg-white/20">
                    <card.icon size={32} className="mb-4 text-ur-green-sage" />
                    <h4 className="text-lg font-bold">{card.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== GALLERY ========== */}
      <section className="bg-ur-green-light py-24">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-3xl font-bold text-ur-dark lg:text-4xl"
          >
            Life within UR-SSS
          </motion.h2>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-8">
            {[
              { src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=85', cols: 'lg:col-span-1', rows: 'row-span-1', aspect: 'aspect-[4/3]' },
              { src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=85', cols: 'lg:col-span-1', rows: 'row-span-1', aspect: 'aspect-square' },
              { src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=85', cols: 'lg:col-span-1', rows: 'row-span-1', aspect: 'aspect-square' },
              { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=85', cols: 'lg:col-span-1', rows: 'row-span-1', aspect: 'aspect-[4/5]' },
              { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=85', cols: 'lg:col-span-1', rows: 'row-span-1', aspect: 'aspect-[4/5]' },
              { src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=85', cols: 'lg:col-span-1', rows: 'row-span-1', aspect: 'aspect-video' },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl shadow-lg transition hover:-translate-y-1 hover:shadow-xl ${img.aspect}`}
              >
                <img src={img.src} alt="" className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[60px] bg-ur-green-primary px-6 py-20 text-center shadow-2xl lg:px-16 lg:py-28"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=85"
                alt=""
                className="h-full w-full object-cover opacity-15"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ur-green-primary via-ur-green-primary/80 to-transparent" />
            </div>
            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="mb-8 text-4xl font-bold leading-tight text-white lg:text-6xl">Find Your Place in UR-SSS</h2>
              <p className="mx-auto mb-12 max-w-xl text-lg text-white/80">
                Whether you are interested in technical mastery, academic research, or community leadership, there is a directorate waiting for you.
              </p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <button className="rounded-2xl bg-ur-green-sage px-12 py-5 text-lg font-bold text-ur-dark shadow-xl transition hover:bg-white">
                  Join a Directorate
                </button>
                <button className="rounded-2xl border-2 border-white/40 px-12 py-5 text-lg font-bold text-white transition hover:border-white hover:bg-white/10">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
