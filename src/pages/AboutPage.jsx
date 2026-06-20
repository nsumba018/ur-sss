import { motion } from 'framer-motion'
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa'

const timeline = [
  { year: '2014', event: 'UR-SSS founded at the College of Medicine & Health Sciences' },
  { year: '2015', event: 'First surgical skills workshop conducted with 20 students' },
  { year: '2017', event: 'Expanded to 5 core directorates' },
  { year: '2019', event: 'Launched community outreach programs across Rwanda' },
  { year: '2022', event: 'Hosted first national surgical symposium' },
  { year: '2024', event: '100+ active members and growing' },
]

const leadership = [
  { name: 'Dr. Jean-Pierre Habimana', role: 'Patron', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80' },
  { name: 'Alice Mukamana', role: 'President', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80' },
  { name: 'David Niyonkuru', role: 'Vice President', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80' },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
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
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-white/60">About UR-SSS</span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Fostering Academic Rigor & Surgical Innovation</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Since 2014, the University of Rwanda Surgical Students Society has been building pathways for medical students to become the next generation of surgical leaders in Rwanda and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 md:py-20">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-gray-100 bg-ur-green-light p-8 shadow-sm"
            >
              <h2 className="text-2xl font-extrabold text-ur-dark">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                To equip future surgeons with practical surgical skills, research acumen, ethical leadership, and professional networks that prepare them for excellence in surgical practice and healthcare delivery.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-gray-100 bg-ur-green-light p-8 shadow-sm"
            >
              <h2 className="text-2xl font-extrabold text-ur-dark">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                To be the leading student-led surgical society in East Africa, producing a pipeline of compassionate, globally competitive surgeons who transform healthcare in Rwanda.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ur-green-light py-16 md:py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-2xl"
          >
            <span className="section-kicker">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Excellence', desc: 'We pursue the highest standards in surgical education and practice.' },
              { title: 'Service', desc: 'We serve our communities through accessible healthcare and outreach.' },
              { title: 'Innovation', desc: 'We embrace research and technology to advance surgical care.' },
              { title: 'Collaboration', desc: 'We build networks that span students, faculty, and institutions.' },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-extrabold text-ur-green-primary">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 md:py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-2xl"
          >
            <span className="section-kicker">History</span>
            <h2 className="section-title">Our Journey</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-ur-green-sage md:left-1/2 md:-translate-x-px" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col gap-2 pl-12 md:w-1/2 md:pl-0 ${
                    i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className={`absolute left-4 top-1 h-3 w-3 rounded-full border-2 border-ur-green-primary bg-white md:left-auto ${
                    i % 2 === 0 ? 'md:right-[-6.5px]' : 'md:left-[-6.5px]'
                  }`} />
                  <span className="text-sm font-extrabold text-ur-green-primary">{item.year}</span>
                  <p className="text-sm leading-6 text-gray-600">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-ur-green-light py-16 md:py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-2xl"
          >
            <span className="section-kicker">Leadership</span>
            <h2 className="section-title">Meet Our Team</h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <img src={person.image} alt={person.name} className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-ur-green-primary" />
                <h3 className="mt-4 font-extrabold text-ur-dark">{person.name}</h3>
                <p className="text-sm font-semibold text-ur-green-primary">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ur-green-primary py-16">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-white">Want to Learn More?</h2>
            <p className="mt-4 text-white/70">Join our community and start your surgical journey today.</p>
            <button className="btn-primary mt-6 bg-white text-ur-green-primary hover:bg-ur-green-light">
              Become a Member
              <FaArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
