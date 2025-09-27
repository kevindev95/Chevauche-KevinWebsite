import React from 'react'

const ProjectsExemple = () => {
  const email = "kevin-chevauche@chevauche-kevin.com";
  return (
    // Section centrée avec ancre pour le scroll/observer
    <section id="ProjectsExemple" className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
      {/* Titre + intro centrés comme la maquette */}
      <header className="text-center reveal reveal-up">
  <h2 className="text-5xl md:text-6xl font-extrabold text-soft-anim hover-text-scale">Projets:</h2>
        <div className="w-20 h-[3px] bg-yellow-400 mx-auto mt-3 rounded" />
      </header>
  <p className="mt-8 text-lg md:text-xl text-gray-300 leading-8 text-center reveal reveal-up text-soft-anim hover-text-scale">
        Depuis 2022, le développement web est devenu l'une de mes passions, en particulier dans le domaine front end/full stack, où je fais principalement du travail d'intégration et code des sites web à partir de zéro, parfois même en les concevant (comme celui sur lequel vous êtes actuellement).
      </p>
  <p className="mt-6 text-xl md:text-2xl font-semibold text-yellow-400 text-center reveal reveal-up reveal-delay-1 text-soft-anim hover-text-scale">
        Vous trouverez ci-dessous quelques-uns de mes projets !
      </p>
      <div className="w-16 h-[3px] bg-yellow-400 mx-auto mt-3 rounded reveal reveal-scale-x reveal-delay-2" />

      {/* Bloc MNTN en 2 colonnes (média gauche, texte droite) */}
      <div className='mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Média à gauche */}
        <div className='reveal reveal-left'>
          <div className='rounded-2xl overflow-hidden shadow-deep bg-[#0f1a27] border border-white/10'>
            <video src="/MNTN.mp4" autoPlay muted loop playsInline className='block w-full h-auto hover-float click-push'></video>
          </div>
        </div>
        {/* Texte à droite */}
        <div className='reveal reveal-right'>
          <h3 className='text-4xl md:text-5xl font-extrabold text-soft-anim hover-text-scale'>MNTN</h3>
          <div className='w-16 h-[3px] bg-yellow-400 mt-3 rounded' />
          <p className='mt-6 text-gray-200 text-lg leading-8 text-soft-anim hover-text-scale'>
            Le site internet ci-dessus provient d’un projet Figma que j’ai modifié et par la suite, programmé en moins d’une journée avec le framework React.
          </p>
          {/* Étiquettes et boutons pour coller à la maquette (style uniquement) */}
          <div className='mt-6 flex flex-wrap gap-3'>
            <span className='px-3 py-1 rounded-full border border-yellow-400/70 text-yellow-300 text-sm'>React</span>
            <span className='px-3 py-1 rounded-full border border-yellow-400/70 text-yellow-300 text-sm'>CSS3</span>
            <span className='px-3 py-1 rounded-full border border-yellow-400/70 text-yellow-300 text-sm'>Responsive Design</span>
          </div>
          <div className='mt-6 flex gap-4'>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent('Contact à propos du projet MNTN')}`}
              className='px-5 md:px-6 py-3 bg-yellow-400 text-[#101e2b] font-semibold rounded-lg hover:bg-yellow-300 transition hover-glow click-bounce'
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>

      {/* Séparateur visuel conservé */}
      <img src="/Line1.png" alt="" className='w-100 h-auto mt-12 mx-auto'/>

      {/* Bloc 95SMP en 2 colonnes */}
      <div className='mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Médias à gauche (grille d'images) */}
        <div className='reveal reveal-left'>
          <div className='rounded-2xl overflow-hidden shadow-deep bg-[#0f1a27] border border-white/10 p-3'>
            <div className='grid grid-cols-2 gap-3'>
              <img src="/SmpPage1.jpg" alt="" className='col-span-2 w-full rounded-lg hover-float click-rotate-small object-cover' style={{minHeight:'220px'}}/>
              <img src="/SmpPage2.jpg" alt="" className='w-full rounded-lg hover-float click-rotate-small object-cover' style={{minHeight:'160px'}}/>
              <img src="/SmpPage5.jpg" alt="" className='w-full rounded-lg hover-float click-rotate-small object-cover' style={{minHeight:'160px'}}/>
            </div>
          </div>
        </div>
        {/* Texte à droite */}
        <div className='reveal reveal-right'>
          <h3 className='text-4xl md:text-5xl font-extrabold text-soft-anim'>95SMP</h3>
          <div className='w-16 h-[3px] bg-yellow-400 mt-3 rounded' />
          <p className='mt-6 text-gray-200 text-lg leading-8 text-soft-anim'>
            Serveur sur le jeu vidéo culturel “Minecraft” dont j’ai pu faire le design et la programmation avec html, css, javascript. Ce site fut une réussite car celui ci fut particulièrement apprécié des joueurs grâce à ses visuels, animations et ses liens de redirection vers le serveur de jeu ou encore discord.
          </p>
          <div className='mt-6 flex flex-wrap gap-3'>
            <span className='px-3 py-1 rounded-full border border-yellow-400/70 text-yellow-300 text-sm'>HTML</span>
            <span className='px-3 py-1 rounded-full border border-yellow-400/70 text-yellow-300 text-sm'>CSS3</span>
            <span className='px-3 py-1 rounded-full border border-yellow-400/70 text-yellow-300 text-sm'>JavaScript</span>
          </div>
          <div className='mt-6 flex gap-4'>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent('Contact à propos du projet 95SMP')}`}
              className='px-5 md:px-6 py-3 bg-yellow-400 text-[#101e2b] font-semibold rounded-lg hover:bg-yellow-300 transition hover-glow click-bounce'
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
      <img src="/Line1.png" alt="" className='w-100 h-auto mt-10 mx-auto'/>
      <div>
  <p className='font-semibold text-4xl reveal reveal-up text-soft-anim hover-text-scale'>Il y a également d’autres plus petit projets que j’ai effectué qui m’ont permis de gagner en expérience.</p>
      </div>
    </section>
  )
}

export default ProjectsExemple