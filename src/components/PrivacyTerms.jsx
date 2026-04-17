import { Link } from "react-router-dom";

const PrivacyTerms = () => {
  return (
    <div className="relative min-h-screen bg-[#020c1b] text-white overflow-hidden fade-in">

      {/* 🔥 background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto px-6 pt-32 py-20">

        {/* 🔙 back */}
        <Link
          to="/"
          className="text-sm text-gray-400 hover:text-white transition mb-6 inline-block"
        >
          ← Back
        </Link>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-10 tracking-tight">
          Privacy
        </h1>

        {/* CONTENT */}
        <div className="space-y-10 text-gray-400 leading-relaxed text-sm md:text-base">

          {/* DATA COLLECTION */}
          <div>
            <h2 className="text-white text-lg mb-2">Data Collection</h2>
            <p>
              This website collects basic anonymous analytics data to understand how users interact with the content.
            </p>
            <p className="mt-2">
              This may include device type, browser, pages visited, and time spent on the site.
            </p>
          </div>

          {/* USAGE */}
          <div>
            <h2 className="text-white text-lg mb-2">Usage</h2>
            <p>
              The collected data is used only to improve the performance, design, and overall user experience of the website.
            </p>
          </div>

          {/* THIRD PARTY */}
          <div>
            <h2 className="text-white text-lg mb-2">Third-Party Services</h2>
            <p>
              This site uses Google Analytics to measure traffic and usage patterns. Google may collect data according to its own privacy policies.
            </p>

            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline mt-2 inline-block"
            >
              View Google’s Privacy Policy →
            </a>
          </div>

          {/* USER CONTROL */}
          <div>
            <h2 className="text-white text-lg mb-2">Your Control</h2>
            <p>
              You can disable cookies or adjust your browser settings to limit tracking if you prefer not to share usage data.
            </p>
          </div>

          {/* CONSENT */}
          <div>
            <h2 className="text-white text-lg mb-2">Consent</h2>
            <p>
              By continuing to use this website, you agree to this minimal data collection.
            </p>
          </div>

        </div>

        {/* divider */}
        <div className="mt-14 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* footer */}
        <p className="text-xs text-gray-500 mt-6">
          Last updated: 2026-04-17
        </p>

      </div>
    </div>
  );
};

export default PrivacyTerms;