import { motion } from 'framer-motion'
import Gallery from '../sections/Gallery'

export default function GalleryPage() {
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
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-white/60">Gallery</span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Gallery & Media</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Moments captured from our workshops, outreach, conferences, and community activities.
            </p>
          </motion.div>
        </div>
      </section>

      <Gallery />
    </div>
  )
}
