import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Logs from "./components/Logs";

function App() {
  return (
    <div className="bg-black text-gray-300 flex justify-center font-mono">
      <div className="w-[72%] border-l border-r border-dashed border-gray-800">
        <Navbar />

        <div className="flex items-start">
          <Sidebar />

          {/* normal scroll (NO overflow) */}
          <main className="w-[60%] ml-[40%] px-12 pt-20 pb-10 space-y-14">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Logs />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
