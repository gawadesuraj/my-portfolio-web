import { useEffect, useState } from "react";

export default function About() {
  const [step, setStep] = useState(2);
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/gawadesuraj/my-portfolio-web/main/data/about.json",
    )
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <section className="max-w-3xl relative mx-auto">
      <div className="relative text-gray-400 leading-relaxed text-[16px]">
        {content.slice(0, step).map((item) => (
          <p
            key={item.id}
            className="mt-4 animate-in fade-in slide-in-from-top-2 duration-700"
          >
            {item.text}
          </p>
        ))}

        {step < content.length && (
          <div
            className="absolute bottom-0 left-0 right-0 h-16
            bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"
          />
        )}
      </div>

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
