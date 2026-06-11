import { motion } from 'framer-motion'
import { FaArrowRight, FaBullseye, FaEye, FaUsers } from 'react-icons/fa'

const pillars = [
  {
    icon: FaBullseye,
    title: 'Mission',
    body: 'Equip medical students with practical surgical skills, research habits, and ethical clinical leadership.',
  },
  {
    icon: FaEye,
    title: 'Vision',
    body: 'Develop a strong pipeline of compassionate, globally competitive surgeons from Rwanda.',
  },
  {
    icon: FaUsers,
    title: 'Community',
    body: 'Connect students, residents, faculty, and partners through learning, service, and mentorship.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-ur-green-light py-14 md:py-20">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85"
                alt="Medical students collaborating"
                className="h-[360px] w-full object-cover sm:h-[440px]"
              />
            </div>
            <div className="absolute bottom-4 left-4 rounded-md bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
              <div className="text-2xl font-extrabold text-ur-green-primary">10+</div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">Years active</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <span className="section-kicker">About UR-SSS</span>
            <h2 className="section-title max-w-xl">Fostering academic rigor and surgical innovation.</h2>
            <p className="section-copy mt-5 max-w-2xl">
              Founded at the University of Rwanda College of Medicine and Health Sciences, UR-SSS helps students move from classroom knowledge to confident clinical practice through workshops, research, mentorship, and community outreach.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-ur-green-light text-ur-green-primary">
                    <pillar.icon size={18} />
                  </div>
                  <h3 className="font-extrabold text-ur-dark">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{pillar.body}</p>
                </div>
              ))}
            </div>

            <button className="btn-primary mt-7">
              Learn More
              <FaArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
