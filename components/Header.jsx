import React, { useState } from 'react';

const Header = ({ goToMain, goToOffres, goToAbout, page, scrollToProjects, scrollToHome, activeNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleAboutClick = () => {
    if (goToAbout) goToAbout();
    else {
      // fallback: comportement précédent (scroll)
      if (page !== 'main') {
        goToMain?.();
        setTimeout(() => scrollToProjects?.(), 200);
      } else {
        scrollToProjects?.();
      }
    }
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    if (page !== 'main') {
      goToMain?.();
      // on remonte en haut une fois sur la page main
      setTimeout(() => scrollToHome?.(), 100);
    } else {
      scrollToHome?.();
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#101e2b] shadow-md py-4">
      <div className="px-4 md:px-10 lg:px-16 max-w-6xl mx-auto flex justify-between items-center">
        <h3
          className="text-lg font-bold text-yellow-400 cursor-pointer tracking-wide"
          onClick={goToMain}
        >
          Chevauché Kevin
        </h3>
    <nav className="hidden md:flex gap-8 items-center">
          <button
            onClick={handleHomeClick}
      className={`text-base font-semibold pb-1 transition-colors hover-scale ${
              activeNav === 'home' && page === 'main' ? 'text-yellow-400 border-b-2 border-yellow-400' : page === 'offres' ? 'text-white/90 hover:text-yellow-400' : 'text-white/90 hover:text-yellow-400'
            }`}
          >
            Accueil
          </button>
          <button
            onClick={handleAboutClick}
      className={`text-base font-semibold pb-1 transition-colors hover-scale ${
              (page === 'about' || (page === 'main' && activeNav === 'about'))
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-white/90 hover:text-yellow-400'
            }`}
          >
            À propos
          </button>
          <button
            onClick={goToOffres}
      className={`text-base font-semibold pb-1 transition-colors hover-scale ${
              page === 'offres' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-white/90 hover:text-yellow-400'
            }`}
          >
            Offres
          </button>
        </nav>
        <button onClick={toggleMenu} aria-label="Toggle menu" className="text-3xl cursor-pointer text-white md:hidden">☰</button>
      </div>
      {isOpen && (
        <nav className="absolute top-full right-4 mt-2 bg-[#101e2b] shadow-md rounded-md w-48 md:hidden">
          <ul className="list-none p-2 m-0">
            <li>
              <button onClick={handleHomeClick} className="block w-full text-left py-1 px-3 hover:bg-[#2e3235] rounded">Accueil</button>
            </li>
            <li>
              <button onClick={handleAboutClick} className="block w-full text-left py-1 px-3 hover:bg-[#2e3235] rounded">À propos</button>
            </li>
            <li>
              <button onClick={goToOffres} className="block w-full text-left py-1 px-3 hover:bg-[#2e3235] rounded">Offres</button>
            </li>
            <li>
              <a href="mailto:kevin-chevauche@chevauche-kevin.com" className="block py-1 px-3 hover:bg-[#2e3235] rounded">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;