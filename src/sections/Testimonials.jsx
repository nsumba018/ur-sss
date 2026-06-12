import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    quote: "UR-SSS provided the foundation I needed to confidently enter the surgical workforce. The hands-on workshops and mentorship from senior members were life-changing for my professional growth.",
    name: "Dr. Jean-Luc Ndayisaba",
    role: "Surgical Resident, CHUK",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Being part of UR-SSS transformed my medical education. The research opportunities and networking events opened doors I never imagined possible as a student.",
    name: "Dr. Marie Claire Uwase",
    role: "General Surgery Resident",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "The community outreach programs taught me that surgery is not just about operating rooms. It's about serving communities and making healthcare accessible to all Rwandans.",
    name: "Dr. Patrick Mugisha",
    role: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-ur-green-light py-14 md:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 max-w-2xl text-center md:mx-auto md:mb-12"
        >
          <span className="section-kicker">Voices of UR-SSS</span>
          <h2 className="section-title">What Our Members Say</h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl bg-white p-8 shadow-lg lg:col-span-3 lg:p-10"
          >
            <FaQuoteLeft className="mb-6 text-4xl text-ur-green-sage" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mb-8 text-lg leading-relaxed text-ur-dark">
                  {testimonials[current].quote}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-ur-green-primary"
                  />
                  <div>
                    <div className="font-extrabold text-ur-dark">{testimonials[current].name}</div>
                    <div className="text-sm text-ur-green-primary">{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === current ? 'w-6 bg-ur-green-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ur-green-primary text-ur-green-primary transition hover:bg-ur-green-primary hover:text-white"
                >
                  <FaChevronLeft size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ur-green-primary text-ur-green-primary transition hover:bg-ur-green-primary hover:text-white"
                >
                  <FaChevronRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                alt="Medical professionals in discussion"
                className="h-[400px] w-full object-cover lg:h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ur-green-primary/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
