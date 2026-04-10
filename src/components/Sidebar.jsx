import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import profileImage from "../assets/myimage.jpg";

export default function Sidebar() {
  return (
    <aside className="w-full md:fixed md:left-[14%] md:top-[100px] md:w-[20%] pt-28 md:pt-0">
      <div className="w-[280px] flex flex-col items-center text-center mx-auto">
        <img
          src={profileImage}
          alt="Suraj Gawade"
          className="w-44 h-44 rounded-xl border border-white/5 shadow-2xl"
        />

        {/* Reduced margin-top from mt-6 to mt-4 */}
        <p className="text-sm text-gray-400 mt-4 leading-relaxed px-2 font-light">
          Full-Stack Software Engineer Building{" "}
          <span className="text-white">
            {/* scalable{" "} */}
            <span className="relative inline-block px-2 py-[1px]">
              <span
                className="absolute inset-0 bg-gray-600"
                style={{
                  clipPath: "polygon(3% 30%, 95% 10%, 100% 70%, 5% 95%)",
                }}
              />
              <span className="relative">web</span>
            </span>{" "}
            apps.
          </span>{" "}
        </p>

        {/* Reduced margin-top from mt-4 to mt-3 */}
        <div className="mt-3 flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
            Available for Work
          </span>
        </div>

        {/* Reduced divider margin from my-8 to mt-6 mb-4 */}
        <div className="w-full border-t border-dashed border-gray-800 mt-6 mb-4" />

        <div className="flex justify-center gap-9">
          <SocialIcon label="GitHub" href="https://github.com/gawadesuraj">
            <FaGithub size={22} />
          </SocialIcon>
          <SocialIcon label="LinkedIn" href="https://linkedin.com/in/surajgawade">
            <FaLinkedin size={22} />
          </SocialIcon>
          <SocialIcon label="X" href="https://x.com/surajdotin">
            <FaXTwitter size={22} />
          </SocialIcon>
          <SocialIcon label="Mail" href="mailto:csemr.surajgawade@gmail.com">
            <FiMail size={22} />
          </SocialIcon>
        </div>
      </div>
    </aside>
  );
}

function SocialIcon({ children, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative text-gray-500 hover:text-white transition-all duration-500"
    >
      {children}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:-bottom-6 transition-all duration-500">
        {label}
      </span>
    </a>
  );
}
