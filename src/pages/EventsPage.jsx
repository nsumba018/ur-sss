import { motion } from 'framer-motion'
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaQuoteLeft, FaBullhorn, FaHandsHelping, FaHeartbeat, FaSyringe, FaClinicMedical, FaFlask, FaUserMd, FaMicrophoneAlt, FaSearch, FaUserCircle } from 'react-icons/fa'

const academicEvents = [
  {
    title: 'Surgical Skills Workshop',
    desc: 'Mastering the art of suturing and tissue handling through hands-on practice.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=85',
  },
  {
    title: 'Guest Surgeon Lecture Series',
    desc: 'Leading international surgeons share clinical insights and professional paths.',
    icon: true,
  },
  {
    title: 'Research Presentation Day',
    desc: 'Showcasing innovative student-led research in surgical sciences and public health.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=85',
  },
  {
    title: 'Clinical Simulation Training',
    desc: 'Immersive high-fidelity simulation training for emergency surgical response.',
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=85',
  },
]

const outreachPrograms = [
  {
    icon: FaBullhorn,
    title: 'Community Health Awareness Campaign',
    desc: 'Educating local residents on non-communicable diseases and surgical conditions often requiring early diagnosis.',
  },
  {
    title: 'School Health Education Initiative',
    desc: 'Inspiring the next generation by speaking at secondary schools about health careers and preventive medicine.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=85',
  },
  {
    title: 'Blood Donation Mobilization',
    desc: 'Organizing campus-wide drives to ensure surgical patients have access to life-saving blood supplies.',
    image: 'https://images.unsplash.com/photo-1612277795421-9bc770e3e6c0?auto=format&fit=crop&w=800&q=85',
  },
  {
    title: 'Community Screening Day',
    desc: 'Assisting health officials in conducting vital signs screenings and data recording in rural sectors.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=85',
  },
  {
    title: 'First Aid & Emergency Awareness',
    desc: 'Training community members in basic life-saving maneuvers and emergency response protocols.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=85',
  },
]

const calendar = [
  { month: 'January', event: 'Orientation' },
  { month: 'March', event: 'Skills Workshop' },
  { month: 'May', event: 'School Initiative' },
  { month: 'July', event: 'Research Day' },
  { month: 'September', event: 'Community Screening' },
  { month: 'October', event: 'Global Symposium' },
  { month: 'November', event: 'Blood Donation' },
]

const stories = [
  {
    quote: 'The suturing workshop wasn\'t just about technique; it was the first time I truly felt like a surgeon in training. The precision required changed my perspective.',
    name: 'Samuel Mugisha',
    role: 'Workshop Participant',
    initials: 'SM',
  },
  {
    quote: 'Presenting my research poster at the symposium was daunting, but the mentorship I received beforehand was world-class. It opened doors for residency.',
    name: 'Alice Keza',
    role: 'Research Volunteer',
    initials: 'AK',
  },
  {
    quote: 'Outreach taught me that surgery starts in the community. Educating families on screening means we catch cases early enough to actually make a difference.',
    name: 'John Ndayisaba',
    role: 'Outreach Volunteer',
    initials: 'JN',
  },
]

