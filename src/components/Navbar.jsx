import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Directorates', href: '#directorates' },
  { label: 'Programs', href: '#programs' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-2 text-left"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ur-green-primary text-sm font-extrabold text-white shadow-sm">
              UR
            </span>
            <span className="leading-none">
              <span className={`block text-base font-extrabold ${isScrolled || isMobileMenuOpen ? 'text-ur-green-primary' : 'text-white'}`}>
                UR-SSS
              </span>
              <span className={`mt-1 block text-[9px] font-semibold uppercase tracking-[0.14em] ${isScrolled || isMobileMenuOpen ? 'text-gray-500' : 'text-white/75'}`}>
                Surgical Society
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-semibold transition-colors hover:text-ur-green-accent ${
                  isScrolled ? 'text-ur-dark' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="hidden rounded-md bg-white px-5 py-2.5 text-sm font-bold text-ur-green-primary shadow-sm transition hover:bg-ur-green-light lg:inline-flex"
          >
            Join UR-SSS
          </button>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md border transition lg:hidden ${
              isScrolled || isMobileMenuOpen
                ? 'border-gray-200 text-ur-dark'
                : 'border-white/25 text-white'
            }`}
          >
            {isMobileMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="lg:hidden border-t border-gray-100 bg-white"
          >
            <div className="section-container grid gap-1 py-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="rounded-md px-3 py-3 text-left text-sm font-semibold text-ur-dark hover:bg-ur-green-light hover:text-ur-green-primary"
                >
                  {item.label}
                </button>
              ))}
              <button type="button" className="mt-2 btn-primary w-full">
                Join UR-SSS
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
