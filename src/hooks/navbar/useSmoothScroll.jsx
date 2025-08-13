const useSmoothScroll = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70, // adjust for navbar height
        behavior: 'smooth',
      });
    }
  };
  return scrollToSection;
};

export default useSmoothScroll;
