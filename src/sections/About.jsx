import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 rounded-md bg-ur-green-primary p-5 text-white shadow-lg"
            >
              <div className="text-2xl font-extrabold">10</div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-white/80">Years of<br />Excellence</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <span className="section-kicker">About UR-SSS</span>
            <h2 className="section-title max-w-xl">Fostering Academic Rigor & Surgical Innovation</h2>
            <p className="section-copy mt-5 max-w-2xl">
              Founded in 2014 at the College of Medicine & Health Sciences, UR-SSS is committed to medical education and professional advancement. We build pathways for students to operating theatres through research, mentorship, and leadership experiences.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-ur-green-light text-ur-green-primary">
                  <div className="h-5 w-5 rounded bg-ur-green-primary" />
                </div>
                <h3 className="font-extrabold text-ur-dark">Our Mission</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  To equip future surgeons with practical skills, research acumen, and professional networks.
                </p>
              </div>
              <div className="rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-ur-green-light text-ur-green-primary">
                  <div className="h-5 w-5 rounded bg-ur-green-secondary" />
                </div>
                <h3 className="font-extrabold text-ur-dark">Our Vision</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  To be the leading student surgical society in East Africa, producing world-class surgeons.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {['Mission', 'Vision', 'History', 'Leadership'].map((tab) => (
                <button
                  key={tab}
                  className={`rounded-md px-4 py-2 text-sm font-bold transition-colors ${
                    tab === 'Mission'
                      ? 'bg-ur-green-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-ur-green-light'
                  }`}
                >
                  {tab}
                </button>
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
