import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import FloatingNav from "./components/FloatingNav";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Education from "./components/Education";
import Footer from "./components/Footer";
import TestPage from "./test/Test";

function AppContent() {
  return (
    <main className="min-h-screen relative bg-[#111827] overflow-hidden">
      <FloatingNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Education />
      <Footer />

      {/* 배경 그래디언트 */}
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none z-[-1]"></div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
