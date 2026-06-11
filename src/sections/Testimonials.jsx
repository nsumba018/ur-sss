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
    <section className="py-20 bg-ur-green-light">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-ur-green-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Voices of UR-SSS
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ur-dark">
            What Our Members Say
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Quote Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white rounded-2xl p-8 lg:p-10 shadow-lg relative"
            >
              <FaQuoteLeft className="text-ur-green-sage text-4xl mb-6" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-ur-dark text-lg leading-relaxed mb-8">
                    {testimonials[current].quote}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-ur-green-primary"
                    />
                    <div>
                      <div className="font-bold text-ur-dark">{testimonials[current].name}</div>
                      <div className="text-ur-green-primary text-sm">{testimonials[current].role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex gap-3 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prev}
                  className="w-10 h-10 rounded-full border-2 border-ur-green-primary text-ur-green-primary flex items-center justify-center hover:bg-ur-green-primary hover:text-white transition-colors"
                >
                  <FaChevronLeft size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={next}
                  className="w-10 h-10 rounded-full border-2 border-ur-green-primary text-ur-green-primary flex items-center justify-center hover:bg-ur-green-primary hover:text-white transition-colors"
                >
                  <FaChevronRight size={16} />
                </motion.button>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                  alt="Medical professionals"
                  className="w-full h-[400px] lg:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ur-green-primary/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
