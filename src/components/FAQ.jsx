import { useState } from "react";

function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is this workshop online or in-person?",
      answer: "This workshop will be conducted in-person."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, participants will receive a certificate."
    }
  ];

  return (
    <section id="faq" className="bg-sky-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold text-sky-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        {faqs.map((item, index) => (
          <div key={index} className="border-b py-4">
            <button
              className="w-full text-left font-medium flex justify-between"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {item.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>

            {openIndex === index && (
              <p className="mt-2 text-gray-600">
                {item.answer}
              </p>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}

export default FAQ;
