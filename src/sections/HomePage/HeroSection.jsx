import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import i18n from '../../i18n/index';

const HeroSection = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';
  
  return (
    <section
      className="relative text-white overflow-hidden min-h-screen"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/assets/volcan_hero_bg.svg')` }}
      ></div>
      
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-800/80"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 max-w-6xl pt-20 sm:pt-24 lg:pt-10 pb-16 sm:pb-20 flex flex-col lg:flex-row items-center justify-between min-h-screen lg:min-h-0">
        {/* Left Content */}
        <div className={`lg:w-1/2 space-y-4 sm:space-y-6 w-full ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            {t('hero.maintitle')}
          </h1>

          <p
            className={`uppercase font-normal text-[7px] sm:text-sm md:text-base text-white ${isRTL ? '-mt-1 sm:-mt-2 lg:-mt-4' : '-mt-2 sm:-mt-4 lg:-mt-8'}`}
            style={{ letterSpacing: isRTL ? 'normal' : '0.1em' }}
          >
            {t('hero.subtitle')}
          </p>

          <p className="text-sm sm:text-base md:text-md font-extralight leading-relaxed text-gray-300 py-4 sm:py-6 max-w-lg mx-auto lg:mx-0">
            {t('hero.description')}
          </p>

          {/* Download Buttons */}
          <div className="w-full">
            <span className="block font-semibold text-lg sm:text-xl mb-3">
              {t('hero.download')}
            </span>
            <div className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="bg-blue-400 px-6 sm:px-8 py-3 rounded shadow-md transition duration-200 flex items-center justify-center sm:justify-start"
              >
                <img
                  src="/assets/logo-google-playstore.svg"
                  alt="Google Play"
                  className="h-5 sm:h-6"
                />
                <p
                  className={`flex flex-col ${isRTL ? 'items-start mr-2' : 'ml-2'}`}
                >
                  <span className="font-semibold text-[10px] sm:text-[11px]">
                    {t('hero.google_small')}
                  </span>
                  <span className="text-xs sm:text-sm font-bold -mt-1">
                    {t('hero.google_main')}
                  </span>
                </p>
              </a>
              <a
                href="#"
                className="bg-blue-400 px-6 sm:px-8 py-3 rounded shadow-md transition duration-200 flex items-center justify-center sm:justify-start"
              >
                <img
                  src="/assets/Apple_logo_grey.svg"
                  alt="App Store"
                  className="h-5 sm:h-6"
                />
                <p
                  className={`flex flex-col ${isRTL ? 'items-start mr-2' : 'ml-2'}`}
                >
                  <span className="font-semibold text-[10px] sm:text-[11px]">
                    {t('hero.apple_small')}
                  </span>
                  <span className="text-xs sm:text-sm font-bold -mt-1">
                    {t('hero.apple_main')}
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Phone Mockups */}
        <div className="lg:w-1/2 mt-8 sm:mt-12 lg:mt-0 flex justify-center w-full">
          <img
            src="/assets/Volcan mockups/volcan mockups/phone_screen_mockup.png"
            alt="Volcan d'Or App"
            className="max-w-[180%] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;