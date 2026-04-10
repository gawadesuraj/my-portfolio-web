import { useState } from "react";

const BATCH = 1; // load 2 at a time

export default function Logs() {
  const [active, setActive] = useState("learning");
  const [visible, setVisible] = useState(BATCH);

  const data = {
    learning: [
      {
        title: "Understanding React Rendering",
        text: "Deep dive into React memoization and rendering lifecycle optimization.",
        image:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
        date: "2026-04-07",
      },
      {
        title: "Sticky Layout UI",
        text: "Building complex split-screen layouts using modern CSS and Tailwind.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
        date: "2026-04-06",
      },
      {
        title: "Tailwind Experiments",
        text: "Advanced flexbox and grid combinations for editorial-style web design.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
        date: "2026-04-05",
      },
      {
        title: "Performance Metrics",
        text: "Using Chrome DevTools to profile and fix unnecessary re-renders.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
        date: "2026-04-04",
      },
      {
        title: "Performance Metrics",
        text: "Using Chrome DevTools to profile and fix unnecessary re-renders.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
        date: "2026-04-04",
      },
      {
        title: "Performance Metrics",
        text: "Using Chrome DevTools to profile and fix unnecessary re-renders.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
        date: "2026-04-04",
      },
      {
        title: "Performance Metrics",
        text: "Using Chrome DevTools to profile and fix unnecessary re-renders.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
        date: "2026-04-04",
      },
      {
        title: "Performance Metrics",
        text: "Using Chrome DevTools to profile and fix unnecessary re-renders.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
        date: "2026-04-04",
      },
    ],
    updates: [
      {
        title: "Portfolio 3.0",
        text: "Complete redesign focusing on expensive minimalism and performance.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
        date: "2026-04-07",
      },
      {
        title: "Component Overhaul",
        text: "Migrating all cards to a cleaner, text-heavy layout.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
        date: "2026-04-06",
      },
    ],
    books: [
      {
        title: "Atomic Habits",
        text: "Understanding the compound interest of tiny self-improvements.",
        image:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
        date: "2026-04-07",
      },
      {
        title: "Deep Work",
        text: "Strategies for remaining focused in a world of constant digital distraction.",
        image:
          "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800",
        date: "2026-04-06",
      },
    ],
  };

  const sorted = [...data[active]].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const visibleItems = sorted.slice(0, visible);

  return (
    <section className="py-1 mb-15">
      {/* Heading */}
      {/* <div className="relative inline-block mb-16 group">
        <div
          className="absolute -inset-1 -left-4 -right-4 bg-gray-500/20
          rounded-[4%_96%_12%_88%/90%_25%_75%_10%] 
          rotate-[1deg] group-hover:rotate-[-1deg] 
          transition-transform duration-700 ease-out"
        />
        <p className="relative text-xs font-extrabold text-gray-300 tracking-[0.3em] uppercase">
          Logs
        </p>
      </div> */}

      {/* Tabs */}
      <div className="flex gap-10 mb-12 border-b border-gray-900">
        {["learning", "updates", "books"].map((tab) => (
          <Tab
            key={tab}
            label={tab}
            active={active === tab}
            onClick={() => {
              setActive(tab);
              setVisible(BATCH);
            }}
          />
        ))}
      </div>

      {/* preview grid */}
      <div className="relative">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden transition-all duration-500"
          style={{
            maxHeight: `${visible * 360}px`,
          }}
        >
          {sorted.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {visible < sorted.length && (
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        )}
      </div>

      {/* Explore */}
      {visible < sorted.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisible((prev) => prev + BATCH)}
            className="px-4 py-2 text-xs font-bold tracking-[0.2em] uppercase text-gray-400 
            bg-transparent rounded-full border border-gray-800 
            hover:text-white hover:border-gray-500 
            transition-all duration-300 active:scale-95 shadow-lg"
          >
            Explore...
          </button>
        </div>
      )}
    </section>
  );
}

function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-bold tracking-widest uppercase pb-4 transition-all duration-500 relative ${
        active ? "text-gray-300" : "text-gray-600 hover:text-gray-300"
      }`}
    >
      {label}
      {active && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white" />
      )}
    </button>
  );
}

function Card({ item }) {
  return (
    <article className="group cursor-default">
      {/* image */}
      <div className="relative overflow-hidden rounded-sm border border-gray-900 mb-5 aspect-[16/10]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover 
          grayscale group-hover:grayscale-0 
          scale-[1.02] group-hover:scale-105
          transition-all duration-700 ease-out"
        />

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />
      </div>

      {/* content */}
      <div className="space-y-3">
        {/* date */}
        <p className="text-[10px] font-mono text-gray-600 tracking-[0.15em] uppercase">
          / {item.date}
        </p>

        {/* title */}
        <h3
          className="text-lg md:text-xl font-light text-gray-300 
        group-hover:text-white 
        tracking-tight leading-snug 
        transition-colors duration-300"
        >
          {item.title}
        </h3>

        {/* divider */}
        <div className="w-8 h-[1px] bg-gray-800 group-hover:w-12 transition-all duration-500" />

        {/* text */}
        <p
          className="text-sm text-gray-500 leading-relaxed 
        group-hover:text-gray-400 
        transition-colors duration-300"
        >
          {item.text}
        </p>
      </div>
    </article>
  );
}
