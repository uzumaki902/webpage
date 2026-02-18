function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-sky-700">
          Workshop 2026
        </h1>

        <div className="hidden md:flex space-x-6 font-medium text-gray-700">
          <a href="#overview" className="hover:text-sky-600">Overview</a>
          <a href="#program" className="hover:text-sky-600">Program</a>
          <a href="#speakers" className="hover:text-sky-600">Speakers</a>
          <a href="#apply" className="hover:text-sky-600">Apply</a>
          <a href="#logistics" className="hover:text-sky-600">Logistics</a>
          <a href="#faq" className="hover:text-sky-600">FAQ</a>
        </div>

        <a
          href="YOUR_GOOGLE_FORM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
        >
          Apply Now
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
