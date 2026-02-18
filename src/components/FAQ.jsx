import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is this workshop online or in-person?",
      answer:
        "The workshop will be conducted in-person at VIT Chennai.",
    },
    {
      question: "How are participants selected?",
      answer:
        "Participants are selected based on alignment with the workshop theme, motivation, and background relevance.",
    },
    {
      question: "When will I know if I'm selected?",
      answer:
        "Shortlisted participants will be notified via email as per the Important Dates timeline.",
    },
    {
      question: "What does the fee cover?",
      answer:
        "The registration fee includes access to all sessions, workshop materials, participation certificate, and registration kit.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes, all participants who complete the workshop will receive a participation certificate.",
    },
    {
      question: "Will the schedule change?",
      answer:
        "The organizing team reserves the right to make minor adjustments to the schedule if required.",
    },
  ];

  return (
    <section id="faq" className="bg-sky-50 py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left py-4 font-medium text-gray-800"
              >
                <span>{item.question}</span>

                {/* Chevron */}
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm pb-4 pr-6">
                  {item.answer}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
