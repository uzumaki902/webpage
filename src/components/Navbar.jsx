import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 bg-white/95 backdrop-blur shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Updated Title */}
        <h1 className="text-lg sm:text-xl font-bold text-sky-700 tracking-tight">
          Next-Generation Wastewater 2026
        </h1>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <a href="#overview" className="hover:text-sky-600">Overview</a>
          <a href="#program" className="hover:text-sky-600">Program</a>
          <a href="#speakers" className="hover:text-sky-600">Speakers</a>
          <a href="#apply" className="hover:text-sky-600">Apply</a>
          <a href="#logistics" className="hover:text-sky-600">Logistics</a>
          <a href="#faq" className="hover:text-sky-600">FAQ</a>
          <a
            href="YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile CTA + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-sky-700 transition"
          >
            Apply
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-sky-100 text-sky-700 hover:bg-sky-50 transition"
            aria-label="Toggle navigation"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-sky-100 bg-white/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 space-y-2 text-sm font-medium text-gray-800">
            <a href="#overview" onClick={handleNavClick} className="block py-1 hover:text-sky-600">Overview</a>
            <a href="#program" onClick={handleNavClick} className="block py-1 hover:text-sky-600">Program</a>
            <a href="#speakers" onClick={handleNavClick} className="block py-1 hover:text-sky-600">Speakers</a>
            <a href="#apply" onClick={handleNavClick} className="block py-1 hover:text-sky-600">Apply</a>
            <a href="#logistics" onClick={handleNavClick} className="block py-1 hover:text-sky-600">Logistics</a>
            <a href="#faq" onClick={handleNavClick} className="block py-1 hover:text-sky-600">FAQ</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
