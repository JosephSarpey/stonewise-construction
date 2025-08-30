import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';

export default function FAQ({ showAll = false, maxItems = 3, showTitle = true, showViewAll = true }) {
  const [openIndex, setOpenIndex] = useState(showAll ? null : 0);
  const displayedFaqs = showAll ? faqs : faqs.slice(0, maxItems);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our construction services, process, and more.
            </p>
          </div>
        )}
        
        <div className="max-w-4xl mx-auto">
          {displayedFaqs.map((faq, index) => (
            <div key={faq.id} className="mb-4 border-b border-gray-200 last:border-0">
              <button
                className={`w-full text-left py-4 px-6 bg-white hover:bg-gray-50 rounded-lg transition-colors duration-200 ${
                  openIndex === index ? 'shadow-md' : ''
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${faq.id}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-[#896267] transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div id={`faq-${faq.id}`} className="px-6 py-4 text-gray-600 bg-white rounded-b-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
          
          {!showAll && showViewAll && (
            <div className="mt-8 text-center">
              <Link 
                to="/faq" 
                className="inline-flex items-center text-[#896267] hover:text-[#563D40] font-medium transition-colors duration-200"
              >
                View All FAQs
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}