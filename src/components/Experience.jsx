import { useEffect, useState } from "react";

export default function Experience() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/gawadesuraj/my-portfolio-web/main/data/experience.json",
    )
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);

  return (
    <section aria-label="Work experience">
      {/* Heading */}
      <div className="relative inline-block mb-12 group">
        <div
          className="absolute -inset-1 -left-4 -right-4 bg-gray-500/20
          rounded-[4%_96%_12%_88%/90%_25%_75%_10%] 
          rotate-[1deg] group-hover:rotate-[-1deg] 
          transition-transform duration-700 ease-out"
        />
        <h2 className="relative text-xs font-extrabold text-gray-300 tracking-[0.3em] uppercase">
          Experience
        </h2>
      </div>

      {/* Card Grid Layout */}
      <div className="relative">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden transition-all duration-500"
          style={{
            maxHeight: `${visibleCount * 220}px`,
          }}
        >
          {experiences.map((exp, i) => (
            <Card key={i} {...exp} />
          ))}
        </div>

        {visibleCount < experiences.length && (
          <div
            className="absolute bottom-0 left-0 right-0 h-20 
            bg-gradient-to-t from-black to-transparent pointer-events-none"
          />
        )}
      </div>

      {/* READ MORE BUTTON */}
      {visibleCount < experiences.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 2)}
            aria-label="Load more experience"
            className="px-6 py-2 text-xs font-medium text-gray-300 
            bg-black rounded-full border border-gray-800 
            hover:text-white hover:border-gray-600 
            transition-all duration-200 active:scale-95 shadow-lg"
          >
            read more
          </button>
        </div>
      )}
    </section>
  );
}

function Card({ year, title, company, html }) {
  return (
    <article className="group relative flex flex-col h-full p-6 bg-[#0a0a0a] border border-gray-800 rounded-2xl hover:border-gray-700 hover:bg-[#0c0c0c] transition-all duration-500">
      <div className="flex flex-col gap-2 mb-6">
        <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase group-hover:text-gray-300 transition-colors">
          {year}
        </span>
        <div className="h-[1px] w-6 bg-gray-800 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
      </div>

      <div className="flex-grow">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <h3 className="text-lg font-semibold text-white leading-tight">
            {title}
          </h3>
          <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-gray-900 text-gray-500 rounded border border-gray-800 group-hover:border-gray-700 group-hover:text-gray-300 transition-all">
            {company}
          </span>
        </div>

        <div
          className="text-gray-400 leading-relaxed text-[15px] group-hover:text-gray-300 transition-colors"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>

      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-30 transition-opacity">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-white"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </article>
  );
}
