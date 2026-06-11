import { motion } from 'framer-motion'
import { FaArrowRight, FaStethoscope, FaBookMedical, FaUserFriends, FaHandsHelping, FaLaptopMedical } from 'react-icons/fa'

const directorates = [
  {
    icon: FaStethoscope,
    title: 'Surgical Skills',
    description: 'Suturing, knot tying, instrument handling, and simulation-based clinical preparation.',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=85',
  },
  {
    icon: FaBookMedical,
    title: 'Education & Research',
    description: 'Journal clubs, research mentorship, data skills, and presentation support.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=85',
  },
  {
    icon: FaUserFriends,
    title: 'Mentorship & Careers',
    description: 'Guidance from senior students, residents, surgeons, and professional networks.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=85',
  },
  {
    icon: FaHandsHelping,
    title: 'Community Outreach',
    description: 'Student-led public health activities and service projects across communities.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=85',
  },
  {
    icon: FaLaptopMedical,
    title: 'Innovation & IT',
    description: 'Digital tools, documentation systems, and technology for modern surgical learning.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85',
  },
]

export default function Directorates() {
  return (
    <section id="directorates" className="bg-white py-14 md:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 max-w-2xl md:mb-11"
        >
          <span className="section-kicker">Our framework</span>
          <h2 className="section-title">Five core directorates.</h2>
          <p className="section-copy mt-4">
            Each directorate gives members a clear place to learn, lead, serve, and prepare for surgical careers.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {directorates.map((directorate, index) => (
            <motion.article
              key={directorate.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={directorate.image}
                  alt={directorate.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-md bg-white text-ur-green-primary">
                  <directorate.icon size={18} />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-extrabold text-ur-dark">{directorate.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{directorate.description}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ur-green-primary">
                  Learn More
                  <FaArrowRight size={12} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 rounded-lg bg-ur-green-primary p-6 text-white md:flex md:items-center md:justify-between md:p-8"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl font-extrabold">Want to join?</h3>
            <p className="mt-2 text-sm leading-6 text-white/78">
              Become part of a growing network of medical students committed to surgical excellence.
            </p>
          </div>
          <button className="mt-5 rounded-md bg-white px-5 py-3 text-sm font-bold text-ur-green-primary md:mt-0">
            Become a Member
          </button>
        </motion.div>
      </div>
    </section>
  )
}
