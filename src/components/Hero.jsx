function Hero() {
  return (
    <section className="bg-linear-to-b from-sky-50 to-white pt-32 pb-24 px-6 text-center">

      <div className="max-w-5xl mx-auto">

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
          intelligent control strategies, real-time monitoring, and
          AI-driven optimization for sustainable wastewater treatment systems.
        </p>

        {/* Date & Location Row */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-600 text-sm">

          <div className="flex items-center gap-2">
            📅 <span>24–27 March 2026</span>
          </div>

          <div className="flex items-center gap-2">
            📍 <span>VIT Chennai</span>
          </div>

        </div>

        {/* Logos Row (Replace with real images later) */}
        <div className="mt-10 flex justify-center items-center gap-8">
          <div className="w-16 h-16 bg-sky-200 rounded-full"></div>
          <div className="w-16 h-16 bg-sky-200 rounded-full"></div>
          <div className="w-16 h-16 bg-sky-200 rounded-full"></div>
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
    </section>
  );
}

export default Hero;
