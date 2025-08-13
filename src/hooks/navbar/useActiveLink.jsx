import { useState, useEffect } from 'react';

const SECTION_IDS = ['about', 'services', 'innovation', 'faq', 'contact'];

const useActiveLink = () => {
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);

  useEffect(() => {
    const handleScroll = () => {
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};

export default useActiveLink;
