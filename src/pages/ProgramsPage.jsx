import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaFlask, FaUserMd, FaMicrophoneAlt, FaHandsHelping, FaChevronDown, FaQuoteLeft, FaStar, FaGraduationCap, FaUsers, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const programs = [
  {
    tag: 'Skills Lab',
    title: 'Surgical Skills',
    desc: 'Hands-on workshops covering suturing, knot-tying, and basic instrument handling under expert supervision.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=85',
  },
  {
    tag: 'Academic Pillar',
    title: 'Research & Academic',
    desc: 'Engage in collaborative clinical research, poster presentations, and journal club discussions.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=85',
    dark: true,
  },
  {
    tag: 'Career Growth',
    title: 'Mentorship',
    desc: 'Connecting medical students with experienced surgeons for guidance, shadowing, and career planning.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=85',
    dark: true,
  },
  {
    tag: 'Professionalism',
    title: 'Leadership',
    desc: 'Develop essential soft skills, project management, and organizational leadership through Society roles.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=85',
  },
  {
    tag: 'Events',
    title: 'Conferences',
    desc: 'Opportunity to attend and network at regional and international surgical summits and symposiums.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=85',
  },
  {
    tag: 'Service',
    title: 'Community Outreach',
    desc: 'Impact society through health education programs and surgical screening initiatives in rural areas.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=85',
  },
]

const journey = [
  { step: '01', title: 'Join Society', desc: 'Register as an official member to access all resources and networks.' },
  { step: '02', title: 'Skill Lab', desc: 'Attend basic workshops and gain technical proficiency in surgical tasks.' },
  { step: '03', title: 'Engage', desc: 'Participate in research projects or mentorship pairings with consultants.' },
  { step: '04', title: 'Lead', desc: 'Take up leadership roles and prepare for your surgical residency.' },
]

const testimonials = [
  {
    name: 'Jean Pierre N.',
    role: 'Research Participant',
    quote: 'Participating in the Academic Directorate research cohort allowed me to publish my first abstract before graduation. It completely changed my perspective on clinical evidence.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Alice M.',
    role: 'Workshop Graduate',
    quote: 'The suturing workshops gave me the confidence I needed for my clinical rotations. Surgeons were impressed by my knot-tying skills on day one!',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'David K.',
    role: 'Former Director',
    quote: 'Leading the Events Directorate taught me more about management and professional networking than any lecture could. It\'s a leadership school for surgeons.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80',
  },
]

const faqs = [
  { q: 'Who is eligible to join UR-SSS programs?', a: 'All currently enrolled medical students at the University of Rwanda (CMHS) are eligible to join the society and participate in our programs.' },
  { q: 'Are there fees for the skills workshops?', a: 'Most basic workshops are included in the annual membership fee. Specialized certifications may have a small material fee to cover high-quality surgical tools.' },
  { q: 'How do I apply for a leadership position?', a: 'Directorate leadership calls are opened annually before the start of the academic year. Application forms are distributed via our newsletter and social media channels.' },
]

