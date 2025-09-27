import React from 'react';

const About = () => {
  return (
    <div className="bg-[#101e2b] text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <header className="text-center mb-12 md:mb-16 reveal reveal-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-soft-anim">À propos de moi</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded reveal reveal-scale-x reveal-delay-1" />
        </header>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="reveal reveal-zoom">
            <div className="relative rounded-xl overflow-hidden shadow-deep hover-float click-rotate-small">
              <img src="/Kevin.png" alt="Kevin" className="w-full h-auto object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-[#101e2b] rounded-full w-20 h-20 grid place-items-center ring-gold">
                <span className="text-3xl">☕</span>
              </div>
            </div>
          </div>
          <div className="space-y-6 reveal reveal-right reveal-delay-2">
            <ul className="space-y-3 text-gray-300 reveal reveal-left reveal-delay-3 text-soft-anim">
              <li className="flex items-center gap-3 hover-tilt click-push"><span className="text-yellow-400">📅</span> Développeur depuis 2022</li>
              <li className="flex items-center gap-3 hover-tilt click-push"><span className="text-yellow-400">📍</span> Basé en France</li>
              <li className="flex items-center gap-3 hover-tilt click-push"><span className="text-yellow-400">💡</span> Passionné par l'innovation</li>
            </ul>
            <p className="text-gray-200 leading-7 reveal reveal-blur hover-glow click-bounce text-soft-anim">
              Développeur web passionné, je me spécialise dans la création d'expériences
              numériques modernes et performantes. Mon expertise couvre le développement
              front-end avec React, ainsi que le développement full‑stack avec Django et
              diverses bases de données.
            </p>
            <p className="text-gray-200 leading-7 reveal reveal-up reveal-delay-1 hover-tilt click-push text-soft-anim">
              J'aime relever de nouveaux défis et transformer des idées créatives en
              solutions techniques élégantes, alliant esthétique moderne et
              fonctionnalité optimale.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[{
            title: 'Développement Full‑Stack',
            text: "Création d'applications web complètes avec React, Django et bases de données modernes",
            icon: '⚡'
          }, {
            title: 'Design & UX/UI',
            text: "Interfaces intuitives et esthétiques pour une expérience optimale",
            icon: '🎨'
          }, {
            title: 'Performance & SEO',
            text: "Optimisation des performances et du référencement pour des sites rapides et efficaces",
            icon: '🚀'
          }].map((c, i) => (
            <div
              key={c.title}
              className={`reveal ${i===0? 'reveal-left' : i===1? 'reveal-up' : 'reveal-right'} bg-[#0f1a27] border border-white/10 rounded-xl p-6 transition ${i===0? 'hover-glow click-bounce' : i===1? 'hover-tilt click-rotate' : 'hover-float click-push'}`}
            > 
              <div className="text-yellow-400 text-3xl mb-3">{c.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-soft-anim">{c.title}</h3>
              <p className="text-gray-300 text-soft-anim">{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
