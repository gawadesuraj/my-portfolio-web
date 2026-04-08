import { FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="py-4">
      <p className="text-xs text-gray-500 mb-6 tracking-widest">CONNECT</p>

      <div className="flex items-center gap-5">
        <Icon label="Email" href="mailto:suraj@gmail.com">
          <FiMail size={16} />
        </Icon>

        <Icon label="GitHub" href="https://github.com/suraj">
          <FaGithub size={16} />
        </Icon>

        <Icon label="LinkedIn" href="https://linkedin.com/in/suraj">
          <FaLinkedin size={16} />
        </Icon>

        <Icon label="X" href="https://x.com/suraj">
          <FaXTwitter size={16} />
        </Icon>

        <Icon label="Location" href="#">
          <FiMapPin size={16} />
        </Icon>
      </div>
    </section>
  );
}

function Icon({ children, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative w-9 h-9 border border-gray-800 
      flex items-center justify-center text-gray-400
      hover:text-white hover:border-gray-600 transition"
    >
      {children}

      <span
        className="absolute -bottom-7 left-1/2 -translate-x-1/2
      text-[10px] text-gray-500 opacity-0 
      group-hover:opacity-100 transition whitespace-nowrap"
      >
        {label}
      </span>
    </a>
  );
}
