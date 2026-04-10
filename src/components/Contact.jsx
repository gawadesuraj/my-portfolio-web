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
      name: "X / Twitter",
      icon: <FaXTwitter />,
      href: "https://x.com/gawadesuraj",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/919999999999",
    },
    {
      name: "Email",
      icon: <FiMail />,
      href: "mailto:surajgawade.dev@gmail.com",
    },
  ];

  // Doubling the array for a seamless loop
  const displayLinks = [...socialLinks, ...socialLinks];

  return (
    <section className="py-overflow-hidden">
      {/* Signature Animated Heading */}
      

      {/* THE BLURRED TRACK */}
      <div className="relative w-full overflow-hidden mask-fade-edges py-2">
        <div className="flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]">
          {displayLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
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
      </div>

      {/* Custom styles for the "Elite" behavior */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.375rem)); } /* 0.375rem matches the gap-3 (12px / 2) */
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
