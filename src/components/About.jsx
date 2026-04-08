export default function About() {
  return (
    <section className="py-2">
      <p className="text-xs text-gray-500 mb-6 tracking-widest">EXPERIENCE</p>

      <div className="space-y-6">
        <Item
          year="2024 — PRESENT"
          title="Full Stack Developer"
          company="Freelance"
          desc="Building full stack web applications using React, Node.js, MongoDB and modern UI systems."
        />

        <Item
          year="2023 — 2024"
          title="Frontend Developer"
          company="Self Projects"
          desc="Designed and developed multiple responsive UI systems and production ready interfaces."
        />
      </div>
    </section>
  );
}

function Item({ year, title, company, desc }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-6">
      <div className="text-xs text-gray-500">{year}</div>

      <div>
        <h3 className="text-white">
          {title} · <span className="text-gray-400">{company}</span>
        </h3>

        <p className="text-gray-400 mt-2 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
