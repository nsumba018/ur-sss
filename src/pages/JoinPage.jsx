import { motion } from 'framer-motion'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'

const benefits = [
  'Access to surgical skills workshops',
  'Research mentorship and collaboration',
  'Networking with surgeons and residents',
  'Community outreach opportunities',
  'Leadership and project management experience',
  'Conference and symposium participation',
]

export default function JoinPage() {
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
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-white/60">Join</span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Become a Member</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Join the University of Rwanda Surgical Students Society and take the first step toward a career in surgery.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-extrabold text-ur-dark">Why Join UR-SSS?</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Membership is open to all University of Rwanda medical students passionate about surgery.
              </p>

              <div className="mt-6 space-y-3">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-ur-green-primary" size={18} />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-gray-100 bg-ur-green-light p-8 shadow-sm"
            >
              <h2 className="text-xl font-extrabold text-ur-dark">Membership Application</h2>
              <p className="mt-2 text-sm text-gray-600">Fill in your details to apply.</p>

              <form className="mt-6 space-y-4">
                <input type="text" placeholder="Full Name" className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:outline-none" />
                <input type="email" placeholder="Email Address" className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:outline-none" />
                <input type="text" placeholder="Phone Number" className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:outline-none" />
                <select className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-500 focus:border-ur-green-primary focus:outline-none">
                  <option>Year of Study</option>
                  <option>Year 1</option>
                  <option>Year 2</option>
                  <option>Year 3</option>
                  <option>Year 4</option>
                  <option>Year 5</option>
                  <option>Year 6</option>
                </select>
                <textarea rows={3} placeholder="Why do you want to join UR-SSS?" className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-ur-dark placeholder-gray-400 focus:border-ur-green-primary focus:outline-none" />
                <button className="btn-primary w-full">
                  Submit Application
                  <FaArrowRight size={14} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
