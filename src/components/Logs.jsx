import { useEffect, useState } from "react";

const BATCH = 1;

export default function Logs() {
  const [active, setActive] = useState("learning");
  const [visible, setVisible] = useState(BATCH);
  const [data, setData] = useState({
    learning: [],
    updates: [],
    books: [],
  });

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/gawadesuraj/my-portfolio-web/main/data/blogs.json",
    )
      .then((res) => res.json())
      .then(async (json) => {
        const parsed = await parseBlogs(json);
        setData(parsed);
      });
  }, []);

  const sorted = [...(data[active] || [])].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <section className="py-1 mb-15">
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

      {/* Grid */}
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
    <article
      className="group cursor-pointer"
      onClick={() => item.link && window.open(item.link, "_blank")}
    >
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

        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />
      </div>

      {/* content */}
      <div className="space-y-3">
        <p className="text-[10px] font-mono text-gray-600 tracking-[0.15em] uppercase">
          / {item.date}
        </p>

        <h3 className="text-lg md:text-xl font-light text-gray-300 group-hover:text-white tracking-tight leading-snug transition-colors duration-300">
          {item.title}
        </h3>

        <div className="w-8 h-[1px] bg-gray-800 group-hover:w-12 transition-all duration-500" />

        <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
          {item.text}
        </p>
      </div>
    </article>
  );
}

async function parseBlogs(json) {
  const fetchMeta = async (url) => {
    try {
      const res = await fetch(
        `https://api.microlink.io?url=${encodeURIComponent(url)}`,
      );
      const data = await res.json();

      return {
        title: data.data.title,
        text: data.data.description,
        image: data.data.image.url,
        date: new Date().toISOString().slice(0, 10),
        link: url,
      };
    } catch {
      return null;
    }
  };

  const parseSection = async (items = []) => {
    const results = await Promise.all(
      items.map((item) => {
        if (item.url) return fetchMeta(item.url);
        return item;
      }),
    );
    return results.filter(Boolean);
  };

  return {
    learning: await parseSection(json.learning),
    updates: await parseSection(json.updates),
    books: await parseSection(json.books),
  };
}
