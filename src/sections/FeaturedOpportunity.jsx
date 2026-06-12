import { motion } from 'framer-motion'

export default function FeaturedOpportunity() {
  return (
    <section id="programs" className="bg-ur-green-light py-14 md:py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-ur-green-primary via-ur-green-secondary to-ur-green-accent px-8 py-12 lg:p-16"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white" />
          </div>

          <div className="relative z-10 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white">
                Opportunity
              </span>
              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                Infection Control Training & Surgical Materials Workshop
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/80 sm:text-base">
                Practical preparation for clinical and surgical environments. Master sterile techniques, aseptic protocols, and instrument handling in this intensive 5-day workshop.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shrink-0 rounded-xl bg-white px-8 py-4 text-base font-extrabold text-ur-green-primary shadow-lg transition hover:bg-ur-green-light"
            >
              Register Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
