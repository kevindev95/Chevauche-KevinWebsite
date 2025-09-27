import React from "react";

const MAILTO = "mailto:kevin-chevauche@chevauche-kevin.com?subject=Offre%20Sp%C3%A9ciale%20-%20Je%20veux%20mon%20site%20%C3%A0%205%20%E2%82%AC%2Fmois";

export default function OffreSpéciale() {
  return (
    <div className="bg-[#0A0F1C] text-white min-h-screen">
      {/* Header retiré : on utilise le Header global rendu par App.jsx
          (évite d'avoir un Header sans props qui casse la navigation SPA) */}
      <div className="h-24" />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* GAUCHE - texte */}
          <div className="text-left max-w-2xl">
            <h1
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 reveal tilt-text"
              style={{ transitionDelay: "80ms" }}
            >
              Restez toujours<br />connecté
            </h1>
            <p
              className="text-lg md:text-xl text-gray-200 mb-8 reveal tilt-text"
              style={{ transitionDelay: "160ms" }}
            >
              Votre site web à 5 euros par mois maintenant !
            </p>

            <div className="flex items-center gap-6">
              <a
                href={MAILTO}
                role="button"
                aria-label="Me contacter pour l'offre spéciale"
                className="btn-simple reveal relative inline-block overflow-hidden rounded-full"
                style={{ transitionDelay: "240ms" }}
              >
                <span
                  className="bg-layer absolute inset-0 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500"
                  aria-hidden="true"
                ></span>
                <span className="relative z-10 inline-block text-[#0b0b0b] font-bold py-4 px-8 text-lg">
                  Je veux !
                </span>
              </a>

              <div className="ml-2 reveal tilt-text" style={{ transitionDelay: "320ms" }}>
                <div className="text-sm text-gray-300">Contact</div>
                <a
                  href="mailto:kevin-chevauche@chevauche-kevin.com"
                  className="text-yellow-300"
                >
                  chevauche-kevin.com
                </a>
              </div>
            </div>
          </div>

          {/* DROITE - mockup / image clickable */}
          <div className="flex justify-center md:justify-end">
            <div className="relative reveal" style={{ transitionDelay: "120ms" }}>
              <a href={MAILTO} aria-label="Contacter pour offre spéciale - mockup" className="block tilt-hover-slow">
                  <img
                    src="/OffreSpecialeIMG1.png"
                    alt="Offre Spéciale mockup"
                    className="w-full h-full object-cover rounded-2xl"
                  />
              </a>
            </div>
          </div>
        </section>

        {/* AVANTAGES (row-reverse sur md+) avec animations sur chaque item */}
        <section className="mt-24 bg-transparent">
          <div className="flex flex-col md:flex-row-reverse md:items-start gap-10 max-w-6xl mx-auto px-4 md:px-0">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-300 mb-6 reveal" style={{ transitionDelay: "120ms" }}>Avantages:</h2>
              <ul className="space-y-4 text-gray-200">
                <li className="reveal tilt-text" style={{ transitionDelay: "160ms" }}>✅ Je m’occupe de tout de A à Z (design, mise en ligne, maintenance)</li>
                <li className="reveal tilt-text" style={{ transitionDelay: "200ms" }}>
                  ⚡ Site rapide et optimisé SEO
                </li>
                <li className="ml-6 text-sm md:text-base text-gray-200/90 reveal tilt-text" style={{ transitionDelay: "240ms" }}>
                  🏆 Preuve de performance : score GTMetrix A
                </li>
                <li className="reveal tilt-text" style={{ transitionDelay: "280ms" }}>💸 Seulement 5 €/mois, prix imbattable</li>
              </ul>
            </div>

            <div className="md:w-1/2 flex justify-end reveal" style={{ transitionDelay: "100ms" }}>
              <a href={MAILTO} aria-label="Contacter pour offre spéciale - GTMetrix" className="block tilt-hover-slow w-full max-w-[420px] md:max-w-[420px]">
                <div className="w-full h-auto rounded-xl bg-white/5 p-2 transform-gpu">
                  <img
                    src="/GtMetrixPhoto.png"
                    alt="Capture GTMetrix"
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION RAPPPEL / CTA LARGE (entièrement cliquable) */}
        <section className="mt-24">
          <a
            href={MAILTO}
            role="button"
            aria-label="Me contacter pour l'offre spéciale"
            className="cta-link reveal"
            style={{ transitionDelay: "360ms" }}
          >
            {/* fond qui scale */}
            <span className="bg-layer absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500"></span>

            {/* contenu (texte au-dessus, non transformé) */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-10 px-8 md:px-20">
              <div className="text-3xl md:text-4xl font-extrabold text-center md:text-left tilt-text">
                Je veux mon site à <span className="text-2xl md:text-3xl">5 €/mois</span>
              </div>
              <div className="inline-block bg-black/10 px-6 py-3 rounded-full font-semibold text-sm md:text-base">
                Me contacter
              </div>
            </div>
          </a>
        </section>

        <footer className="mt-20 text-center text-sm text-gray-400 pb-12 reveal tilt-text" style={{ transitionDelay: "420ms" }}>
          © {new Date().getFullYear()} Kevin Chevauché — Site géré manuellement.
        </footer>
      </main>
    </div>
  );
}