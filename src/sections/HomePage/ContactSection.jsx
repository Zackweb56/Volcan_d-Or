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
    <section className="py-16 bg-white border-0 border-t border-t-gray-200" id="contact">
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#182e6f] mb-16">
          {t("contact.title")}
        </h2>

        <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Contact Info - col-4 */}
            <div className="md:col-span-4 space-y-6">

                <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <FiMapPin className="text-blue-700 text-2xl flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold">{t("contact.info.location.label")}</h4>
                        <p className="text-gray-600 -ml-9">{t("contact.info.location.value")}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                    <FiPhone className="text-blue-700 text-2xl flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                    <h4 className="font-semibold">{t("contact.info.phone.label")}</h4>
                    <a
                        href={`tel:${t("contact.info.phone.value")}`}
                        className="text-blue-500 hover:underline -ml-9 block"
                    >
                        {t("contact.info.phone.value")}
                    </a>
                    </div>
                </div>
            
                <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                    <FiMail className="text-blue-700 text-2xl flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                    <h4 className="font-semibold">{t("contact.info.email.label")}</h4>
                    <a
                        href={`mailto:${t("contact.info.email.value")}`}
                        className="text-blue-500 hover:underline -ml-9 block"
                    >
                        {t("contact.info.email.value")}
                    </a>
                    </div>
                </div>
                
                <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                    <FiClock className="text-blue-700 text-2xl flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                    <h4 className="font-semibold">{t("contact.info.support.label")}</h4>
                    <p className="text-gray-600 -ml-9">{t("contact.info.support.value")}</p>
                    </div>
                </div>
            </div>

            {/* Contact Form - col-8 */}
            <form className="md:col-span-8 bg-gray-50 shadow-md rounded-lg p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder={t("contact.form.first_name")}
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder={t("contact.form.last_name")}
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <input
                    type="email"
                    placeholder={t("contact.form.email")}
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder={t("contact.form.subject")}
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder={t("contact.form.message")}
                    rows="4"
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                <button
                    type="submit"
                    className="w-40 bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition"
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
