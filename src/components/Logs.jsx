import { useState } from "react";

const BATCH = 2; // load 2 at a time

export default function Logs() {
  const [active, setActive] = useState("learning");
  const [visible, setVisible] = useState(BATCH);

  const data = {
    learning: [
      {
        title: "Understanding React Rendering",
        text: "Learned React memo optimization.",
        image:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
        date: "2026-04-07",
      },
      {
        title: "Sticky Layout UI",
        text: "Built split layout portfolio.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
        date: "2026-04-06",
      },
      {
        title: "Tailwind Layout",
        text: "Flex + sticky experiments.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
        date: "2026-04-05",
      },
      {
        title: "Performance",
        text: "Avoid re-render optimization.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
        date: "2026-04-04",
      },
      {
        title: "Tailwind Layout",
        text: "Flex + sticky experiments.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
        date: "2026-04-05",
      },
      {
        title: "Performance",
        text: "Avoid re-render optimization.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
        date: "2026-04-04",
      },
      {
        title: "Tailwind Layout",
        text: "Flex + sticky experiments.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
        date: "2026-04-05",
      },
      {
        title: "Performance",
        text: "Avoid re-render optimization.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
        date: "2026-04-04",
      },
      {
        title: "Tailwind Layout",
        text: "Flex + sticky experiments.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
        date: "2026-04-05",
      },
      {
        title: "Performance",
        text: "Avoid re-render optimization.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
        date: "2026-04-04",
      },
      {
        title: "Tailwind Layout",
        text: "Flex + sticky experiments.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
        date: "2026-04-05",
      },
      {
        title: "Performance",
        text: "Avoid re-render optimization.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
        date: "2026-04-04",
      },
      {
        title: "Tailwind Layout",
        text: "Flex + sticky experiments.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
        date: "2026-04-05",
      },
      {
        title: "Performance",
        text: "Avoid re-render optimization.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
        date: "2026-04-04",
      },
    ],

    updates: [
      {
        title: "Portfolio Update",
        text: "Added logs section.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
        date: "2026-04-07",
      },
      {
        title: "UI Improvements",
        text: "Improved navbar spacing.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
        date: "2026-04-06",
      },
    ],

    books: [
      {
        title: "Atomic Habits",
        text: "Systems over goals.",
        image:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
        date: "2026-04-07",
      },
      {
        title: "Deep Work",
        text: "Focus is power.",
        image:
          "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800",
        date: "2026-04-06",
      },
    ],
  };

  // sort by latest date
  const sorted = [...data[active]].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const visibleItems = sorted.slice(0, visible);

  return (
    <section className="py-6">
      <h2 className="text-sm text-gray-500 mb-5 tracking-widest">LOGS</h2>

      {/* tabs */}
      <div className="flex gap-6 mb-6">
        <Tab
          label="Learning"
          active={active === "learning"}
          onClick={() => {
            setActive("learning");
            setVisible(BATCH);
          }}
        />
        <Tab
          label="Updates"
          active={active === "updates"}
          onClick={() => {
            setActive("updates");
            setVisible(BATCH);
          }}
        />
        <Tab
          label="Books"
          active={active === "books"}
          onClick={() => {
            setActive("books");
            setVisible(BATCH);
          }}
        />
      </div>

      {/* cards */}
      <div className="grid grid-cols-2 gap-6">
        {visibleItems.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>

      {/* explore more */}
      {visible < sorted.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisible((prev) => prev + BATCH)}
            className="px-4 py-1.5 text-xs text-gray-300 
    rounded-full border border-gray-700
    hover:text-white hover:border-gray-500
    transition duration-200"
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
      className={`text-sm pb-1 transition ${
        active
          ? "text-white border-b border-gray-600"
          : "text-gray-500 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function Card({ item }) {
  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition">
      <img src={item.image} alt="" className="w-full h-36 object-cover" />

      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">{item.date}</p>

        <h3 className="text-white text-base mb-2">{item.title}</h3>

        <p className="text-sm text-gray-400">{item.text}</p>
      </div>
    </div>
  );
}
