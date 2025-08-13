import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import i18n from '../../i18n/index';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';

  const testimonials = [
    {
      img: '/assets/testimonials_images/saida.png',
      name: t('testimonials.saida.name'),
      city: t('testimonials.saida.city'),
      text: t('testimonials.saida.text'),
    },
    {
      img: '/assets/testimonials_images/monir.png',
      name: t('testimonials.monir.name'),
      city: t('testimonials.monir.city'),
      text: t('testimonials.monir.text'),
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-0 border-t border-t-gray-200" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#182e6f] mb-16">
          {t('testimonials.title')}
        </h2>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#182e6f] text-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-400 -mt-16 mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & City */}
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-300 font-light mb-4">{item.city}</p>

              {/* Testimonial Text */}
              <p className="text-base font-light leading-relaxed italic">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
