import { useEffect, useRef } from "react";
import "./footer.css";

const Footer = () => {
  const footerRef = useRef();

  useEffect(() => {
    const el = footerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("footer-visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer-hidden relative mt-24 text-white"
    >
      {/* 🔥 Animated Gradient Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-gradient" />

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-semibold tracking-tight hover:tracking-widest transition-all duration-500">
              Faseed / Android
            </h2>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Crafting smooth, performant Android apps with modern tech and clean UX.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h3 className="text-sm text-gray-300 mb-3 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group inline-block transition"
                  >
                    <span className="group-hover:text-white transition">
                      {item}
                    </span>
                    <span className="block h-[1px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm text-gray-300 mb-3 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-5 text-gray-400 text-sm">

              {[
                { name: "GitHub", link: "#" },
                { name: "LinkedIn", link: "#" },
                { name: "Twitter", link: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="relative group"
                >
                  <span className="group-hover:text-white transition">
                    {social.name}
                  </span>

                  {/* glow */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-md bg-cyan-400/30 transition"></span>
                </a>
              ))}

            </div>
          </div>

        </div>

        {/* bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Faseed. Crafted with precision.</p>
          <p className="hover:text-white transition">
            Built with ❤️ using React + Tailwind
          </p>

           <a
      href="/privacy-terms"
      className="hover:text-white transition underline underline-offset-4"
    >
      Privacy
    </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;