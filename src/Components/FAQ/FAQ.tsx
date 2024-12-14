import { useState } from "react";
import Container from "../../Components/Container";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do you handle data security and privacy?",
    answer: "We will be implementing proper user authentication for secure access and data provided by the user in the app will be kept confidential.",
  },
  {
    question: "Can this app inform the condition of the road too?",
    answer: "Yes it can do so with CCTV Footages and Google Maps API",
  },
  {
    question: "Can I set routine as well as schedule?",
    answer: "Absolutely! You can set daily routines and schedules to optimize your routes.",
  },
  {
    question: "What if the alternative route is also jammed?",
    answer: "We send out alerts to let users know if their current route is becoming crowded, giving them the chance to switch paths before they hit traffic.",
  },
  {
    question: "Can the app estimate the duration of the traffic?",
    answer: "Yes, the app can estimate the traffic jam duration based upon the jam pattern and history of a particular route. The prediction model can then predict the duration. Another way is to provide the photo of the particular route to the user at that particular instance of time, for giving an idea of how long the jam might keep jamming.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-[#f4f4f4] pt-16 pb-10 max-sm:px-4">
        <Container>
      <h1 className="text-2xl sm:text-3xl font-bold text-[#1E209A] mb-4">FAQ's</h1>
      <p className="text-gray-700 font-medium mb-6">Explore answers to common questions about FLOWMI</p>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 flex justify-between items-center bg-white rounded-xl text-gray-800  focus:outline-none shadow"
            >
              <span className="font-bold">{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06-.02L10 10.3l3.71-3.11a.75.75 0 111.02 1.1l-4 3.35a.75.75 0 01-1.02 0l-4-3.35a.75.75 0 01-.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-600 bg-white rounded-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      </Container>
    </div>
  );
};

export default FAQ;
