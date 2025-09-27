import React from "react";

const offres = [
  {
    titre: "Site React Monopage",
    prix: "400€",
    couleur: "bg-blue-900",
    description: (
      <>
        <span className="block mb-2">Page vitrine simple et responsive</span>
        <ul className="list-disc list-inside text-base text-gray-300">
          <li>Présentation de votre activité</li>
          <li>Section contact</li>
          <li>Horaires et infos pratiques</li>
        </ul>
      </>
    ),
    populaire: false,
  },
  {
    titre: "React Monopage évoluée",
    prix: "500€",
    couleur: "bg-blue-700",
    description: (
      <>
        <span className="block mb-2">Page plus travaillée, moderne et interactive</span>
        <ul className="list-disc list-inside text-base text-gray-300">
          <li>Animations et transitions</li>
          <li>Formulaire de contact avancé</li>
          <li>Design sur-mesure</li>
        </ul>
      </>
    ),
    populaire: true,
  },
  {
    titre: "Site Fullstack",
    prix: "1200€",
    couleur: "bg-yellow-500 text-[#101e2b]",
    description: (
      <>
        <span className="block mb-2">Frontend React + Backend (API, base de données…)</span>
        <ul className="list-disc list-inside text-base text-gray-800">
          <li>Formulaire dynamique relié à une base</li>
          <li>Tableau de bord possible</li>
          <li>Fonctionnalités personnalisées</li>
        </ul>
      </>
    ),
    populaire: false,
  },
];

const email = "kevin-chevauche@chevauche-kevin.com";

const Offres = () => (
  <div className="bg-[#101e2b] text-white">
    <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
      <header className="text-center mb-12 reveal">
  <h1 className="text-4xl md:text-5xl font-extrabold text-soft-anim hover-text-scale">💼 Offres de création de site</h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded" />
      </header>

  <div className="grid md:grid-cols-3 gap-8 md:gap-10">
        {offres.map((offre, idx) => (
          <div
            key={offre.titre}
            onClick={() => (window.location.href = `mailto:${email}?subject=Demande%20${encodeURIComponent(offre.titre)}`)}
            className={`
      reveal ${idx===0? 'reveal-left' : idx===1? 'reveal-up' : 'reveal-right'} relative ${offre.couleur} rounded-2xl shadow-lg p-8 flex flex-col items-center border border-white/10 hover-scale-card
              transition-all duration-300 cursor-pointer ${idx===0? 'hover-tilt' : idx===1? 'hover-glow' : 'hover-float'} ${idx===0? 'click-rotate-small' : idx===1? 'click-bounce' : 'click-push'}
              ${offre.populaire ? "ring-2 ring-yellow-400" : ""}
            `}
          >
            {offre.populaire && (
              <div className="absolute -top-4 right-4 bg-yellow-400 text-[#101e2b] px-3 py-1 rounded-full font-bold text-xs shadow hover:bg-yellow-300 transition">
                ⭐ Populaire
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-2 text-yellow-300 text-center text-soft-anim">{offre.titre}</h2>
            <div className="text-4xl font-extrabold mb-4 text-yellow-200 text-soft-anim">{offre.prix}</div>
            <div className="mb-2 text-base text-center text-soft-anim">{offre.description}</div>
            <a
              href={`mailto:${email}?subject=Demande%20${encodeURIComponent(offre.titre)}`}
              onClick={(e) => e.stopPropagation()}
              className="mt-6 inline-block px-6 py-2 bg-yellow-400 text-[#101e2b] font-semibold rounded hover:bg-yellow-300 transition"
            >
              Demander cette offre
            </a>
          </div>
        ))}
      </div>

  <div className="mt-14 max-w-3xl mx-auto bg-[#0f1a27] rounded-2xl p-6 md:p-8 border border-white/10 reveal hover-scale-card">
        <h3 className="text-xl font-bold text-yellow-400 mb-3 text-soft-anim">🌐 Option hébergement & maintenance</h3>
        <ul className="list-disc list-inside text-gray-200 text-base mb-1 text-soft-anim">
          <li>5 € / mois (engagement 6 mois minimum)</li>
          <li>1 an = 48 € (soit 20 % de réduction)</li>
        </ul>
      </div>

  <div className="mt-8 text-center reveal hover-scale-card w-fit mx-auto" style={{ padding:'10px 14px', borderRadius:'14px' }}>
        <span className="text-xl text-gray-300 block mb-2 text-soft-anim">Contact pro :</span>
        <a href={`mailto:${email}`} className="text-2xl md:text-3xl font-bold text-yellow-400 underline text-soft-anim hover:bg-yellow-300 transition">
          {email}
        </a>
      </div>
    </section>
  </div>
);

export default Offres;