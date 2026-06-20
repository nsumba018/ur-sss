import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=85', label: 'Community Outreach', size: 'xl' },
  { src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=85', label: 'Surgical Education', size: 'sm' },
  { src: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=85', label: 'Skills Lab Practice', size: 'sm' },
  { src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=85', label: 'Conference & Inspiration', size: 'md' },
  { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=85', label: 'Mentorship', size: 'md' },
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=85', label: 'Training & Education', size: 'sm' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ur-green-light py-14 md:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col gap-4 md:mb-11 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="section-kicker">Gallery</span>
            <h2 className="section-title">Moments from our community</h2>
          </div>
          <button className="btn-primary">
            Explore Gallery
            <FaArrowRight size={14} />
          </button>
        </motion.div>

        <div className="grid auto-rows-[140px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-lg ${
                image.size === 'xl' ? 'col-span-2 row-span-2' : ''
              } ${image.size === 'md' ? 'row-span-2' : ''} ${index === 5 ? 'md:col-span-2' : ''}`}
            >
              <img
                src={image.src}
                alt={image.label}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ur-green-primary/0 transition-colors duration-300 group-hover:bg-ur-green-primary/50" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
                {image.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 rounded-lg bg-ur-green-primary p-6 text-center text-white"
        >
          <h3 className="text-lg font-extrabold">See more?</h3>
          <p className="mt-1 text-sm text-white/70">Explore our full gallery of events and activities.</p>
          <button className="btn-primary mt-4 bg-white text-ur-green-primary hover:bg-ur-green-light">
            View Gallery
            <FaArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
