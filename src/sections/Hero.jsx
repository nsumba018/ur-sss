import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'

const highlights = ['Surgical Skills', 'Research', 'Professional Growth']

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden bg-ur-green-primary text-white md:min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=85"
          alt="Medical students in a practical training session"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ur-green-primary/70 via-ur-green-primary/78 to-ur-green-primary" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ur-green-light to-transparent" />
      </div>

      <div className="section-container relative z-10 flex min-h-[760px] flex-col justify-end pb-10 pt-28 md:min-h-screen lg:justify-center lg:pb-20">
        <div className="grid items-end gap-7 lg:grid-cols-[1.05fr_0.85fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/85">Academic Excellence</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.04] tracking-normal text-balance sm:text-5xl lg:text-[3.5rem]">
              Empowering the Next Generation of Surgeons in Rwanda
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
              UR-SSS is a student-led academic society advancing surgical education, research, mentorship, and innovation at the University of Rwanda.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button className="btn-primary bg-white text-ur-green-primary hover:bg-ur-green-light">
                Join UR-SSS
                <FaArrowRight size={14} />
              </button>
              <button className="btn-secondary border-white/45 text-white hover:border-white hover:bg-white hover:text-ur-green-primary">
                Explore Programs
              </button>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-lg bg-white p-5 text-ur-dark shadow-2xl lg:mb-4"
          >
            <div className="relative h-44 overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85"
                alt="Surgical instruments and training materials"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-ur-green-primary px-3 py-1 text-xs font-bold text-white">
                Applications Open
              </span>
            </div>
            <div className="pt-4">
              <h2 className="text-lg font-extrabold leading-snug">Medical Student Training & Surgical Materials Workshop</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Practical preparation for clinical and surgical environments.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span key={item} className="rounded-full bg-ur-green-light px-3 py-1 text-xs font-semibold text-ur-green-primary">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {['Hands-on surgical practice', 'Expert mentorship included', 'Certification upon completion'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-ur-green-primary" size={14} />
                    {item}
                  </div>
                ))}
              </div>
              <button className="btn-primary mt-5 w-full bg-ur-green-primary text-white hover:bg-ur-green-secondary">
                Apply Now
              </button>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
