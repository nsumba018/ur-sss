import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { number: 2014, suffix: '', label: 'Founded' },
  { number: 60, suffix: '+', label: 'Student members' },
  { number: 5, suffix: '', label: 'Directorates' },
  { number: null, suffix: 'Growing', label: 'Impact' },
]

function AnimatedCounter({ number, suffix, isInView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView || number === null) return

    let start = 0
    const end = number
    const duration = 1400
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, number])

  if (number === null) return <span>{suffix}</span>
  return <span>{count}{suffix}</span>
}

export default function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative -mt-6 bg-ur-green-light pb-12 md:-mt-10 md:pb-16">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-2 gap-3 rounded-lg bg-white p-3 shadow-xl shadow-ur-green-primary/10 lg:grid-cols-4 lg:gap-4 lg:p-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-md border border-gray-100 bg-ur-green-light/70 px-3 py-5 text-center"
            >
              <div className="text-2xl font-extrabold text-ur-green-primary sm:text-3xl">
                <AnimatedCounter number={stat.number} suffix={stat.suffix} isInView={isInView} />
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
