import { lazy, Suspense } from "react";

import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import SEO from "./components/SEO"; // add this

/* lazy loaded */
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Logs = lazy(() => import("./components/Logs"));
const GitHubVelocity = lazy(() => import("./components/metrix"));

function App() {
  return (
    <div className="bg-black text-gray-300 flex justify-center font-mono">
      <SEO /> {/* add this */}
      <div className="w-full md:w-[72%] border-l border-r border-dashed border-gray-800">
        <Navbar />

        <div className="flex flex-col md:flex-row items-start">
          <Sidebar />

          <main className="w-full md:w-[70%] md:ml-[30%] px-6 md:px-12 pt-10 md:pt-20 pb-10 space-y-14">
            <About />
            <Experience />

            <Suspense fallback={null}>
              <Projects />
              <Skills />
              <Logs />
              <GitHubVelocity />
            </Suspense>

            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
