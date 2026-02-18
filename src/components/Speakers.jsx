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
    { name: "Prof. Bidyadhar Subudhi", org: "Key Resource Person", role: "Speaker", link: "#", image: subu },
    { name: "Prof. Saroj Sundar Baral", org: "Key Resource Person", role: "Speaker", link: "#", image: saroj },
    { name: "Prof. Ramesh Ch Panda", org: "Key Resource Person", role: "Speaker", link: "#", image: panda },
    { name: "Prof. Dusmanta Kumar Das", org: "Key Resource Person", role: "Speaker", link: "#", image: dushmant },
    { name: "Prof. T K Radhakrishna", org: "Key Resource Person", role: "Speaker", link: "#", image: radha },
    { name: "Prof. Shamik Chowdhury", org: "IIT Kharagpur", role: "Guest of Honor", link: "#", image: shamik },
    { name: "Prof. G. Velvizhi", org: "VIT Vellore", role: "Speaker", link: "#", image: gokul },
    { name: "Prof. S. Murugavelh", org: "VIT Vellore", role: "Speaker", link: "#", image: murga },
    { name: "Prof. Sabumon P C", org: "VIT Chennai", role: "Speaker", link: "#", image: sabumon },
    { name: "Prof. Sivakumaran Natarajan", org: "To Be Confirmed", role: "Speaker", link: "#", image: sivakumaran },
    { name: "Prof. T Tyagrajan", org: "Pro VC, VIT Chennai", role: "Speaker", link: "#", image: radha },
    { name: "Prof. Tushara Chaminda G.G", org: "University of Ruhuna, Sri Lanka", role: "Speaker", link: "#", image: chaminda },
    { name: "Prof. Anjali Gopkumar", org: "VIT Chennai", role: "Speaker", link: "#", image: anjali },
    { name: "Prof. Elad Avital", org: "Queen Mary University, UK", role: "Speaker", link: "#", image: eldad },
    { name: "Prof. Santha Kumar", org: "VIT Vellore", role: "Speaker", link: "#", image: shanta },
    { name: "Prof. Kundu", org: "SSN University, Chennai", role: "Speaker", link: "#", image: kundu },
  ];

  return (
    <section id="speakers" className="bg-sky-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

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
              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="font-semibold text-gray-900 text-sm leading-snug">
                  {person.name}
                </h3>

                <p className="text-xs text-gray-600 mt-2">
                  {person.org}
                </p>

                {/* Role Badge */}
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

      </div>
    </section>
  );
}

export default Speakers;
