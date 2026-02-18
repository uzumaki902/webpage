function Program() {
  return (
    <section id="program" className="bg-sky-50 py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-sky-800">Program Schedule</h2>

        <div className="rounded-2xl bg-white/80 shadow-sm border border-sky-100 px-6 py-5 space-y-1">
          <h3 className="font-semibold text-xl text-sky-800">Inaugural</h3>
          <p className="text-sm font-medium text-sky-700">9:30 AM – 10:00 AM</p>
          <p className="text-sm text-gray-600">B D Subudhi (Chief Guest)</p>
        </div>

        <div className="rounded-2xl bg-white/80 shadow-sm border border-sky-100 px-6 py-5 space-y-2">
          <h3 className="font-semibold text-xl text-sky-800">
            Day 1{" "}
            <span className="text-sm font-normal text-gray-500">
              (24 March 2026)
            </span>
          </h3>
          <ul className="space-y-1.5">
            <li className="text-sm text-gray-700">
              <span className="font-semibold text-sky-700">
                Prof. Santha Kumar
              </span>
              <span className="text-gray-500"> — 11:30 AM to 1:00 PM</span>
            </li>
            <li className="text-sm text-gray-700">
              <span className="font-semibold text-sky-700">
                Prof. S. Murugavelh
              </span>
              <span className="text-gray-500"> — 2:00 PM to 3:00 PM</span>
            </li>
            <li className="text-sm text-gray-700">
              <span className="font-semibold text-sky-700">
                Prof. G. Velvizhi
              </span>
              <span className="text-gray-500"> — 3:30 PM to 4:30 PM</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white/80 shadow-sm border border-sky-100 px-6 py-5 space-y-2">
          <h3 className="font-semibold text-xl text-sky-800">
            Day 2{" "}
            <span className="text-sm font-normal text-gray-500">
              (25 March 2026)
            </span>
          </h3>
          <ul className="space-y-1.5">
            <li className="text-sm text-gray-700">
              <span className="font-semibold text-sky-700">Prof. D K Dash</span>
              <span className="text-gray-500"> — 9:30 AM to 11:00 AM</span>
            </li>
            <li className="text-sm text-gray-700">
              <span className="font-semibold text-sky-700">
                Prof. T Tyagrajan
              </span>
              <span className="text-gray-500"> — 11:30 AM to 1:00 PM</span>
            </li>
            <li className="text-sm text-gray-700">
              <span className="font-semibold text-sky-700">
                Prof. R C Panda
              </span>
              <span className="text-gray-500"> — 2:00 PM to 3:00 PM</span>
            </li>
            <li className="text-sm text-gray-700">
              <span className="font-semibold text-sky-700">
                Prof. Eldad Avital
              </span>
              <span className="text-gray-500"> — 3:30 PM to 4:30 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Program;
