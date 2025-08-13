import React from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const BurgerToggleMenu = ({ isOpen, onClick }) => (
  <button
    className="md:hidden flex items-center px-3 py-2 text-white hover:text-blue-300"
    onClick={onClick}
    aria-label="Toggle menu"
  >
    {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
  </button>
);

export default BurgerToggleMenu;
