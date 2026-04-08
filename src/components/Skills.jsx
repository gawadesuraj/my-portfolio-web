export default function Skills() {
  return (
    <section className="py-2">
      <p className="text-xs text-gray-500 mb-6 tracking-widest">SKILLS</p>

      <div className="space-y-5">
        <Row title="Frontend" items="React, Tailwind, JavaScript, HTML, CSS" />

        <Row title="Backend" items="Node.js, Express, REST API" />

        <Row title="Database" items="MongoDB, MySQL" />

        <Row title="Tools" items="Git, GitHub, Postman, VS Code" />
      </div>
    </section>
  );
}

function Row({ title, items }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-6">
      <div className="text-xs text-gray-500">{title}</div>

      <div className="text-gray-300 text-sm leading-relaxed">{items}</div>
    </div>
  );
}
