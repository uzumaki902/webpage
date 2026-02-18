function Speakers() {
  return (
    <section id="speakers" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-sky-800 mb-10 text-center">
          Speakers & Organisers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="shadow rounded-xl p-6 text-center">
            <div className="w-32 h-32 bg-sky-200 rounded-full mx-auto mb-4"></div>
            <h4 className="font-semibold">Prof. Name</h4>
            <p className="text-sm text-gray-500">University</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Speakers;
