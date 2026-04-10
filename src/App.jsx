import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Logs from "./components/Logs";
import GitHubVelocity from "./components/metrix";

function App() {
  return (
    <div className="bg-black text-gray-300 flex justify-center font-mono">
      {/* Width is 100% on mobile, 72% on desktop */}
      <div className="w-full md:w-[72%] border-l border-r border-dashed border-gray-800">
        <Navbar />

        {/* Stacks on mobile (flex-col), side-by-side on desktop (md:flex-row) */}
        <div className="flex flex-col md:flex-row items-start">
          <Sidebar />

          {/* Width 100% on mobile, 70% on desktop. Removed ml-[30%] on mobile to prevent horizontal scroll */}
          <main className="w-full md:w-[70%] md:ml-[30%] px-6 md:px-12 pt-10 md:pt-20 pb-10 space-y-14">
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Logs />
            <GitHubVelocity />
            <Contact />
            {/* <Footer /> */}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;