import { motion } from 'framer-motion'

const partners = [
  { name: 'University of Rwanda', abbr: 'UR' },
  { name: 'Teaching Hospitals', abbr: 'TH' },
  { name: 'Medical Associations', abbr: 'MA' },
  { name: 'Global Surgery Partners', abbr: 'GSP' },
]

export default function Partners() {
  return (
    <section className="border-t border-gray-100 bg-white py-14 md:py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
            Trusted by Leading Institutions
          </span>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="group flex cursor-pointer flex-col items-center gap-2"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 transition-colors duration-300 group-hover:bg-ur-green-primary">
                <span className="text-xl font-extrabold text-gray-400 transition-colors duration-300 group-hover:text-white">
                  {partner.abbr}
                </span>
              </div>
              <span className="text-center text-xs font-bold uppercase tracking-[0.1em] text-gray-400 transition-colors duration-300 group-hover:text-ur-green-primary">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
