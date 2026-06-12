import { motion } from 'framer-motion'
import { FaUserPlus, FaGraduationCap, FaFlask, FaChalkboardTeacher, FaUsers, FaRocket } from 'react-icons/fa'

const steps = [
  { icon: FaUserPlus, label: 'Join', description: 'Become a member' },
  { icon: FaGraduationCap, label: 'Train', description: 'Build foundational skills' },
  { icon: FaFlask, label: 'Research', description: 'Contribute to science' },
  { icon: FaChalkboardTeacher, label: 'Mentor', description: 'Guide younger students' },
  { icon: FaUsers, label: 'Lead', description: 'Direct society projects' },
  { icon: FaRocket, label: 'Launch', description: 'Begin your surgical career' },
]

export default function Journey() {
  return (
    <section className="bg-ur-green-primary py-14 text-white md:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl text-center md:mx-auto lg:mb-16"
        >
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-white/55">Our Pathway</span>
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">The Member&apos;s Journey</h2>
          <p className="mt-4 text-sm leading-6 text-white/72 sm:text-base">
            A visual roadmap of your growth within the society: from undergraduate to residency.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[10%] right-[10%] top-[2.75rem] hidden h-0.5 bg-white/15 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-colors hover:border-white hover:bg-white group"
                >
                  <step.icon size={20} className="text-white transition-colors group-hover:text-ur-green-primary" />
                </motion.div>
                <div className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/45">Step {index + 1}</div>
                <h3 className="mt-1 text-base font-extrabold">{step.label}</h3>
                <p className="mt-1 text-sm leading-5 text-white/65">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
