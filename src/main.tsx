import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import Landing from './Landing.tsx'
import ProjectOne from './pages/ProjectOne.tsx'
import ProjectTwo from './pages/ProjectTwo.tsx'
import ProjectThree from './pages/ProjectThree.tsx'
import ProjectFour from './pages/ProjectFour.tsx'
import ProjectFive from './pages/ProjectFive.tsx'
import ProjectSix from './pages/ProjectSix.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <div className="app-shell">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/embodied-ai" element={<ProjectOne />} />
                    <Route path="/cephla" element={<ProjectTwo />} />
                    <Route path="/yamaha-conversion" element={<ProjectThree />} />
                    <Route path="/barbie-kart" element={<ProjectFour />} />
                    <Route path="/wpi-robotics" element={<ProjectFive />} />
                    <Route path="/wairarapa" element={<ProjectSix />} />
                </Routes>
            </div>
        </BrowserRouter>
    </StrictMode>,
)

