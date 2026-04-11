import { useEffect, useState } from "react";
import {
  BiLogoYoutube,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLinkExternal,
} from "react-icons/bi";

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
      .then((json) => setData(json));
  }, []);

  const sorted = [...(data[active] || [])].sort(
    (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
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
          {sorted.slice(0, visible).map((item, i) => (
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

/* SAFE IMAGE RESOLVER */
function resolveImage(url) {
  if (!url)
    return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200";

  if (url.includes("/_next/image") && url.includes("url=")) {
    const match = url.match(/url=([^&]+)/);
    if (match && match[1]) {
      return decodeURIComponent(match[1]);
    }
  }

  return url;
}

function safe(value, fallback = "") {
  return value || fallback;
}

function Card({ item }) {
  const title = safe(item.title, "Untitled post");
  const text = safe(item.text, "No description available.");
  const date = safe(item.date, "---- -- --");
  const image = resolveImage(item.image);
  const link = item.link || null;

  return (
    <article
      className="group cursor-pointer"
      onClick={() => link && window.open(link, "_blank")}
    >
      {/* image */}
      <div className="relative overflow-hidden rounded-sm border border-gray-900 mb-5 aspect-[16/10]">
        {item.type && (
          <div className="absolute top-3 left-3 z-10 bg-black/70 p-1 rounded">
            <PlatformIcon type={item.type} />
          </div>
        )}

        <img
          src={image}
          alt={title}
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
          / {date}
        </p>

        <h3 className="text-lg md:text-xl font-light text-gray-300 group-hover:text-white">
          {title}
        </h3>

        <div className="w-8 h-[1px] bg-gray-800 group-hover:w-12 transition-all duration-500" />

        <p className="text-sm text-gray-500 group-hover:text-gray-400">
          {text}
        </p>
      </div>
    </article>
  );
}

function PlatformIcon({ type }) {
  const map = {
    youtube: <BiLogoYoutube className="text-red-500 text-lg" />,
    linkedin: <BiLogoLinkedin className="text-blue-500 text-lg" />,
    twitter: <BiLogoTwitter className="text-sky-400 text-lg" />,
    blog: <BiLinkExternal className="text-gray-300 text-lg" />,
  };

  return map[type] || <BiLinkExternal className="text-gray-300 text-lg" />;
}