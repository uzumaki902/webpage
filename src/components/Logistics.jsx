function Logistics() {
  return (
    <section id="logistics" className="bg-sky-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Venue & Logistics
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          The workshop will be conducted on-site at{" "}
          <span className="font-semibold text-gray-900">
            VIT Chennai
          </span>, enabling an immersive learning environment with direct
          access to experts, peer networking, and live practical sessions.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-left">

          {/* How to Reach */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 mb-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 10l9-6 9 6-9 6-9-6Z" />
                <path d="M3 10v6l9 6 9-6v-6" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">
              How to Reach
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Chennai International Airport is approximately 30–35 km from
              VIT Chennai. The campus is accessible via taxis, ride-sharing
              services, and local transport.
            </p>
          </div>

          {/* Campus Entry */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 mb-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M8 9h8" />
                <path d="M8 13h5" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Campus Entry
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A valid photo ID is required for campus entry. Detailed
              access instructions will be shared with selected
              participants prior to the workshop.
            </p>
          </div>

          {/* Accommodation */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 mb-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21V7l9-4 9 4v14" />
                <path d="M3 10h18" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Accommodation
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Accommodation and food arrangements will be communicated
              separately to shortlisted participants. Check-in details
              will be shared via email.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Logistics;
