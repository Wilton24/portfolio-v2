// src/App.tsx
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProjectsGrid } from "./components/ProjectsGrid";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-zinc-800 selection:text-white">
      {/* Fixed Ceiling Navigation */}
      <Navbar />

      {/* Main Body Flow */}
      <main className="flex-1 w-full">
        <Hero />

        <ProjectsGrid />
      </main>
    </div>
  )
}

export default App