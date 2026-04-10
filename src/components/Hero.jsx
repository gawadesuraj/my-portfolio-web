import { useState } from "react";

export default function Hero() {
  // FEATURE: Progressive step loading (starts at 1)
  const [step, setStep] = useState(2);

  const content = [
    {
      id: 1,
      text: (
        <p>
          I'm a{" "}
          <span className="text-white font-medium">software engineer</span>{" "}
          focused on building{" "}
          <span className="text-white font-medium">
            enterprise-grade applications
          </span>
          , clean{" "}
          <span className="text-white font-medium">user interfaces</span> and{" "}
          <span className="text-white font-medium">
            performance-driven backend systems
          </span>
          . I specialize in{" "}
          <span className="text-white font-medium">full stack development</span>{" "}
          with expertise in React, Node.js and modern web technologies.
        </p>
      ),
    },
    {
      id: 2,
      text: (
        <p className="mt-4 animate-in fade-in slide-in-from-top-2 duration-700">
          Currently, I'm developing{" "}
          <span className="text-white font-medium">cloud-native solutions</span>{" "}
          as a MERN Intern at{" "}
          <span className="text-white font-medium">codevocado</span>. I also
          lead the development of the{" "}
          <span className="text-white font-medium">
            Grampanchayat Dholewadi
          </span>{" "}
          platform (
          <a
            href="https://dholewadi.in"
            target="_blank"
            className="text-white font-medium hover:underline"
          >
            dholewadi.in
          </a>
          ) as my final year project, digitizing rural administration using
          React and Supabase.
        </p>
      ),
    },
    {
      id: 3,
      text: (
        <p className="mt-4 animate-in fade-in slide-in-from-top-2 duration-1000">
          I'm passionate about writing{" "}
          <span className="text-white font-medium">
            clean, maintainable code
          </span>{" "}
          that delivers measurable impact. Currently completing my Computer
          Science degree at Tatyasaheb Kore Institute of Engineering and
          Technology.
        </p>
      ),
    },
  ];

  return (
    <section className="max-w-3xl relative mx-auto">
      {/* TEXT CONTENT */}
      <div className="relative text-gray-400 leading-relaxed text-[16px]">
        {content.slice(0, step).map((item) => (
          <div key={item.id}>{item.text}</div>
        ))}

        {/* FADE OVERLAY - Only shows if there is more to read */}
        {step < content.length && (
          <div
            className="absolute bottom-0 left-0 right-0 h-16
            bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"
          />
        )}
      </div>

      {/* CENTERED BUTTON - Removed colorful glow */}
      {step < content.length && (
        <div className="flex justify-center mt-8 relative z-20">
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="px-4 py-2 text-xs font-medium tracking-widest text-gray-400 
            bg-black rounded-full border border-gray-800 
            hover:text-white hover:border-gray-500 
            transition-all duration-300 active:scale-95"
          >
            learn more
          </button>
        </div>
      )}
    </section>
  );
}
