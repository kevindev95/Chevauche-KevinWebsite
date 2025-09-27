import MainContent from '../components/MainContent'
import Offres from '../pages/Offres'
import About from '../pages/About'
import Header from '../components/Header'
import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [page, setPage] = useState("main");
  const [activeNav, setActiveNav] = useState("home"); // 'home' | 'about' | 'offres'

  const goToOffres = () => { setPage("offres"); setActiveNav('offres'); };
  const goToMain = () => { setPage("main"); setActiveNav('home'); };
  const goToAbout = () => { setPage("about"); setActiveNav('about'); };

  // Fonction pour scroller vers la section projets
  const scrollToProjects = () => {
    const section = document.getElementById('ProjectsExemple');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveNav('about');
  };

  // Scroll vers le haut (héro)
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveNav('home');
  };

  // Met à jour l'onglet actif selon le scroll lorsque l'on est sur la page principale
  useEffect(() => {
    if (page !== 'main') return;
    const about = document.getElementById('ProjectsExemple');
    if (!about) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting && e.intersectionRatio > 0.4) {
          setActiveNav('about');
        } else {
          setActiveNav('home');
        }
      },
      { threshold: [0, 0.4, 0.6, 1] }
    );
    observer.observe(about);
    return () => observer.disconnect();
  }, [page]);

  // Applique les classes reveal quand les éléments entrent dans le viewport
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in-view');
      });
    }, { threshold: 0.15 });
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [page]);

  return (
    <div className="bg-[#101e2b] text-white min-h-screen overflow-x-hidden">
      <Header
        goToMain={goToMain}
        goToOffres={goToOffres}
        goToAbout={goToAbout}
        page={page}
        activeNav={activeNav}
        scrollToProjects={page === "main" ? scrollToProjects : undefined}
        scrollToHome={page === "main" ? scrollToHome : undefined}
      />
      <div className="pt-[72px]">{/* espace pour la navbar fixe (hauteur ~64-72px) */}
  {page === "main" && <MainContent goToOffres={goToOffres} goToAbout={goToAbout} />}
      {page === "about" && <About />}
      {page === "offres" && <Offres />}
      </div>
    </div>
  )
}

export default App