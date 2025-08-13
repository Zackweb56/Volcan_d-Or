import React from 'react';

const NavItem = ({ label, href }) => (
  <a
    href={href}
    className="relative ml-4 inline-block text-sm font-medium text-gray-100 transition-colors duration-200
               before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:w-0 before:bg-blue-400
               before:transition-all before:duration-300 hover:before:w-full"
  >
    {label}
  </a>
);

export default NavItem;