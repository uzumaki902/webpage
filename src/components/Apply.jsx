function Apply() {
  return (
    <section id="apply" className="bg-sky-50 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">How to Apply</h2>

        {/* Steps Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {["Submit EOI", "Review", "Shortlist", "Pay Fee", "Attend!"].map(
            (step, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shadow-sm">
                    <span className="text-lg font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">{step}</p>
                </div>

                {/* Line between circles */}
                {index !== 4 && (
                  <div className="hidden md:block w-10 h-[2px] bg-sky-200"></div>
                )}
              </div>
            ),
          )}
        </div>

        {/* What We Look For Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-sky-100 p-8 text-left mb-12">
          <h3 className="font-semibold text-gray-900 mb-4">What we look for</h3>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li>
              • Alignment with the workshop theme (water / environment / sensing
              / data science / policy)
            </li>
            <li>• Motivation and how you plan to use the learning</li>
            <li>
              • Comfort with basic quantitative thinking (and willingness to
              learn)
            </li>
          </ul>
        </div>

        {/* Apply Button */}
        <a
          href="YOUR_GOOGLE_FORM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sky-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-sky-700 transition"
        >
          Apply / Submit EOI
        </a>
      </div>
    </section>
  );
}

export default Apply;
