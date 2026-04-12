import { useEffect, useState } from "react";

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/gawadesuraj/my-portfolio-web/main/data/projects.json",
    )
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section aria-label="Projects">
      {/* Heading */}
      <div className="relative inline-block mb-12 group">
        <div
          className="absolute -inset-1 -left-4 -right-4 bg-gray-500/20
          rounded-[4%_96%_12%_88%/90%_25%_75%_10%] 
          rotate-[1deg] group-hover:rotate-[-1deg] 
          transition-transform duration-700 ease-out"
        />
        <h2 className="relative text-xs font-extrabold text-gray-300 tracking-[0.3em] uppercase">
          What I Build?
        </h2>
      </div>

      <div className="relative">
        <div
          className="space-y-6 overflow-hidden transition-all duration-500"
          style={{
            maxHeight: `${visibleCount * 110}px`,
          }}
        >
          {projects.map((project, i) => (
            <Project key={i} {...project} />
          ))}
        </div>

        {visibleCount < projects.length && (
          <div
            className="absolute bottom-0 left-0 right-0 h-16 
            bg-gradient-to-t from-black to-transparent pointer-events-none"
          />
        )}
      </div>

      {/* Read More */}
      {visibleCount < projects.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 2)}
            aria-label="Load more projects"
            className="px-6 py-2 text-xs font-medium text-gray-300 
            bg-black rounded-full border border-gray-800 
            hover:text-white hover:border-gray-600 
            transition-all duration-200 active:scale-95"
          >
            read more
          </button>
        </div>
      )}
    </section>
  );
}

function Project({ title, desc, tech, live }) {
  return (
    <article className="group">
      <div className="flex items-center justify-between">
        <h3 className="text-white">{title}</h3>

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} live project`}
            className="text-xs text-gray-500 hover:text-white transition"
          >
            live ↗
          </a>
        )}
      </div>

      <p className="text-gray-400 text-sm mt-2 leading-relaxed">{desc}</p>
      <p className="text-xs text-gray-500 mt-2">{tech}</p>

      <div className="border-t border-dashed border-gray-800 mt-5 group-last:hidden" />
    </article>
  );
}
