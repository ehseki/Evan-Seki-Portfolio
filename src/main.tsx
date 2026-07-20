import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Landing from './Landing.tsx'
import ProjectOne from './pages/ProjectOne.tsx'
import ProjectTwo from './pages/ProjectTwo.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/project-one" element={<ProjectOne />} />
                <Route path="/project-two" element={<ProjectTwo />} />
            </Routes>
        </HashRouter>
    </StrictMode>,
)

