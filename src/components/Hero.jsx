import spimg from "../assets/images/sparcc.png";
import vitimg from "../assets/images/vit.png";
import aimg from "../assets/images/avit.png";

function Hero() {
  return (
    <section className="bg-linear-to-b from-sky-50 to-white pt-32 pb-24 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-4">
          <img
            src={spimg}
            alt="SPARC Logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        {/* Top Label */}
        <p className="text-sky-600 uppercase tracking-wider text-sm font-medium mb-6">
          SPARC-Sponsored Three-Day Hands-On Workshop
        </p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Next-Generation Wastewater:
          <span className="text-sky-700"> Modelling & Control</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          A focused technical workshop advancing dynamic process modelling,
          intelligent control strategies, real-time monitoring, and AI-driven
          optimization for sustainable wastewater treatment systems.
        </p>

        {/* Date & Location Row */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-sky-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <path d="M3 10h18" />
              <path d="M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
            </svg>
            <span>24–27 March 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-sky-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
              <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
            <span>VIT Chennai</span>
          </div>
        </div>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Jointly Organized by Vellore Institute of Technology (VIT), Chennai &
          University of Johannesburg, South Africa
        </p>

        {/* Partner / sponsor logos */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-10">
          <div className="h-24 w-24 rounded-full bg-sky-100/70 shadow-sm ring-1 ring-sky-100 flex items-center justify-center">
            <img
              src={vitimg}
              alt="VIT logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="h-24 w-24 rounded-full bg-sky-100/70 shadow-sm ring-1 ring-sky-100 flex items-center justify-center">
            <img
              src={aimg}
              alt="University of Johannesburg logo"
              className="h-16 w-16 object-contain"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition"
          >
            Apply / Submit EOI
          </a>

          <a
            href="#program"
            className="border border-sky-600 text-sky-700 px-6 py-3 rounded-lg hover:bg-sky-50 transition"
          >
            View Program
          </a>
        </div>

        {/* Bottom Badge */}
        <div className="mt-6">
          <span className="bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm">
            Seats Limited • Selection Based
          </span>
        </div>
      </div>
      {/* Info Bar */}
      <div className="mt-16 bg-sky-700 text-white py-5 -mx-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-sky-100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <path d="M3 10h18" />
              <path d="M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
            </svg>
            <span>
              Dates: <strong>24–27 March 2026</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-sky-100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
              <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
            <span>
              Venue: <strong>VIT Chennai</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-sky-100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>
              Mode: <strong>On-site</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-sky-100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span>
              Deadline: <strong>28 February 2026</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
