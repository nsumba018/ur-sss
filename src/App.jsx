import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DirectoratesPage from './pages/DirectoratesPage'
import ProgramsPage from './pages/ProgramsPage'
import EventsPage from './pages/EventsPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import JoinPage from './pages/JoinPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/directorates" element={<MainLayout><DirectoratesPage /></MainLayout>} />
        <Route path="/programs" element={<MainLayout><ProgramsPage /></MainLayout>} />
        <Route path="/events" element={<MainLayout><EventsPage /></MainLayout>} />
        <Route path="/gallery" element={<MainLayout><GalleryPage /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
        <Route path="/join" element={<MainLayout><JoinPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}
