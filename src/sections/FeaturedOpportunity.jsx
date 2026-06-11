import { motion } from 'framer-motion'
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function FeaturedOpportunity() {
  return (
    <section id="programs" className="bg-ur-green-light py-14 md:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-lg bg-white shadow-xl shadow-ur-green-primary/10 lg:grid lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1581093458791-9d09f6b6696d?auto=format&fit=crop&w=1000&q=85"
              alt="Surgical workshop training materials"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ur-green-primary/80 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-ur-green-primary">
              Featured
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <span className="section-kicker">Open opportunity</span>
            <h2 className="section-title">Infection Control Training & Surgical Materials Workshop</h2>
            <p className="section-copy mt-4">
              A practical workshop focused on aseptic technique, sterile fields, instrument handling, and operating room discipline for students preparing for clinical rotations.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md bg-ur-green-light p-4">
                <FaCalendarAlt className="text-ur-green-primary" size={18} />
                <div className="mt-2 text-sm font-bold text-ur-dark">5-day intensive</div>
                <div className="mt-1 text-sm text-gray-600">Hands-on practical sessions</div>
              </div>
              <div className="rounded-md bg-ur-green-light p-4">
                <FaMapMarkerAlt className="text-ur-green-primary" size={18} />
                <div className="mt-2 text-sm font-bold text-ur-dark">CMHS Skills Lab</div>
                <div className="mt-1 text-sm text-gray-600">University of Rwanda</div>
              </div>
            </div>

            <button className="btn-primary mt-7">
              Register Today
              <FaArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
