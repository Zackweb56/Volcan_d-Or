import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import i18n from '../../i18n/index';

const AboutSection = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';

  return (
    <section
      className="relative flex flex-col sm:flex-row w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Image - Full width on mobile, left side on larger screens */}
      <div className="absolute inset-0 sm:relative sm:w-[60%] h-full overflow-hidden z-0">
        {/* Mobile version - positioned at -98% */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:hidden"
          style={{
            backgroundImage: `url('assets/Volcan mockups/volcan mockups/Volcan Dor Office Logo.png')`,
            width: '190%',
            left: '-140%'
          }}
        ></div>
        
        {/* Tablet and Desktop version - positioned at -35% */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden sm:block"
          style={{
            backgroundImage: `url('assets/Volcan mockups/volcan mockups/Volcan Dor Office Logo.png')`,
            width: '150%',
            left: '-35%'
          }}
        ></div>

        {/* Mobile Gradient Fade - different for mobile layout */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            right: '48%',
            background: isRTL
            ? 'linear-gradient(to left, transparent 0%, rgba(255,255,255,1) 10%)'
            : 'linear-gradient(to right, transparent 10%, rgba(255,255,255,1) 100%)'
          }}
        ></div>

        {/* Tablet and Desktop Gradient Fade - original fade */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background: isRTL
              ? 'linear-gradient(to left, transparent 80%, rgba(255,255,255,1) 100%)'
              : 'linear-gradient(to right, transparent 80%, rgba(255,255,255,1) 100%)'
          }}
        ></div>
      </div>

      {/* Text Content - Full width centered on mobile, right side on larger screens */}
      <div className="relative sm:relative w-full sm:w-[40%] flex items-center px-4 sm:px-6 lg:px-12 z-10 py-8 sm:py-0">
        <div className={`w-full mt-20 sm:mt-0 sm:-ms-16 sm:-ms-24 lg:-ms-32 ${isRTL ? 'text-center sm:text-right' : 'text-center sm:text-left'}`}>
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-8 sm:mb-4 lg:mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mx-auto sm:mx-0 w-[75%] sm:w-[90%] sm:w-[85%] lg:w-full">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
