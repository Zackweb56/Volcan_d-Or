import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import i18n from '../../i18n/index';

const HeroSection = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';

  return (
    <section
      className="relative bg-blue-800 text-white overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-blue-800 bg-opacity-60 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/assets/')` }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-6xl pt-10 pb-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Volcan d'Or
          </h1>

          <p
            className="uppercase font-normal text-sm md:text-base text-white -mt-8"
            style={{ letterSpacing: isRTL ? 'normal' : '0.1em' }}
          >
            {t('hero.subtitle')}
          </p>

          <p className="text-base font-light md:text-md leading-relaxed text-gray-300 py-6">
            {t('hero.description')}
          </p>

          {/* Download Buttons */}
          <div>
            <span className="block font-semibold text-xl mb-3">
              {t('hero.download')}
            </span>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#"
                className="bg-blue-400 px-8 py-3 rounded shadow-md transition duration-200 flex items-center"
              >
                <img
                  src="/assets/logo-google-playstore.svg"
                  alt="Google Play"
                  className="h-6"
                />
                <p
                  className={`flex flex-col ${isRTL ? 'items-start mr-2' : 'ml-2'}`}
                >
                  <span className="font-semibold text-[11px]">
                    {t('hero.google_small')}
                  </span>
                  <span className="text-sm font-bold -mt-1">
                    {t('hero.google_main')}
                  </span>
                </p>
              </a>

              <a
                href="#"
                className="bg-blue-400 px-8 py-3 rounded shadow-md transition duration-200 flex items-center"
              >
                <img
                  src="/assets/Apple_logo_grey.svg"
                  alt="App Store"
                  className="h-6"
                />
                <p
                  className={`flex flex-col ${isRTL ? 'items-start mr-2' : 'ml-2'}`}
                >
                  <span className="font-semibold text-[11px]">
                    {t('hero.apple_small')}
                  </span>
                  <span className="text-sm font-bold -mt-1">
                    {t('hero.apple_main')}
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Phone Mockups */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
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
