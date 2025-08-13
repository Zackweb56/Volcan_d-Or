import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import useTranslation from '../../hooks/useTranslation';
import i18n from '../../i18n/index';

const FAQSection = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';

  const faqs = [
    {
      question: t('faq.secured_funds.q'),
      answer: t('faq.secured_funds.a'),
    },
    {
      question: t('faq.how_daret_works.q'),
      answer: t('faq.how_daret_works.a'),
    },
    {
      question: t('faq.who_can_use.q'),
      answer: t('faq.who_can_use.a'),
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-light text-start text-[#182e6f] mb-12">
          {t('faq.title_part1')}<br />
          <span className="font-bold">{t('faq.title_part2')}</span>
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-300 rounded-xl shadow-sm"
            >
                <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full p-6 text-left"
                    >
                    <span className="font-semibold text-2xl text-blue-600">
                        {item.question}
                    </span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#2db1e1]">
                        {openIndex === index ? (
                        <FiMinus className="text-[#2db1e1]" size={16} />
                        ) : (
                        <FiPlus className="text-[#2db1e1]" size={16} />
                        )}
                    </span>
                </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
