// src/sections/HomePage/ContactSection.jsx
import React from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import useTranslation from '../../hooks/useTranslation';
import i18n from '../../i18n/index';

const ContactSection = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';

  return (
    <section 
      className="py-16 bg-white border-0 border-t border-t-gray-200" 
      id="contact" 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        {/* Title */}
        <h2 className={`text-4xl md:text-5xl font-bold text-center text-[#182e6f] mb-16 text-center`}>
          {t("contact.title")}
        </h2>

        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Contact Info - col-4 */}
          <div className={`md:col-span-4 space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            {[
              { Icon: FiMapPin, label: "location.label", value: "location.value" },
              { Icon: FiPhone, label: "phone.label", value: "phone.value", isLink: true, linkPrefix: 'tel:' },
              { Icon: FiMail, label: "email.label", value: "email.value", isLink: true, linkPrefix: 'mailto:' },
              { Icon: FiClock, label: "support.label", value: "support.value" },
            ].map(({ Icon, label, value, isLink, linkPrefix }, idx) => (
              <div
                key={idx}
                className={`flex gap-4 items-center`}
              >
                <Icon className="text-blue-700 text-2xl flex-shrink-0" />
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <h4 className="font-semibold">{t(`contact.info.${label}`)}</h4>
                  {isLink ? (
                    <a
                      href={`${linkPrefix}${t(`contact.info.${value}`)}`}
                      className="text-blue-500 hover:underline block"
                    >
                      {t(`contact.info.${value}`)}
                    </a>
                  ) : (
                    <p className="text-gray-600">{t(`contact.info.${value}`)}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form - col-8 */}
          <form className={`md:col-span-8 bg-gray-50 shadow-md rounded-lg p-6 space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t("contact.form.first_name")}
                className={`w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isRTL ? 'text-right' : 'text-left'}`}
              />
              <input
                type="text"
                placeholder={t("contact.form.last_name")}
                className={`w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isRTL ? 'text-right' : 'text-left'}`}
              />
            </div>
            <input
              type="email"
              placeholder={t("contact.form.email")}
              className={`w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isRTL ? 'text-right' : 'text-left'}`}
            />
            <input
              type="text"
              placeholder={t("contact.form.subject")}
              className={`w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isRTL ? 'text-right' : 'text-left'}`}
            />
            <textarea
              placeholder={t("contact.form.message")}
              rows="4"
              className={`w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isRTL ? 'text-right' : 'text-left'}`}
            ></textarea>
            <button
              type="submit"
              className="w-40 bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition cursor-pointer"
            >
              {t("contact.form.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
