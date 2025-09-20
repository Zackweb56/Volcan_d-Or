import React from 'react';
import { 
  FaAt, 
  FaMicrophone, 
  FaCreditCard, 
  FaLock, 
  FaRocket,
  FaEye
} from 'react-icons/fa';
import useTranslation from '../../hooks/useTranslation';
import i18n from '../../i18n/index';

const InnovationSection = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';

  const features = [
    {
      icon: <FaAt className="w-6 h-6" />,
      title: t('innovation.social_network_title'),
      description: t('innovation.social_network_desc')
    },
    {
      icon: <FaMicrophone className="w-6 h-6" />,
      title: t('innovation.ai_assistant_title'),
      description: t('innovation.ai_assistant_desc')
    },
    {
      icon: <FaCreditCard className="w-6 h-6" />,
      title: t('innovation.wallet_title'),
      description: t('innovation.wallet_desc')
    },
    {
      icon: <FaLock className="w-6 h-6" />,
      title: t('innovation.security_title'),
      description: t('innovation.security_desc')
    }
  ];

  return (
    <section className="relative py-16" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        
        {/* Title */}
        <h2 className={`text-4xl md:text-5xl font-light text-[#182e6f] mb-12 ${isRTL ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
          {t('innovation.title_part1')}<br />
          <span className="font-bold"> {t('innovation.title_part2')}</span>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border-2 p-8 border-[#182e6f] transition-all duration-300"
            >
              {/* Circular Icon Design */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {/* Outer light circle */}
                  <div className="w-24 h-24 rounded-full bg-[#182e6f50] flex items-center justify-center">
                    {/* Middle circle */}
                    <div className="w-20 h-20 rounded-full bg-[#182e6f80] flex items-center justify-center">
                      {/* Inner dark circle with icon */}
                      <div className="w-16 h-16 rounded-full bg-[#182e6f] flex items-center justify-center shadow-inner">
                        <div className="w-8 h-8 text-white flex items-center justify-center">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-base md:text-lg font-bold text-[#182e6f] mb-4 leading-tight uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Phone and Mission/Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Phone Mockup */}
          <div className="flex-shrink-0 relative">
            <div className="relative flex items-center justify-center">
              {/* Left phone - iPhone 15 Pro */}
              <div className="relative z-10 transform">
                <img
                  src="/assets/Volcan mockups/volcan mockups/iPhone 15 Pro Mockup.svg"
                  alt="iPhone 15 Pro Mockup - Portefeuilles d'épargne"
                  className="w-56 md:w-64 lg:w-160 object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Mission & Vision Content */}
          <div className="space-y-16 text-center">
            
            {/* Mission */}
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 tracking-wide">
                {t('mission.title')}
              </h2>
              
              {/* Mission Icon with decorative line */}
              <div className="flex justify-center items-center mb-6 relative">
                {/* Line behind circle */}
                <div className="absolute w-32 md:w-48 h-0.5 bg-blue-800"></div>
                
                {/* Circle with icon */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center shadow-lg">
                    <FaRocket className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <p className="text-gray-900 text-base leading-relaxed">
                {t('mission.desc')}
              </p>
            </div>

            {/* Vision */}
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 tracking-wide">
                {t('vision.title')}
              </h2>
              
              {/* Vision Icon with decorative line */}
              <div className="flex justify-center items-center mb-6 relative">
                {/* Line behind circle */}
                <div className="absolute w-32 md:w-48 h-0.5 bg-blue-800"></div>
                
                {/* Circle with icon */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center shadow-lg">
                    <FaEye className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <p className="text-gray-900 text-base leading-relaxed">
                {t('vision.desc')}
              </p>
            </div>

          </div>

        </div>
      
      </div>
    </section>
  );
};

export default InnovationSection;