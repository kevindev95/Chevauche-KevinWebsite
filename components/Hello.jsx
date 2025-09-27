import React, { useEffect, useRef, useState } from 'react';

const Hello = ({ goToOffres, goToAbout }) => {
  // Fonction pour scroll smooth vers la section ProjectsExemple
  const scrollToProjects = (e) => {
    e.preventDefault();
    const section = document.getElementById('ProjectsExemple');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // À la première tentative de scroll (wheel/touch), scroller directement vers la section Projets en 1s
  useEffect(() => {
    let handled = false;
    let touchStartY = 0;

    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const smoothScrollTo = (targetY, duration = 1000) => {
      const startY = window.scrollY || window.pageYOffset;
      const distance = targetY - startY;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = easeInOutCubic(t);
        window.scrollTo(0, Math.round(startY + distance * eased));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const triggerFirstScroll = (e) => {
      if (handled) return;
      if (typeof e?.preventDefault === 'function') e.preventDefault();
      handled = true;
      // Cible: haut de la section Projets; fallback: 1 écran
      const el = document.getElementById('ProjectsExemple');
      const headerOffset = 0; // padding top global déjà géré dans App
      const target = el
        ? Math.max(0, (el.getBoundingClientRect().top + window.scrollY) - headerOffset)
        : window.scrollY + window.innerHeight;
      smoothScrollTo(target, 1000);
      // Nettoyage immédiat pour ne pas bloquer les scrolls suivants
      cleanup();
    };

    const onWheel = (e) => {
      // Seulement si on est en haut et qu'on scrolle vers le bas
      if (window.scrollY <= 8 && e.deltaY > 0) {
        triggerFirstScroll(e);
      }
    };

    const onTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      // Swipe vers le haut au tout début de la page
      const y = e.touches && e.touches.length > 0 ? e.touches[0].clientY : 0;
      const delta = touchStartY - y;
      if (window.scrollY <= 8 && delta > 10) {
        triggerFirstScroll(e);
      }
    };

    const cleanup = () => {
      window.removeEventListener('wheel', onWheel, wheelOpts);
      window.removeEventListener('touchstart', onTouchStart, touchStartOpts);
      window.removeEventListener('touchmove', onTouchMove, touchMoveOpts);
    };

    const wheelOpts = { passive: false };
    const touchStartOpts = { passive: true };
    const touchMoveOpts = { passive: false };
    window.addEventListener('wheel', onWheel, wheelOpts);
    window.addEventListener('touchstart', onTouchStart, touchStartOpts);
    window.addEventListener('touchmove', onTouchMove, touchMoveOpts);

    return cleanup;
  }, []);

  return (
  <div className="relative text-center px-4 pt-8 min-h-[100svh] flex flex-col items-center justify-start overflow-x-hidden w-full">
      {/* calque particules */}
      <div className="particles">
        {/* On répartit quelques points avec des vitesses/délais différents */}
  <span className="particle" style={{ left: '8%', top: '18%', ['--dx']: '7px', ['--dy']: '-5px', ['--dur']: '7s', ['--delay']: '0s', ['--amp']: '3', ['--spd']: '0.6' }} />
  <span className="particle" style={{ left: '22%', top: '34%', ['--dx']: '-6px', ['--dy']: '6px', ['--dur']: '6s', ['--delay']: '1s', ['--amp']: '2.8', ['--spd']: '0.6' }} />
  <span className="particle" style={{ left: '35%', top: '12%', ['--dx']: '5px', ['--dy']: '5px', ['--dur']: '7s', ['--delay']: '2s', ['--amp']: '2.6' }} />
  <span className="particle" style={{ left: '48%', top: '28%', ['--dx']: '-8px', ['--dy']: '-4px', ['--dur']: '8s', ['--delay']: '0.5s', ['--amp']: '3.2' }} />
  <span className="particle" style={{ left: '62%', top: '20%', ['--dx']: '6px', ['--dy']: '6px', ['--dur']: '7s', ['--delay']: '1.2s', ['--amp']: '2.5' }} />
  <span className="particle" style={{ left: '76%', top: '36%', ['--dx']: '-5px', ['--dy']: '7px', ['--dur']: '6.5s', ['--delay']: '0.8s', ['--amp']: '3' }} />
  <span className="particle" style={{ left: '88%', top: '14%', ['--dx']: '8px', ['--dy']: '-6px', ['--dur']: '9s', ['--delay']: '0.3s', ['--amp']: '3.2' }} />

  <span className="particle" style={{ left: '10%', bottom: '18%', ['--dx']: '-6px', ['--dy']: '6px', ['--dur']: '7.5s', ['--delay']: '0.7s', ['--amp']: '2.7' }} />
  <span className="particle" style={{ left: '28%', bottom: '10%', ['--dx']: '7px', ['--dy']: '4px', ['--dur']: '8s', ['--delay']: '0.2s', ['--amp']: '2.9' }} />
  <span className="particle" style={{ left: '42%', bottom: '24%', ['--dx']: '-7px', ['--dy']: '-5px', ['--dur']: '9s', ['--delay']: '1.1s', ['--amp']: '2.6' }} />
  <span className="particle" style={{ left: '56%', bottom: '16%', ['--dx']: '6px', ['--dy']: '-6px', ['--dur']: '7.8s', ['--delay']: '0.4s', ['--amp']: '2.8' }} />
  <span className="particle" style={{ left: '70%', bottom: '26%', ['--dx']: '-5px', ['--dy']: '6px', ['--dur']: '7.2s', ['--delay']: '1.4s', ['--amp']: '3' }} />
  <span className="particle" style={{ left: '84%', bottom: '12%', ['--dx']: '7px', ['--dy']: '7px', ['--dur']: '8.6s', ['--delay']: '0.9s', ['--amp']: '3.1' }} />

  <span className="particle" style={{ left: '15%', top: '50%', ['--dx']: '5px', ['--dy']: '0px', ['--dur']: '10s', ['--delay']: '0.6s', ['--amp']: '2.4' }} />
  <span className="particle" style={{ left: '32%', top: '56%', ['--dx']: '-6px', ['--dy']: '2px', ['--dur']: '11s', ['--delay']: '0.1s', ['--amp']: '2.6' }} />
  <span className="particle" style={{ left: '50%', top: '60%', ['--dx']: '0px', ['--dy']: '-6px', ['--dur']: '9s', ['--delay']: '1.6s', ['--amp']: '2.7' }} />
  <span className="particle" style={{ left: '68%', top: '52%', ['--dx']: '6px', ['--dy']: '0px', ['--dur']: '10.5s', ['--delay']: '0.5s', ['--amp']: '2.5' }} />
  <span className="particle" style={{ left: '85%', top: '58%', ['--dx']: '-5px', ['--dy']: '-3px', ['--dur']: '11s', ['--delay']: '1.3s', ['--amp']: '2.8' }} />
      </div>
  {/* Titre principal */}
  <h1 className="text-8xl font-extrabold mt-8 relative z-10 reveal reveal-up text-soft-anim hover-text-scale">Bonjour</h1>

  {/* Nom + petit soulignement jaune */}
  <h2 className="text-4xl mt-4 relative z-10 reveal reveal-up reveal-delay-1 text-soft-anim hover-text-scale">Kevin Chevauché</h2>
  <div className="w-16 h-1 bg-yellow-400 mx-auto mt-3 rounded relative z-10 reveal reveal-scale-x reveal-delay-2" />

  {/* sous-titre */}
  <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6 relative z-10 reveal reveal-blur reveal-delay-3 text-soft-anim hover-text-scale">
        Développeur Web & Designer passionné par la création d'expériences
        numériques exceptionnelles
      </p>

      {/* boutons */}
  <div className="flex flex-row justify-center items-center gap-6 mt-10 flex-wrap relative z-10 reveal reveal-up reveal-delay-4">
        <button
          onClick={goToOffres}
          className="bg-yellow-400 text-[#101e2b] font-semibold px-8 py-3 rounded-xl w-fit text-xl shadow-lg border border-yellow-400 hover:text-yellow-400 hover:bg-[#101e2b] hover:border-yellow-400 transition-all duration-300 hover-glow click-bounce"
          style={{
            boxShadow: '0 0 30px 0 #fde04766',
            letterSpacing: '0.04em'
          }}
        >
          Me contacter ?
          <span className="ml-2">→</span>
        </button>
        <button
          onClick={goToAbout || scrollToProjects}
          className="border border-yellow-400 text-yellow-400 font-medium px-7 py-3 rounded-xl w-fit text-lg hover:text-[#101e2b] hover:bg-yellow-400 transition-colors duration-300 text-center hover-tilt click-push"
        >
          À propos
        </button>
      </div>

      {/* image + chevrons */}
  <div id="kevin-image" className="flex items-center justify-center gap-24 md:gap-32 mt-12 relative z-10 reveal reveal-zoom">
        <p className="text-yellow-500 text-[9rem] relative -top-[7.5rem] hover-brace">{'{'}</p>
        <div className="rounded-full p-2 border-4 border-yellow-500 shadow-[0_0_0_6px_rgba(234,179,8,0.2)] hover-float click-rotate">
          <img src="/Kevin.png" alt="Kevin" className="h-[20rem] w-[20rem] object-cover rounded-full" />
        </div>
        <p className="text-yellow-500 text-[9rem] relative top-[7.5rem] hover-brace">{'}'}</p>
      </div>

      {/* listes défilantes */}
      <div className="mt-20 w-full">
        {(() => {
          const tags = [
            'HTML5', 'CSS3', 'Vite', 'React', 'JavaScript', 'Django', 'Sass', 'Canva'
          ];
      const palette1 = [
            'text-yellow-400', 'text-emerald-400', 'text-sky-400', 'text-indigo-400',
            'text-pink-400', 'text-orange-400', 'text-teal-300', 'text-rose-400'
          ];
          const palette2 = [
            'text-sky-400', 'text-yellow-300', 'text-fuchsia-400', 'text-cyan-300',
            'text-lime-400', 'text-orange-400', 'text-purple-400', 'text-rose-400'
          ];
      const longTags = [...tags, ...tags, ...tags];

      const Segment = ({ palette }) => (
            <div className="inline-flex items-center gap-12 pr-12">
        {longTags.map((t, i) => (
                <span key={`${t}-${i}`} className={`text-2xl font-medium ${palette[i % palette.length]} text-soft-anim`}>{t}</span>
              ))}
            </div>
          );

          // Marquee JS fluide avec inversion douce
          const MarqueeRow = ({ initialDir = -1, palette }) => {
            const wrapRef = useRef(null);
            const trackRef = useRef(null);
            const [ready, setReady] = useState(false);
            const posRef = useRef(0); // position du 1er track (px)
            const dirRef = useRef(initialDir); // direction courante [-1..1]
            const targetDirRef = useRef(initialDir);
            const speedRef = useRef(60); // px/s
            const widthRef = useRef(0);
            const rafRef = useRef(0);
            const lastTsRef = useRef(0);

            useEffect(() => {
              const measure = () => {
                if (trackRef.current) {
                  widthRef.current = trackRef.current.offsetWidth || 0;
                  if (initialDir > 0) posRef.current = -widthRef.current; else posRef.current = 0;
                  setReady(true);
                }
              };
              measure();
              const ro = new ResizeObserver(measure);
              if (trackRef.current) ro.observe(trackRef.current);
              return () => ro.disconnect();
            }, [initialDir]);

            useEffect(() => {
              const step = (ts) => {
                const last = lastTsRef.current || ts;
                const dt = Math.min(0.05, (ts - last) / 1000); // clamp 50ms
                lastTsRef.current = ts;

                // interpolation douce vers la cible
                dirRef.current += (targetDirRef.current - dirRef.current) * 0.08;
                const px = speedRef.current * dirRef.current * dt;
                let p = posRef.current + px;
                const w = widthRef.current || 1;
                if (dirRef.current < 0 && p <= -w) p += w; // boucle vers la droite
                if (dirRef.current > 0 && p >= 0) p -= w;  // boucle vers la gauche
                posRef.current = p;

                if (wrapRef.current) {
                  const first = wrapRef.current.querySelector('[data-track="0"]');
                  const second = wrapRef.current.querySelector('[data-track="1"]');
                  if (first && second) {
                    first.style.transform = `translate3d(${p}px,0,0)`;
                    second.style.transform = `translate3d(${p + w}px,0,0)`;
                  }
                }
                rafRef.current = requestAnimationFrame(step);
              };
              rafRef.current = requestAnimationFrame(step);
              return () => cancelAnimationFrame(rafRef.current);
            }, []);

            // inversion au survol du wrap
            const onEnter = () => { targetDirRef.current = -Math.sign(dirRef.current || initialDir) || -initialDir; };
            const onLeave = () => { targetDirRef.current = initialDir; };

            return (
              <div className="overflow-hidden whitespace-nowrap relative h-12" ref={wrapRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <div className="inline-flex" data-track="0" ref={trackRef} style={{ willChange: 'transform' }}>
                  <Segment palette={palette} />
                </div>
                {/* second track pour la boucle */}
                {ready && (
                  <div className="inline-flex absolute top-0 left-0" data-track="1" style={{ willChange: 'transform' }}>
                    <Segment palette={palette} />
                  </div>
                )}
              </div>
            );
          };

          return (
            <>
              {/* ligne 1 (gauche->droite) */}
              <MarqueeRow initialDir={-1} palette={palette1} />
              {/* ligne 2 (droite->gauche) */}
              <div className="mt-2">
                <MarqueeRow initialDir={1} palette={palette2} />
              </div>
            </>
          );
        })()}
      </div>
    </div>
  );
};

export default Hello;