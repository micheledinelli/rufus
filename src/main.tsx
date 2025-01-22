import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from './Home.tsx'
import About from './About.tsx';
import Project from './Project.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="projects">
          <Route path=":city" element={<Project />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
