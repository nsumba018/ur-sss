import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=85', label: 'Training' },
  { src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=700&q=85', label: 'Outreach' },
  { src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=700&q=85', label: 'Skills' },
  { src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=700&q=85', label: 'Research' },
  { src: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=700&q=85', label: 'Leadership' },
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
            <h2 className="section-title">Moments from our community.</h2>
          </div>
          <button className="btn-primary">
            Explore Gallery
            <FaArrowRight size={14} />
          </button>
        </motion.div>

        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[190px] md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-lg ${index === 0 ? 'col-span-2 row-span-2' : ''} ${index === 4 ? 'md:col-span-2' : ''}`}
            >
              <img src={image.src} alt={image.label} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-bold text-white">
                {image.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
