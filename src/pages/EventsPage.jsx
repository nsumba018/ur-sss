import { motion } from 'framer-motion'
import { FaCalendar, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'
import Events from '../sections/Events'

const pastEvents = [
  {
    title: 'Community Health Screening',
    location: 'Rwamagana District',
    desc: 'Provided blood pressure, glucose, and vision screening to over 200 community members.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=85',
  },
  {
    title: 'Surgical Career Symposium',
    location: 'UR College of Medicine',
    desc: 'Panel discussions with Rwandan surgeons on career pathways and residency preparation.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=85',
  },
  {
    title: 'Basic Suturing Workshop',
    location: 'Skills Lab, CMHS',
    desc: 'Intensive hands-on training for 40 medical students on suturing techniques.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=85',
  },
]

export default function EventsPage() {
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
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-white/60">Events</span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Events & Outreach</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Workshops, rounds, research activities, and community programs designed for active participation.
            </p>
          </motion.div>
        </div>
      </section>

      <Events />

      <section className="bg-ur-green-light py-16 md:py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 max-w-2xl"
          >
            <span className="section-kicker">Highlights</span>
            <h2 className="section-title">Past Events</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={event.image} alt={event.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-ur-dark">{event.title}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                    <FaMapMarkerAlt size={12} className="text-ur-green-primary" />
                    {event.location}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
