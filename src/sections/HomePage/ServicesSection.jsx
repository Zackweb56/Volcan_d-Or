import React from 'react';
import { 
  FaPiggyBank, 
  FaChartBar, 
  FaWallet, 
  FaExchangeAlt, 
  FaEye,
  FaUsers,
  FaShieldAlt,
  FaCreditCard,
  FaFileInvoiceDollar
} from 'react-icons/fa';
import useTranslation from '../../hooks/useTranslation';
import i18n from '../../i18n/index';

const ServicesSection = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';

  // Icons for Portefeuilles d'épargne features
  const portfolioFeatures = [
    {
      icon: <FaPiggyBank className="w-4 h-4" />,
      text: t('services.point1')
    },
    {
      icon: <FaChartBar className="w-4 h-4" />,
      text: t('services.point2')
    },
    {
      icon: <FaWallet className="w-4 h-4" />,
      text: t('services.point3')
    },
    {
      icon: <FaExchangeAlt className="w-4 h-4" />,
      text: t('services.point4')
    },
    {
      icon: <FaEye className="w-4 h-4" />,
      text: t('services.point5')
    }
  ];

  // Icons for Tontine Digitale features  
  const tontineFeatures = [
    {
      icon: <FaUsers className="w-4 h-4" />,
      text: t('services.tontine_point1')
    },
    {
      icon: <FaShieldAlt className="w-4 h-4" />,
      text: t('services.tontine_point2')
    },
    {
      icon: <FaCreditCard className="w-4 h-4" />,
      text: t('services.tontine_point3')
    },
    {
      icon: <FaFileInvoiceDollar className="w-4 h-4" />,
      text: t('services.tontine_point4')
    }
  ];

  return (
    <section className="relative bg-gray-50 py-16" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        
        {/* Title & description */}
        <div className="mb-16 text-center lg:text-start">
          <h2 className="text-5xl md:text-5xl font-light text-[#182e6f]">
            {t('services.nos')}<br />
            <span className="font-bold">{t('services.services')}</span>
          </h2>
          <p className="mt-8 text-base md:text-lg text-gray-900 leading-relaxed max-w-full font-extralight md:font-normal text-center lg:text-left">
            {t('services.description')}
          </p>
        </div>

        {/* Services Container */}
        <div className="space-y-20">
          
          {/* 1st service: Portefeuilles d'épargne */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
            {/* Phone mockups */}
            <div className="flex-shrink-0 relative w-full lg:w-auto">
              <div className="relative flex items-center justify-center">
                <div className="relative z-10 transform -rotate-6">
                  <img
                    src="/assets/Volcan mockups/volcan mockups/iphone-15-pro-on-white-background-v6-front-view.png"
                    alt={t('services.portfolios_title')}
                    className="block mx-auto w-56 md:w-56 lg:w-150 object-cover object-center scale-110 md:scale-100"
                    style={{ 
                        clipPath: 'inset(10% 15% 10% 15%)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center lg:text-left">
                {t('services.portfolios_title')}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-center lg:text-left">
                {t('services.portfolios_desc')}
              </p>
              
              <div className="space-y-4">
                {portfolioFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start mb-4 bg-white rounded-md p-4 drop-shadow-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2nd service: Tontine Digitale */}
          <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-12 lg:gap-16">
            {/* Phone mockups */}
            <div className="flex-shrink-0 relative w-full lg:w-auto">
              <div className="relative flex items-center justify-center">
                <div className="relative z-20 transform translate-x-0 lg:translate-x-8">
                  <img
                    src="/assets/Volcan mockups/volcan mockups/iPhone 11 Pro Free Premium Mockup PSD.png"
                    alt={t('services.tontine_title')}
                    className="block mx-auto w-56 md:w-56 lg:w-150 object-cover object-center scale-110 md:scale-100"
                    style={{ 
                        clipPath: 'inset(10% 15% 10% 15%)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center lg:text-left">
                {t('services.tontine_title')}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-center lg:text-left">
                {t('services.tontine_desc')}
              </p>

              <div className="space-y-4">
                {tontineFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start mb-4 bg-white rounded-md p-4 drop-shadow-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;