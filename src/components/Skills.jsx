import { useEffect, useState } from "react";

import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoGithub,
  BiLogoVisualStudio,
  BiLogoCPlusPlus,
} from "react-icons/bi";

import { SiExpress, SiPostman, SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

/* ICON MAP */
const iconMap = {
  react: <BiLogoReact />,
  tailwind: <BiLogoTailwindCss />,
  js: <BiLogoJavascript />,
  html: <BiLogoHtml5 />,
  css: <BiLogoCss3 />,
  node: <BiLogoNodejs />,
  mongo: <BiLogoMongodb />,
  git: <BiLogoGit />,
  github: <BiLogoGithub />,
  vscode: <BiLogoVisualStudio />,
  cpp: <BiLogoCPlusPlus />,
  express: <SiExpress />,
  postman: <SiPostman />,
  mysql: <SiMysql />,
  api: <TbApi />,
};

export default function Skills() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/gawadesuraj/my-portfolio-web/main/data/skills.json",
    )
      .then((res) => res.json())
      .then((data) => setSections(data.sections || []));
  }, []);

  return (
    <section className="py-2">
      {/* Heading */}
      <div className="relative inline-block mb-16 group ml-4 md:ml-0">
        <div
          className="absolute -inset-1 -left-4 -right-4 bg-gray-500/20
          rounded-[4%_96%_12%_88%/90%_25%_75%_10%] 
          rotate-[1deg] group-hover:rotate-[-1deg] 
          transition-transform duration-700 ease-out"
        />
        <p className="relative text-xs font-extrabold text-gray-300 tracking-[0.3em] uppercase">
          What I Learn To Build?
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            {/* Category Label */}
            <div className="relative inline-block mb-10 group">
              <div
                className="absolute -inset-1 -left-3 -right-3 bg-gray-500/20"
                style={{
                  clipPath:
                    "polygon(0% 30%, 45% 15%, 100% 25%, 98% 75%, 50% 90%, 2% 80%)",
                }}
              />

              <p className="relative text-xs font-bold text-gray-500 tracking-[0.3em] uppercase">
                {section.label}
              </p>
            </div>

            {/* Marquee */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

              <div className="flex overflow-hidden">
                <div
                  className={`flex whitespace-nowrap gap-6 py-2 group-hover:[animation-play-state:paused] ${
                    idx % 2 === 0
                      ? "animate-marquee"
                      : "animate-marquee-reverse"
                  }`}
                >
                  {section.items.map((item, i) => (
                    <SkillBox key={i} item={item} />
                  ))}
                  {section.items.map((item, i) => (
                    <SkillBox key={`d1-${i}`} item={item} />
                  ))}
                  {section.items.map((item, i) => (
                    <SkillBox key={`d2-${i}`} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `,
        }}
      />
    </section>
  );
}

function SkillBox({ item }) {
  const Icon = iconMap[item.icon];

  return (
    <div className="flex items-center gap-3 px-3 py-1 bg-[#0a0a0a] border border-gray-900 rounded-xl transition-all duration-300 hover:border-gray-600 hover:bg-[#111] group/box">
      {Icon && (
        <span className="text-xl text-gray-600 group-hover/box:text-white transition-colors">
          {Icon}
        </span>
      )}

      <span className="text-sm font-medium text-gray-500 group-hover/box:text-white tracking-wide">
        {item.name}
      </span>
    </div>
  );
}
