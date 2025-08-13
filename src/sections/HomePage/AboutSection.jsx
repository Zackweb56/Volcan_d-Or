import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import i18n from '../../i18n/index';

const AboutSection = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';

  return (
    <section
      className="relative flex flex-col lg:flex-row w-full h-[600px] overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Left Side - Image (70%) */}
      <div className="relative w-full lg:w-[60%] h-64 lg:h-full overflow-hidden z-0">
        <div
          className="absolute inset-0 bg-cover bg-center -ml-102"
          style={{
            backgroundImage: `url('assets/Volcan mockups/volcan mockups/Volcan Dor Office Logo.png')`,
            width: '150%'
          }}
        ></div>

        {/* Subtle Gradient Fade */}
        <div
          className="absolute inset-0"
          style={{
            background: isRTL
              ? 'linear-gradient(to left, transparent 80%, rgba(255,255,255,1) 100%)'
              : 'linear-gradient(to right, transparent 80%, rgba(255,255,255,1) 100%)'
          }}
        ></div>
      </div>

      {/* Right Side - Text (30%) */}
      <div className="w-full lg:w-[40%] bg-white/90 backdrop-blur-sm flex items-center px-8 lg:px-12 z-10 relative">
        <div className='-ms-32'>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed w-[80%]">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
