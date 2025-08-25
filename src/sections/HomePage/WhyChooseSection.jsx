import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import i18n from '../../i18n/index';
import { 
  FaShieldAlt, 
  FaStar, 
  FaCheckCircle, 
  FaUsers, 
  FaEye, 
  FaGlobeAfrica 
} from 'react-icons/fa';

const WhyChooseSection = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';

  const benefits = [
    {
      icon: <FaShieldAlt className="w-7 h-7" />,
      title: t('why_choose.benefits.financial_security.title'),
      description: t('why_choose.benefits.financial_security.desc')
    },
    {
      icon: <FaStar className="w-7 h-7" />,
      title: t('why_choose.benefits.ease_of_use.title'),
      description: t('why_choose.benefits.ease_of_use.desc')
    },
    {
      icon: <FaCheckCircle className="w-7 h-7" />,
      title: t('why_choose.benefits.fully_compliant.title'),
      description: t('why_choose.benefits.fully_compliant.desc')
    },
    {
      icon: <FaUsers className="w-7 h-7" />,
      title: t('why_choose.benefits.inclusive.title'),
      description: t('why_choose.benefits.inclusive.desc')
    },
    {
      icon: <FaEye className="w-7 h-7" />,
      title: t('why_choose.benefits.transparency.title'),
      description: t('why_choose.benefits.transparency.desc')
    },
    {
      icon: <FaGlobeAfrica className="w-7 h-7" />,
      title: t('why_choose.benefits.culturally_relevant.title'),
      description: t('why_choose.benefits.culturally_relevant.desc')
    }
  ];

  return (
    <section className="relative bg-white py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-light text-center md:text-left text-[#182e6f] mb-12">
          {t('why_choose.title_part1')}<br />
          <span className="font-bold">{t('why_choose.title_part2')}</span>
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group p-6 rounded-lg shadow-lg hover:shadow-md bg-white transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#4169E1] flex items-center justify-center shadow-lg group-hover:shadow-lg transition-all duration-300">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base md:text-lg font-bold text-[#182e6f] mb-2 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
