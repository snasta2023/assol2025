import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are stretch ceilings?",
    answer: "Stretch ceilings are a modern interior design solution consisting of a lightweight, PVC membrane that is stretched and secured to a perimeter track, creating a smooth, seamless surface. They can be installed below existing ceilings and are perfect for hiding imperfections or installations."
  },
  {
    question: "How long does installation take?",
    answer: "The installation time varies depending on the room size and complexity, but most residential rooms can be completed in 1-2 days. Larger commercial projects may take longer."
  },
  {
    question: "Are stretch ceilings durable?",
    answer: "Yes, stretch ceilings are highly durable and can last up to 25 years with proper maintenance. They are resistant to water, dust, and won't crack or fade over time."
  },
  {
    question: "Can you install lighting in stretch ceilings?",
    answer: "Absolutely! Stretch ceilings are perfect for integrating various lighting solutions, including recessed lights, LED strips, and custom lighting designs. We can create stunning effects with both natural and artificial lighting."
  },
  {
    question: "Do stretch ceilings require maintenance?",
    answer: "Stretch ceilings require minimal maintenance. They can be easily cleaned with a soft cloth and mild soap solution. They don't accumulate dust and are resistant to moisture and mold."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our stretch ceiling solutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;