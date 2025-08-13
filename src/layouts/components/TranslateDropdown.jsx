import React from 'react';
import { useTranslation } from 'react-i18next';

const TranslateDropdown = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      value={i18n.language}
      onChange={handleChange}
      className="text-sm rounded-md px-2 py-1 bg-white"
    >
  <option value="fr">🇫🇷 FR</option>
  <option value="ar">🇲🇦 AR</option>
  <option value="en">🇬🇧 EN</option>
    </select>
  );
};

export default TranslateDropdown;