function Accordion({ q, a, isOpen, onClick }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="font-bold text-ur-dark">{q}</span>
        <FaChevronDown
          size={16}
          className={`shrink-0 text-ur-green-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 px-6 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm leading-relaxed text-gray-600">{a}</p>
      </div>
    </div>
  )
}

export default function ProgramsPage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="overflow-hidden pt-20">
      {/* ========== HERO ========== */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-ur-green-primary text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ur-green-primary/95 via-ur-green-primary/80 to-transparent" />
        </div>
        <div className="section-container relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="mb-6 inline-flex w-fit rounded-full bg-ur-green-accent/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ur-green-sage">
              Programs & Opportunities
            </span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Learn. Practice.<br />Research. Lead.
            </h1>
            <p className="mb-10 mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Explore the workshops, mentorship programs, research initiatives, leadership opportunities, and professional experiences available through UR-SSS.
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-white/20 pt-8 md:grid-cols-4">
              {[
                { number: '15+', label: 'Hands-On Workshops' },
                { number: '10+', label: 'Research Projects' },
                { number: '50+', label: 'Mentees Placed' },
                { number: '20+', label: 'Leader Roles' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold text-ur-green-sage lg:text-3xl">{stat.number}</div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== INTRODUCTION ========== */}
      <section className="bg-white py-20 md:py-24">
        <div className="section-container">
          <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-ur-dark lg:text-4xl">Opportunities That Shape Future Surgeons</h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                The University of Rwanda Surgical Students Society provides a platform where academic theory meets practical application. We bridge the gap between classroom learning and the operating theater through structured programs designed for students at every stage of their medical journey.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaCheckCircle, text: 'Standardized surgical skills curriculum' },
                  { icon: FaUsers, text: 'Direct access to consultant mentors' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4 font-semibold text-ur-dark">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ur-green-light text-ur-green-primary">
                      <item.icon size={20} />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85"
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-ur-green-primary p-6 text-white shadow-xl md:block">
                <p className="text-lg font-bold italic">&ldquo;Practice makes permanent.&rdquo;</p>
                <p className="mt-2 text-sm text-white/70">— Society Motto</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CORE PROGRAMS ========== */}
      <section className="bg-ur-green-light py-20 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="text-3xl font-bold text-ur-dark lg:text-4xl">Core Society Programs</h2>
            <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-ur-green-secondary" />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`group flex flex-col overflow-hidden rounded-xl shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  program.dark ? 'bg-ur-green-primary text-white' : 'bg-white'
                }`}
              >
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className={`flex flex-1 flex-col p-6 ${program.dark ? 'bg-ur-green-primary' : ''}`}>
                  <span className={`mb-2 block text-xs font-bold uppercase tracking-widest ${
                    program.dark ? 'text-ur-green-sage' : 'text-ur-green-secondary'
                  }`}>
                    {program.tag}
                  </span>
                  <h3 className={`mb-3 text-xl font-bold ${program.dark ? 'text-white' : 'text-ur-dark'}`}>
                    {program.title}
                  </h3>
                  <p className={`mb-6 flex-1 text-sm leading-relaxed ${
                    program.dark ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    {program.desc}
                  </p>
                  <button className={`mt-auto inline-flex items-center gap-2 text-sm font-bold transition hover:gap-4 ${
                    program.dark ? 'text-ur-green-sage' : 'text-ur-green-primary'
                  }`}>
                    Learn more
                    <FaArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED OPPORTUNITY ========== */}
      <section className="bg-white py-20 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex min-h-[400px] flex-col overflow-hidden rounded-xl bg-gradient-to-br from-ur-green-primary to-ur-green-secondary shadow-2xl md:flex-row"
          >
            <div className="flex flex-1 flex-col justify-center p-8 text-white md:p-14">
              <span className="mb-6 inline-flex w-fit rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                Applications Open
              </span>
              <h2 className="mb-6 text-2xl font-bold leading-tight lg:text-3xl">
                UR-SSS Infection Control Training & Surgical Materials Workshop
              </h2>
              <p className="mb-10 max-w-xl text-base leading-relaxed text-white/80">
                Join our premier intensive workshop designed to master the fundamentals of sterility, hospital infection control protocols, and advanced surgical material handling. This certified program is mandatory for students wishing to participate in advanced shadowing.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-lg bg-white px-8 py-3 font-bold text-ur-green-primary transition hover:bg-ur-green-light">
                  Register Now
                </button>
                <button className="rounded-lg border border-white/30 px-8 py-3 font-bold text-white transition hover:bg-white/10">
                  Download Syllabus
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center border-t border-white/10 bg-black/10 p-8 md:w-[300px] md:border-l md:border-t-0">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                  <FaCalendarAlt size={32} className="text-ur-green-sage" />
                </div>
                <h4 className="text-xl font-bold text-white">October 12-14</h4>
                <div className="mt-2 flex items-center justify-center gap-2 text-sm text-white/60">
                  <FaMapMarkerAlt size={14} />
                  <span>CHUK Skills Lab</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== MEMBER JOURNEY ========== */}
      <section className="overflow-hidden bg-ur-green-light py-20 md:py-24">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-3xl font-bold text-ur-dark lg:text-4xl"
          >
            The Member Journey
          </motion.h2>

          <div className="relative mx-auto max-w-5xl px-4">
            <div className="absolute left-8 top-8 hidden h-[2px] w-[calc(100%-4rem)] bg-gray-300 md:block" />
            <div className="relative z-10 grid gap-10 md:grid-cols-4">
              {journey.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-ur-green-light bg-ur-green-primary text-lg font-bold text-white shadow-lg transition duration-300 hover:scale-110">
                    {step.step}
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-ur-dark">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-500">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SUCCESS STORIES ========== */}
      <section className="bg-white py-20 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="text-3xl font-bold text-ur-dark lg:text-4xl">Voices of Impact</h2>
            <p className="mt-3 text-gray-500">Hear from students who have excelled through UR-SSS programs.</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl bg-ur-green-light/50 p-8"
              >
                <div className="mb-6 flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="h-16 w-16 rounded-full border-2 border-ur-green-primary/20 object-cover" />
                  <div>
                    <h4 className="font-bold text-ur-dark">{t.name}</h4>
                    <p className="text-sm font-medium text-ur-green-secondary">{t.role}</p>
                  </div>
                </div>
                <FaQuoteLeft size={16} className="mb-3 text-ur-green-sage" />
                <p className="text-sm leading-relaxed text-gray-600 italic">{t.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="bg-ur-green-light py-20 md:py-24">
        <div className="section-container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-3xl font-bold text-ur-dark lg:text-4xl"
          >
            Common Questions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <Accordion
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ur-green-primary/95 mix-blend-multiply" />
        </div>
        <div className="section-container relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">Start Building Your Surgical Future Today</h2>
            <p className="mx-auto mb-12 mt-6 max-w-2xl text-lg text-white/80">
              Join a community of dedicated medical students and take the first step towards surgical excellence through practice and mentorship.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button className="rounded-lg bg-white px-10 py-4 font-bold text-ur-green-primary shadow-xl transition hover:scale-105">
                Become a Member
              </button>
              <button className="rounded-lg border-2 border-white/50 px-10 py-4 font-bold text-white transition hover:bg-white/10">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
