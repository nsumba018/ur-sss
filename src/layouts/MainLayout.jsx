import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-ur-green-light">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
