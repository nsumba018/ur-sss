import { motion } from 'framer-motion'
import { FaChalkboardTeacher, FaFlask, FaGraduationCap, FaRocket, FaUserPlus, FaUsers } from 'react-icons/fa'

const steps = [
  { icon: FaUserPlus, label: 'Join', description: 'Become a member' },
  { icon: FaGraduationCap, label: 'Train', description: 'Build clinical skills' },
  { icon: FaFlask, label: 'Research', description: 'Contribute evidence' },
  { icon: FaChalkboardTeacher, label: 'Mentor', description: 'Learn and guide' },
  { icon: FaUsers, label: 'Lead', description: 'Run projects' },
  { icon: FaRocket, label: 'Launch', description: 'Grow your career' },
]

export default function Journey() {
  return (
    <section className="bg-ur-green-primary py-14 text-white md:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-9 max-w-2xl"
        >
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-white/55">Member pathway</span>
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">From curiosity to surgical leadership.</h2>
          <p className="mt-4 text-sm leading-6 text-white/72 sm:text-base">
            A simple growth path for students who want practical skills, academic depth, and leadership experience.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-lg border border-white/14 bg-white/8 p-4 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-white text-ur-green-primary">
                <step.icon size={18} />
              </div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/45">Step {index + 1}</div>
              <h3 className="mt-1 font-extrabold">{step.label}</h3>
              <p className="mt-2 text-sm leading-5 text-white/65">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
