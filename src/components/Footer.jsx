import vitLogo from "../assets/images/vit.png";
import uojLogo from "../assets/images/avit.png";
import sparcLogo from "../assets/images/sparcc.png";

function Footer() {
  return (
    <footer className="bg-[#1e2a3a] text-gray-200 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h3 className="text-2xl font-semibold mb-8 text-white">
          Get in Touch
        </h3>

        {/* Contact Info */}
        <div className="space-y-4 text-sm">
          <div className="flex justify-center items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            <a
              href="tel:9437838487"
              className="hover:text-white transition"
            >
              9437838487
            </a>
          </div>

          <div className="flex justify-center items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <polyline points="3 6 12 13 21 6" />
              </svg>
            </span>
            <a
              href="mailto:soumyaranjan.mahapatro@vit.ac.in"
              className="hover:text-white transition"
            >
              soumyaranjan.mahapatro@vit.ac.in
            </a>
            <p>Dr. Soumya Ranjan Mahapatro</p>
          </div>

          <div className="flex justify-center items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <polyline points="3 6 12 13 21 6" />
              </svg>
            </span>
            <a
              href="mailto:nithya.v@vit.ac.in"
              className="hover:text-white transition"
            >
              nithya.v@vit.ac.in
            </a>
            <p>Dr. Nithya Venkatesh</p>
          </div>
        </div>

        {/* Subject Line */}
        <p className="text-xs text-gray-400 mt-6">
          Subject line: "Next-Generation Wastewater Workshop – Query"
        </p>

        {/* Logos Row */}
        <div className="mt-10 flex justify-center items-center gap-8 flex-wrap">
          <div className="h-18 w-32 rounded-2xl bg-white/5 border border-white/10 shadow-sm flex items-center justify-center px-4 py-3">
            <img
              src={vitLogo}
              alt="VIT Logo"
              className="h-10 object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
          <div className="h-18 w-32 rounded-2xl bg-white/5 border border-white/10 shadow-sm flex items-center justify-center px-4 py-3">
            <img
              src={uojLogo}
              alt="University Logo"
              className="h-10 object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
          <div className="h-18 w-32 rounded-2xl bg-white/5 border border-white/10 shadow-sm flex items-center justify-center px-4 py-3">
            <img
              src={sparcLogo}
              alt="SPARC Logo"
              className="h-10 object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        </div>

        {/* Bottom Line */}
        <p className="text-xs text-gray-500 mt-10">
          © 2026 Next-Generation Wastewater Modelling & Control Workshop. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
