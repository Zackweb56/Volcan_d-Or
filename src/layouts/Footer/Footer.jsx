import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import i18n from '../../i18n/index';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';

  return (
    <footer className="bg-gray-900 text-white py-10" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left - Logo and description */}
        <div>
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <img
              src="/assets/Logo variations/normal/white icon/icon only.svg"
              alt="Volcan d'Or logo"
              className="h-10"
            />
            <span>VOLCAN D'OR</span>
          </h2>

          <p className="text-gray-400 text-sm mb-4 w-50">
            Volcan d’Or {t('footer.company_description')}
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaYoutube /></a>
          </div>
        </div>

        {/* Middle - Links */}
        <div>
          <h3 className="font-semibold mb-3">{t('footer.links.title')}</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">{t('footer.links.mentions_legales')}</a></li>
            <li><a href="#">{t('footer.links.politique')}</a></li>
            <li><a href="#">{t('footer.links.conditions_generales')}</a></li>
          </ul>
        </div>

        {/* Right - Download App */}
        <div>
          <span className="block font-semibold text-md mb-3">
            {t('hero.download')}
          </span>
          <div className="flex flex-row gap-2 flex-wrap">
            {/* Google Play Button */}
            <a
              href="#"
              className="bg-gray-900 border border-white px-5 py-3 rounded shadow-md transition duration-200 flex items-center gap-2"
            >
              <img
                src="/assets/logo-google-playstore.svg"
                alt="Google Play"
                className="h-6"
              />
              <p className={`flex flex-col ${isRTL ? 'items-end' : 'items-start'}`}>
                <span className="font-semibold text-[11px]">
                  {t('hero.google_small')}
                </span>
                <span className="text-sm font-bold -mt-1">
                  {t('hero.google_main')}
                </span>
              </p>
            </a>

            {/* App Store Button */}
            <a
              href="#"
              className="bg-gray-900 border border-white px-5 py-3 rounded shadow-md transition duration-200 flex items-center gap-2"
            >
              <img
                src="/assets/Apple_logo_grey.svg"
                alt="App Store"
                className="h-6"
              />
              <p className={`flex flex-col ${isRTL ? 'items-end' : 'items-start'}`}>
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

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-gray-500 text-xs border-t border-gray-700 pt-4">
        Copyright © {new Date().getFullYear()} <b className='text-white'>Volcan d’Or</b>. {t('footer.copyright_extra')}
      </div>
    </footer>
  );
};

export default Footer;
