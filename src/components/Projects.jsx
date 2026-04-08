export default function Projects() {
  return (
    <section className="py-2">
      <p className="text-xs text-gray-500 mb-6 tracking-widest">PROJECTS</p>

      <div className="space-y-6">
        <Project
          title="Face Attendance System"
          desc="AI-based attendance system using face recognition with real-time tracking and admin dashboard."
          tech="React · Node · MongoDB · Face API"
        />

        <Project
          title="API Response Visualizer"
          desc="Developer tool to visualize and validate API responses using schema-based validation."
          tech="React · JSON Schema · Tailwind"
        />

        <Project
          title="Portfolio Builder"
          desc="Minimal developer portfolio with sticky layout and resume-style UI."
          tech="React · Tailwind · Framer Motion"
        />
      </div>
    </section>
  );
}

function Project({ title, desc, tech }) {
  return (
    <div className="group">
      <h3 className="text-white">{title}</h3>

      <p className="text-gray-400 text-sm mt-2 leading-relaxed">{desc}</p>

      <p className="text-xs text-gray-500 mt-2">{tech}</p>

      <div className="border-t border-dashed border-gray-800 mt-5 group-last:hidden" />
    </div>
  );
}
