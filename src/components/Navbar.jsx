import { useEffect, useState } from "react";
import { LuUser } from "react-icons/lu";

export default function Navbar() {
  const [completion, setCompletion] = useState(0);
  const [link, setLink] = useState("#");

  // fetch know more link
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/gawadesuraj/my-portfolio-web/main/data/profile.json",
    )
      .then((res) => res.json())
      .then((data) => setLink(data.knowMore || "#"));
  }, []);

  // scroll progress
  useEffect(() => {
    const updateScroll = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100,
        );
      }
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header
      aria-label="Main navigation"
      className="fixed top-0 left-1/2 -translate-x-1/2 w-[95%] md:w-[72%] bg-black/90 backdrop-blur-md z-50 border-b md:border-l md:border-r border-dashed border-gray-800 px-4 md:px-10 py-3 flex justify-between items-center"
    >
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="relative inline-flex items-center justify-center px-2 py-[2px]">
          <span
            className="absolute -top-[8px] left-[1px] right-[-0px] bottom-[4px] bg-gray-400 opacity-70"
            style={{
              clipPath: "polygon(2% 40%, 96% 15%, 100% 70%, 4% 90%)",
            }}
          />

          <span
            className="absolute top-[4px] -left-[0px] right-[1px] bottom-[-6px] bg-gray-400"
            style={{
              clipPath: "polygon(2% 40%, 96% 15%, 100% 70%, 4% 90%)",
            }}
          />

          <span className="relative z-10 text-black text-xs font-semibold leading-none">
            SG
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[12px] text-white font-bold tracking-widest uppercase">
            सुरज गावडे
          </span>
          <span className="text-[9px] text-gray-200 font-mono uppercase tracking-tighter">
            Software Engineer
          </span>
        </div>
      </div>

      {/* Status */}
      <div className="hidden xs:flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>

          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            Available for Work
          </span>
        </div>
      </div>

      {/* Know More */}
      <div className="relative group flex flex-col items-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Know more about Suraj"
          className="w-6 h-6 flex items-center justify-center"
        >
          <LuUser className="w-7 h-7 text-gray-300 hover:text-white transition" />
        </a>

        <span
          className="absolute top-full 
          text-[9px] whitespace-nowrap 
          uppercase tracking-widest 
          text-gray-200 opacity-0 
          group-hover:opacity-100 
          transition"
        >
          Know more
        </span>
      </div>

      {/* Scroll Progress */}
      <div
        className="absolute bottom-0 left-0 h-[1.5px] bg-white transition-all duration-150 ease-out"
        style={{ width: `${completion}%` }}
      />
    </header>
  );
}
