import React, { useState } from 'react';
import TranslateDropdown from '../components/TranslateDropdown';
import { useTranslation } from 'react-i18next';
import NavItem from '../components/NavItem';
import BurgerToggleMenu from '../components/BurgerToggleMenu';
import useResponsive from '../../hooks/navbar/useResponsive';

const Navbar = () => {
  const { t } = useTranslation();
  const isMobile = useResponsive();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t('navbar.about'), href: '#about' },
    { label: t('navbar.services'), href: '#services' },
    { label: t('navbar.innovation'), href: '#innovation' },
    { label: t('navbar.faq'), href: '#faq' },
    { label: t('navbar.contact'), href: '#contact' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-transparent absolute w-full top-0 z-50 py-4">
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/assets/Logo variations/normal/white icon/icon only.svg"
            alt="Volcan d'Or logo"
            className="h-10"
          />
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <NavItem key={index} label={item.label} href={item.href} />
            ))}
            <TranslateDropdown />
          </div>
        )}

        {/* Mobile Burger */}
        {isMobile && (
          <BurgerToggleMenu isOpen={menuOpen} onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div className="bg-white absolute top-full left-0 w-full shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              label={item.label}
              href={item.href}
              isMobile={true}
              onClick={() => setMenuOpen(false)} // close menu on click
            />
          ))}
          <TranslateDropdown />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
