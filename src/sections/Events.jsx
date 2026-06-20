import { motion } from 'framer-motion'
import { FaArrowRight, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const events = [
  {
    day: '12',
    month: 'FEB',
    title: 'Surgical Workshop',
    location: 'CMHS Teaching Hospital',
    description: 'Hands-on suturing, knot-tying, and instrument handling session for preclinical students.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=85',
  },
  {
    day: '24',
    month: 'MAR',
    title: 'Research Presentation',
    location: 'UR Skills Lab',
    description: 'Student research presentations and poster sessions exploring general and sub-specialty surgery topics.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=85',
  },
  {
    day: '05',
    month: 'APR',
    title: 'Guest Lecture Series',
    location: 'Kigali Convention Center',
    description: 'Distinguished visiting surgeons share insights on global surgery, career pathways, and innovation.',
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=85',
  },
]

export default function Events() {
  return (
    <section id="events" className="bg-white py-14 md:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col gap-4 md:mb-11 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="section-kicker">Calendar</span>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-copy mt-4">Workshops, presentations, lectures, and community outreach designed for active participation.</p>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-bold text-ur-green-primary transition hover:gap-3">
            View full calendar
            <FaArrowRight size={12} />
          </button>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 shrink-0 overflow-hidden">
                <img src={event.image} alt={event.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-md bg-white px-3 py-2 text-center shadow-md">
                  <div className="text-xl font-extrabold leading-none text-ur-green-primary">{event.day}</div>
                  <div className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-gray-500">{event.month}</div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
                  <FaCalendar size={12} className="text-ur-green-primary" />
                  UR-SSS Event
                </div>
                <h3 className="text-lg font-extrabold text-ur-dark">{event.title}</h3>
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                  <FaMapMarkerAlt size={13} className="text-ur-green-primary" />
                  {event.location}
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">{event.description}</p>
                <button className="btn-primary mt-auto w-full border-2 border-ur-green-primary bg-white text-ur-green-primary hover:bg-ur-green-primary hover:text-white">
                  Register
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
