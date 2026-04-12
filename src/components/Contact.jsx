import { FaLinkedin, FaXTwitter, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { FiMail, FiArrowUpRight } from "react-icons/fi";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/gawadesuraj",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/surajgawade",
    },
    {
      name: "twitter",
      icon: <FaXTwitter />,
      href: "https://x.com/surajdotin",
    },
    {
      name: "Email",
      icon: <FiMail />,
      href: "mailto:csemr.surajgawade@gmail.com",
    },
  ];

  const displayLinks = [...socialLinks, ...socialLinks];

  return (
    <section aria-label="Contact Suraj Gawade" className="py-overflow-hidden">
      {/* SEO heading (hidden visually) */}
      <h2 className="sr-only">Contact Suraj Gawade</h2>

      {/* THE BLURRED TRACK */}
      <nav
        aria-label="Social contact links"
        className="relative w-full overflow-hidden mask-fade-edges py-2"
      >
        <div className="flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]">
          {displayLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Suraj Gawade ${link.name}`}
              className="flex items-center gap-3 px-4 py-2 bg-[#0a0a0a] border border-white/5 rounded-full text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 group shadow-lg"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                {link.icon}
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                {link.name}
              </span>

              <FiArrowUpRight className="text-gray-700 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </nav>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.375rem)); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `,
        }}
      />
    </section>
  );
}
