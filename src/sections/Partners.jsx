import { motion } from 'framer-motion'

const partners = [
  { name: 'University of Rwanda', abbr: 'UR' },
  { name: 'Teaching Hospitals', abbr: 'TH' },
  { name: 'Medical Associations', abbr: 'MA' },
  { name: 'Global Surgery Partners', abbr: 'GSP' },
]

export default function Partners() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-gray-400 font-medium text-sm uppercase tracking-wider">
            Trusted by Leading Institutions
          </span>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-ur-green-primary transition-colors duration-300">
                  <span className="text-gray-400 font-bold text-xl group-hover:text-white transition-colors duration-300">
                    {partner.abbr}
                  </span>
                </div>
                <span className="text-gray-400 text-xs font-medium group-hover:text-ur-green-primary transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
