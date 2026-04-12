import { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { SiGithub } from "react-icons/si";

export default function GitHubVelocity() {
  const scrollRef = useRef(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    setTimeout(() => {
      el.scrollTo({
        left: el.scrollWidth,
        behavior: "smooth",
      });
    }, 500);
  }, []);

  const selectLast12Months = (contributions) => {
    const today = new Date();
    const start = new Date();
    start.setMonth(today.getMonth() - 11);
    start.setDate(1);

    const filteredData = contributions.filter((day) => {
      const date = new Date(day.date);
      return date >= start && date <= today;
    });

    const total = filteredData.reduce((sum, day) => sum + day.count, 0);
    setTotalCount(total);

    return filteredData;
  };

  const theme = {
    light: ["#161616", "#2d2d2d", "#4d4d4d", "#7d7d7d", "#bcbcbc"],
    dark: ["#161616", "#2d2d2d", "#4d4d4d", "#7d7d7d", "#bcbcbc"],
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-5 md:p-6 shadow-2xl">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-black p-2 rounded-lg border border-white/10">
              <SiGithub className="text-xl text-white" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-mono font-bold text-gray-200 tracking-tighter leading-none">
                gawadesuraj
              </h3>
              <p className="text-[10px] text-gray-500 font-medium lowercase tracking-widest mt-1">
                github
              </p>
            </div>
          </div>

          <a
            href="https://github.com/gawadesuraj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-md border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
          >
            follow
          </a>
        </div>

        {/* CALENDAR */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-scroll overflow-y-hidden hide-scrollbar"
        >
          <div className="min-w-[820px]">
            <GitHubCalendar
              username="gawadesuraj"
              blockSize={12}
              blockMargin={4}
              theme={theme}
              fontSize={12}
              transformData={selectLast12Months}
              hideTotalCount
              hideColorLegend
              style={{
                color: "#444",
                fontFamily: "monospace",
              }}
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5 px-1">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            {totalCount.toLocaleString()} Contributions in the last year
          </p>

          <div className="flex items-center gap-2 text-[9px] text-gray-600 uppercase tracking-widest">
            <span className="opacity-50">Less</span>
            <div className="flex gap-[3px]">
              <div className="w-2.5 h-2.5 bg-[#161616]" />
              <div className="w-2.5 h-2.5 bg-[#2d2d2d]" />
              <div className="w-2.5 h-2.5 bg-[#4d4d4d]" />
              <div className="w-2.5 h-2.5 bg-[#7d7d7d]" />
              <div className="w-2.5 h-2.5 bg-[#bcbcbc]" />
            </div>
            <span className="opacity-50">More</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
