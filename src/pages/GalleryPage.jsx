import { motion } from 'framer-motion'
import {
  FaChevronRight, FaHandsHelping, FaLightbulb, FaPlay, FaBars,
} from 'react-icons/fa'

const filterTabs = ['All', 'Outreach', 'Skills', 'Research', 'Mentorship', 'Leadership']

const timeline = [
  {
    side: 'left',
    month: 'January',
    title: 'Annual General Meeting',
    desc: 'Setting the vision for a year focused on surgical excellence and community partnership.',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=85',
  },
  {
    side: 'right',
    month: 'May',
    title: 'Regional Research Forum',
    desc: 'Presenting data-driven solutions for perioperative care challenges in East Africa.',
    img: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=800&q=85',
  },
  {
    side: 'left',
    month: 'November',
    title: 'Skills Grand Finale',
    desc: 'Culmination of the intensive surgical training modules for senior medical students.',
    img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=85',
  },
]

const videos = [
  { title: 'UR-SSS Mission Documentary', meta: '8:45 \u2022 Published March 2024', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=85' },
  { title: 'Advanced Suturing Workshop', meta: '12:30 \u2022 Published June 2024', img: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=85' },
  { title: 'Student Voice: Outreach Days', meta: '4:20 \u2022 Published Sept 2024', img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=85' },
]

export default function GalleryPage() {
  return (
    <div className="overflow-hidden pt-20">
      {/* ========== HERO ========== */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ur-green-primary/40" />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70">
              <a href="#" className="hover:text-white">Home</a>
              <FaChevronRight size={10} />
              <span className="text-white">Gallery</span>
            </nav>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Gallery & Media</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Capturing moments of learning, leadership, service, mentorship, research, and community impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== FEATURED STORY ========== */}
      <section className="bg-white py-20 md:py-24">
        <div className="section-container">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group aspect-[4/3] overflow-hidden rounded-xl shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85"
                alt=""
                className="h-full w-full object-cover object-[center_30%] transition duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-ur-green-primary">Our Impact</span>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-ur-dark lg:text-4xl">Beyond the Classroom</h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-500">
                UR-SSS is more than workshops and lectures. Through outreach programs, mentorship initiatives, research activities, and surgical skills development, students actively contribute to healthcare education and community engagement.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 rounded-lg border border-gray-200/50 bg-ur-green-light/30 p-4">
                  <FaHandsHelping className="shrink-0 text-ur-green-primary" size={28} />
                  <div>
                    <h4 className="font-bold text-ur-dark">Community Service</h4>
                    <p className="text-sm text-gray-500">Bridging the gap between medicine and the people.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border border-gray-200/50 bg-ur-green-light/30 p-4">
                  <FaLightbulb className="shrink-0 text-ur-green-primary" size={28} />
                  <div>
                    <h4 className="font-bold text-ur-dark">Peer Mentorship</h4>
                    <p className="text-sm text-gray-500">Fostering the next generation of surgical leaders.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== IMPACT COUNTERS ========== */}
      <section className="overflow-hidden bg-ur-green-primary py-16 text-white">
        <div className="section-container">
          <div className="flex flex-col items-center justify-around gap-12 sm:flex-row">
            {[
              { number: '100+', label: 'Active Students' },
              { number: '10+', label: 'Outreach Programs' },
              { number: '500+', label: 'Community Members Reached' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-5xl font-extrabold">{stat.number}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FILTERABLE GALLERY ========== */}
      <section className="bg-ur-green-light/30 py-20 md:py-24">
        <div className="section-container">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="mb-8 text-3xl font-bold text-ur-dark lg:text-4xl">Our Visual Story</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  className={`rounded-full border-2 px-6 py-2 text-sm font-semibold transition-all ${
                    tab === 'All'
                      ? 'border-ur-green-primary bg-ur-green-primary text-white'
                      : 'border-ur-green-primary/20 text-gray-500 hover:border-ur-green-primary/60'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Outreach Masonry */}
          <div className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative col-span-2 row-span-2 min-h-[500px] overflow-hidden rounded-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=85"
                alt=""
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-[#316123]/0 p-8 text-white opacity-0 transition-all group-hover:opacity-100" style={{ backgroundColor: 'rgba(49, 97, 35, 0.85)' }}>
                <span className="mb-1 text-xs font-bold uppercase tracking-wider">Outreach</span>
                <h4 className="text-xl font-bold">Rural Health Camp</h4>
              </div>
            </motion.div>
            {[
              { label: 'Patient Education', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=85' },
              { label: 'Community Outreach', img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=85' },
              { label: 'Clinical Service', img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=85' },
              { label: 'First Aid Training', img: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=600&q=85' },
              { label: 'School Program', img: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&q=85' },
              { label: 'Blood Donation', img: 'https://images.unsplash.com/photo-1612277795421-9bc770e3e6c0?auto=format&fit=crop&w=600&q=85' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group relative h-[240px] overflow-hidden rounded-xl"
              >
                <img src={item.img} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-end bg-[#316123]/0 p-4 text-white opacity-0 transition-all group-hover:opacity-100" style={{ backgroundColor: 'rgba(49, 97, 35, 0.85)' }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Outreach</span>
                  <h4 className="text-sm font-bold">{item.label}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Surgical Skills Workshop */}
          <div className="mb-20">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-grow bg-gray-300" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-ur-green-primary">Surgical Skills Workshop</h3>
              <div className="h-px flex-grow bg-gray-300" />
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {[
                'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=85',
                'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=600&q=85',
                'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=85',
                'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=85',
                'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&q=85',
                'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=85',
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group aspect-[4/3] overflow-hidden rounded-xl shadow-sm"
                >
                  <img src={img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research & Mentorship Split */}
          <div className="mb-20 grid gap-16 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-xl font-bold text-ur-dark">Research Symposium</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=600&q=85',
                  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=85',
                  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=85',
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=85',
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="group aspect-square overflow-hidden rounded-lg"
                  >
                    <img src={img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-xl font-bold text-ur-dark">Mentorship Circles</h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group row-span-2 overflow-hidden rounded-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=85"
                    alt=""
                    className="min-h-[400px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <div className="flex flex-col gap-4">
                  {[
                    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=85',
                    'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=85',
                  ].map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="group h-[192px] overflow-hidden rounded-lg"
                    >
                      <img src={img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Leadership & Planning */}
          <div className="mb-10">
            <h3 className="mb-6 text-xl font-bold text-ur-dark">Leadership & Planning</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=85',
                'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=85',
                'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=85',
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group h-64 overflow-hidden rounded-xl"
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: i === 0 ? 'center 20%' : 'center' }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PHOTO JOURNAL (TIMELINE) ========== */}
      <section className="bg-white py-20 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-ur-dark lg:text-4xl">A Year in the Lens</h2>
            <p className="text-lg text-gray-500">Tracking our growth and impact through the 2024 academic cycle.</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-ur-green-primary/20" />
            <div className="space-y-24">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.month}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center gap-8 md:flex-row ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`w-full md:w-1/2 ${item.side === 'left' ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <div className="mb-2 text-xl font-bold text-ur-green-primary">{item.month}</div>
                    <h4 className="mb-2 text-lg font-bold text-ur-dark">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                  </div>
                  <div className="z-10 h-8 w-8 shrink-0 rounded-full border-4 border-white bg-ur-green-primary shadow-md" />
                  <div className={`w-full md:w-1/2 ${item.side === 'right' ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <div className="overflow-hidden rounded-xl bg-ur-green-light/30 p-2 shadow-sm">
                      <img src={item.img} alt="" className="h-64 w-full rounded-lg object-cover" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== VIDEO SECTION ========== */}
      <section className="bg-ur-green-light/30 py-20 md:py-24">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-ur-dark lg:text-4xl"
          >
            Stories in Motion
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            {videos.map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative aspect-video overflow-hidden rounded-xl bg-black"
              >
                <img
                  src={video.img}
                  alt=""
                  className="h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-all group-hover:bg-white group-hover:text-ur-green-primary">
                    <FaPlay size={20} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-bold">{video.title}</div>
                  <div className="text-xs text-white/70">{video.meta}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="relative overflow-hidden bg-ur-green-primary py-20 md:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=85"
            alt=""
            className="h-full w-full scale-110 object-cover opacity-20 blur-sm"
          />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Every Image Tells a Story</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Join our mission to transform surgical education and community health in Rwanda. Be part of the next chapter.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="rounded-xl bg-white px-8 py-4 font-bold text-ur-green-primary shadow-xl transition hover:bg-ur-green-light">
                Join the Society
              </button>
              <button className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white/10">
                Support Our Outreach
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
