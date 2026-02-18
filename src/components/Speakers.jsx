import anjali from "../assets/images/anjali.png";
import chaminda from "../assets/images/chaminda.png";
import dushmant from "../assets/images/dushmant.png";
import eldad from "../assets/images/eldad.png";
import gokul from "../assets/images/gokul.png";
import kundu from "../assets/images/kundu.png";
import murga from "../assets/images/murga.png";
import panda from "../assets/images/panda.png";
import radha from "../assets/images/radha.png";
import saroj from "../assets/images/saroj.png";
import sabumon from "../assets/images/sabumon.png";
import shamik from "../assets/images/shamik.png";
import subu from "../assets/images/subu.png";
import shanta from "../assets/images/shanta.png";
import sivakumaran from "../assets/images/sivakumaran.png";

function Speakers() {
  const speakers = [
    {
      name: "Prof. Bidyadhar Subudhi",
      org: "Key Resource Person",
      role: "Speaker",
      link: "https://iitgoa.ac.in/~bidyadhar/",
      image: subu,
    },
    {
      name: "Prof. Saroj Sundar Baral",
      org: "Key Resource Person",
      role: "Speaker",
      link: "https://www.bits-pilani.ac.in/goa/saroj-sundar-baral/",
      image: saroj,
    },
    {
      name: "Prof. Ramesh Ch Panda",
      org: "Key Resource Person",
      role: "Speaker",
      link: "https://ieeexplore.ieee.org/",
      image: panda,
    },
    {
      name: "Prof. Dusmanta Kumar Das",
      org: "Key Resource Person",
      role: "Speaker",
      link: "https://scholar.google.co.in/",
      image: dushmant,
    },
    {
      name: "Prof. T K Radhakrishna",
      org: "Key Resource Person",
      role: "Speaker",
      link: "https://www.nitt.edu/",
      image: radha,
    },
    {
      name: "Prof. Shamik Chowdhury",
      org: "IIT Kharagpur",
      role: "Guest of Honor",
      link: "https://scholar.google.com/",
      image: shamik,
    },
    {
      name: "Prof. G. Velvizhi",
      org: "VIT Vellore",
      role: "Speaker",
      link: "https://scholar.google.com/",
      image: gokul,
    },
    {
      name: "Prof. S. Murugavelh",
      org: "VIT Vellore",
      role: "Speaker",
      link: "https://www.linkedin.com/",
      image: murga,
    },
    {
      name: "Prof. Sabumon P C",
      org: "VIT Chennai",
      role: "Speaker",
      link: "https://scholar.google.com/",
      image: sabumon,
    },
    {
      name: "Prof. Sivakumaran Natarajan",
      org: "To Be Confirmed",
      role: "Speaker",
      link: "https://www.nitt.edu/",
      image: sivakumaran,
    },
    {
      name: "Prof. T Tyagrajan",
      org: "Pro VC, VIT Chennai",
      role: "Speaker",
      link: "#",
      image: radha,
    },
    {
      name: "Prof. Tushara Chaminda G.G",
      org: "University of Ruhuna, Sri Lanka",
      role: "Speaker",
      link: "https://www.eng.ruh.ac.lk/",
      image: chaminda,
    },
    {
      name: "Prof. Anjali Gopkumar",
      org: "VIT Chennai",
      role: "Speaker",
      link: "https://scholar.google.com/",
      image: anjali,
    },
    {
      name: "Prof. Elad Avital",
      org: "Queen Mary University, UK",
      role: "Speaker",
      link: "https://www.sems.qmul.ac.uk/",
      image: eldad,
    },
    {
      name: "Prof. Santha Kumar",
      org: "VIT Vellore",
      role: "Speaker",
      link: "https://scholar.google.co.in/",
      image: shanta,
    },
    {
      name: "Prof. Kundu",
      org: "SSN University, Chennai",
      role: "Speaker",
      link: "https://www.ssn.edu.in/",
      image: kundu,
    },
  ];

  return (
    <section id="speakers" className="bg-sky-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Speakers Grid */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Speakers & Organisers
          </h2>
          <p className="text-gray-600">
            Leading experts from India and internationally.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {speakers.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="font-semibold text-gray-900 text-sm leading-snug">
                  {person.name}
                </h3>

                <p className="text-xs text-gray-600 mt-2">{person.org}</p>

                <span
                  className={`inline-block mt-3 text-xs px-3 py-1 rounded-full ${
                    person.role === "Guest of Honor"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-sky-100 text-sky-700"
                  }`}
                >
                  {person.role}
                </span>

                <div className="mt-4">
                  <a
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 text-xs font-medium hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Dates */}
        <div className="mt-28 max-w-4xl mx-auto bg-sky-50 border border-sky-100 rounded-2xl p-10 shadow-sm">
          <h3 className="text-2xl  bg-blue-400 font-bold text-gray-900 text-center mb-12">
            Important Dates
          </h3>

          <div className="relative border-l-2 border-sky-400 ml-6">
            {[
              ["11 Feb 2026", "Applications Open"],
              ["28 Feb 2026", "Applications Close (11:59 PM IST)"],
              ["03 Mar 2026", "Shortlist Announcement (Email)"],
              ["10 Mar 2026", "Fee Payment Deadline"],
              ["24–27 Mar 2026", "Workshop Dates"],
            ].map(([date, text], i) => (
              <div key={i} className="mb-10 ml-8 relative">
                <div className="absolute -left-11 top-1 w-8 h-8 bg-sky-600 text-white text-sm rounded-full flex items-center justify-center shadow">
                  {i + 1}
                </div>
                <h4 className="font-semibold text-gray-900">{date}</h4>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-12 text-center">
            Shortlisted participants will receive payment instructions by email.
            The workshop fee is non-refundable.
          </p>
        </div>

        {/* Registration Fees */}
        <div className="mt-28 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Registration Fees
          </h3>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex justify-between px-6 py-4 border-b text-sm font-medium text-gray-700">
              <span>Academic Participants</span>
              <span>₹ 750</span>
            </div>

            <div className="flex justify-between px-6 py-4 text-sm font-medium text-gray-700">
              <span>Industry Participants</span>
              <span>₹ 1000</span>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-semibold text-gray-900 mb-4">
              What's Included
            </h4>

            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex gap-3">
                <span className="text-sky-600">✓</span>Participation Certificate
              </li>
              <li className="flex gap-3">
                <span className="text-sky-600">✓</span>Workshop Materials &
                Resources
              </li>
              <li className="flex gap-3">
                <span className="text-sky-600">✓</span>Registration Kit
              </li>
            </ul>

            <p className="text-xs text-gray-500 mt-10 text-center">
              All fees are inclusive of applicable GST. Travel to Chennai / VIT
              Chennai is typically borne by participants unless otherwise
              specified.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speakers;