export default function EventsPage() {
  return (
    <div className="overflow-hidden pt-20">
      {/* ========== HERO ========== */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-ur-green-primary text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ur-green-primary/80 to-ur-green-primary/40" />
        </div>
        <div className="section-container relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">Events & Outreach</h1>
            <p className="mb-10 mt-4 max-w-xl text-lg leading-relaxed text-ur-green-sage">
              Creating opportunities for learning, leadership, service, and community impact through workshops, conferences, mentorship, and outreach initiatives.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-xl bg-ur-green-sage px-8 py-4 font-bold text-ur-dark transition hover:scale-105">
                Explore Events
              </button>
              <button className="rounded-xl border-2 border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white/10">
                Community Impact
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== FEATURED EVENT ========== */}
      <section className="bg-white py-20 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-ur-green-light/30 shadow-xl md:flex-row"
          >
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85"
                alt=""
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
              <span className="mb-3 text-xs font-bold uppercase tracking-widest text-ur-green-primary">FLAGSHIP TRAINING</span>
              <h2 className="mb-4 text-2xl font-bold text-ur-dark lg:text-3xl">UR-SSS Infection Control Training & Surgical Materials Workshop</h2>
              <p className="mb-6 text-base leading-relaxed text-gray-600">
                Practical training in infection prevention, theatre protocols, and surgical instrument management. This workshop equips students with fundamental skills required for safe operating room environments.
              </p>
              <div className="mb-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-ur-green-primary" size={18} />
                  <span className="text-sm font-semibold text-ur-dark">Oct 24, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-ur-green-primary" size={18} />
                  <span className="text-sm font-semibold text-ur-dark">Kigali Skills Lab</span>
                </div>
              </div>
              <button className="self-start rounded-lg bg-ur-green-primary px-8 py-3 font-bold text-white transition hover:shadow-lg">
                Register Today
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== ACADEMIC EVENTS ========== */}
      <section className="bg-ur-green-light py-20 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-ur-dark lg:text-4xl">Academic Excellence</h2>
            <div className="mt-2 h-1.5 w-20 rounded-full bg-ur-green-primary" />
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {academicEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-48 items-center justify-center overflow-hidden bg-ur-green-light/50">
                  {event.icon ? (
                    <FaFlask size={48} className="text-ur-green-primary" />
                  ) : (
                    <img src={event.image} alt={event.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-ur-dark">{event.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-500">{event.desc}</p>
                  <button className="inline-flex items-center gap-2 text-sm font-bold text-ur-green-primary transition hover:gap-3 group/link">
                    Learn More
                    <FaArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== IMPACT STATS ========== */}
      <section className="bg-ur-green-primary py-16">
        <div className="section-container">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { number: '10+', label: 'Outreach Events' },
              { number: '500+', label: 'Community Reached' },
              { number: '100+', label: 'Student Volunteers' },
              { number: '20+', label: 'Active Partnerships' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="text-3xl font-bold text-white lg:text-4xl">{stat.number}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-widest text-ur-green-sage">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COMMUNITY OUTREACH ========== */}
      <section className="bg-white py-20 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold text-ur-dark lg:text-4xl">Serving Beyond the Classroom</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Applying knowledge, leadership, and service to improve community health awareness and foster a culture of health across the nation.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {outreachPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition ${
                  program.icon ? 'p-8 hover:-translate-y-2' : 'hover:-translate-y-2'
                }`}
              >
                {program.icon ? (
                  <>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-ur-green-light text-ur-green-primary">
                      <program.icon size={24} />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-ur-dark">{program.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{program.desc}</p>
                  </>
                ) : (
                  <>
                    <div className="h-40 overflow-hidden">
                      <img src={program.image} alt={program.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-bold text-ur-dark">{program.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-500">{program.desc}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ACTIVITIES CALENDAR ========== */}
      <section className="overflow-hidden bg-ur-green-light/80 py-20 md:py-24">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-3xl font-bold text-ur-dark lg:text-4xl"
          >
            Activities Calendar
          </motion.h2>

          <div className="relative mt-12">
            <div className="absolute left-0 top-1/2 hidden h-1 w-full -translate-y-1/2 bg-gray-300 md:block" />
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-7">
              {calendar.map((item, i) => (
                <motion.div
                  key={item.month}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="relative z-10 text-center"
                >
                  <div className={`mx-auto mb-4 h-8 w-8 rounded-full border-4 border-white shadow-md ${
                    i % 2 === 0 ? 'bg-ur-green-primary' : 'bg-ur-green-secondary'
                  }`} />
                  <div className="font-bold text-ur-dark">{item.month}</div>
                  <div className="mt-2 inline-block rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-ur-green-primary shadow-sm">
                    {item.event}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALLERY MASONRY ========== */}
      <section className="bg-white py-20 md:py-24">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-3xl font-bold text-ur-dark lg:text-4xl"
          >
            Moments in Action
          </motion.h2>

          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl group"
            >
              <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=85" alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex flex-col justify-end bg-black/0 p-6 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
                <p className="font-bold text-white">Rwandan Plaza Outreach</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="relative overflow-hidden rounded-2xl group"
            >
              <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=85" alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl group"
            >
              <img src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=600&q=85" alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative col-span-2 overflow-hidden rounded-2xl group"
            >
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85" alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== MEMBER STORIES ========== */}
      <section className="bg-ur-green-primary py-20 md:py-24">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-3xl font-bold text-white lg:text-4xl"
          >
            Voices from the Field
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-lg backdrop-blur-sm"
              >
                <FaQuoteLeft size={28} className="mb-4 text-ur-green-sage" />
                <p className="mb-6 text-sm leading-relaxed italic text-white/90">&ldquo;{story.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ur-green-sage font-bold text-ur-dark">
                    {story.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{story.name}</p>
                    <p className="text-xs text-ur-green-sage">{story.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="relative flex items-center justify-center overflow-hidden py-24 text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ur-green-primary/80" />
        </div>
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Learn. Lead. Serve.</h2>
            <p className="mx-auto mb-8 mt-4 max-w-xl text-lg text-ur-green-sage">
              Be part of the movement shaping the future of surgery in Rwanda and beyond.
            </p>
            <button className="rounded-xl bg-white px-10 py-4 text-lg font-extrabold text-ur-green-primary shadow-2xl transition hover:bg-ur-green-light">
              Join UR-SSS
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
