import { motion } from 'framer-motion'
import { FaArrowRight, FaStethoscope, FaBook, FaHandsHelping, FaUserFriends, FaLaptopCode } from 'react-icons/fa'
import FeaturedOpportunity from '../sections/FeaturedOpportunity'

const programs = [
  {
    title: 'Surgical Skills Training',
    desc: 'Hands-on suturing, knot-tying, and instrument handling workshops for preclinical and clinical students.',
    icon: FaStethoscope,
  },
  {
    title: 'Research Mentorship',
    desc: 'Structured guidance on study design, data collection, manuscript writing, and conference presentation.',
    icon: FaBook,
  },
  {
    title: 'Community Outreach',
    desc: 'Student-led health campaigns providing education and basic screening to underserved communities.',
    icon: FaHandsHelping,
  },
  {
    title: 'Leadership Development',
    desc: 'Workshops on team management, project coordination, and professional communication for future leaders.',
    icon: FaUserFriends,
  },
  {
    title: 'Academic Conferences',
    desc: 'Annual symposiums and guest lectures connecting students with practicing surgeons and researchers.',
    icon: FaLaptopCode,
  },
]

export default function ProgramsPage() {
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
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-white/60">Programs</span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Programs & Opportunities</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Discover the full range of programs designed to build your surgical career from day one.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-ur-green-light text-ur-green-primary">
                  <program.icon size={24} />
                </div>
                <h3 className="text-lg font-extrabold text-ur-dark">{program.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{program.desc}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ur-green-primary transition hover:gap-3">
                  Learn More <FaArrowRight size={12} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedOpportunity />
    </div>
  )
}
