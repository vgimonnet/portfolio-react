type LANGUAGE = {
  flag: string;
  lang: string;
}

const LANGUAGES: LANGUAGE[] = [
  {
    flag: `
      <svg class="w-8 h-8 rounded" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 356.18">
      <path fill="#E1000F" d="M345.04 0h139C499.44.1 512 12.72 512 28.13v299.91c0 15.47-12.65 28.13-28.13 28.14H345.04V0zM15.11 352.95zm-9.54-8.15z"/><path fill="#fff" d="M27.96 0h317.08v356.18H27.98C12.57 356.09 0 343.46 0 328.04V28.14C0 12.72 12.56.1 27.96 0z"/><path fill="#273375" d="M27.96 0h138.99v356.18H28c-15.42-.08-28-12.71-28-28.14V28.14C0 12.72 12.56.1 27.96 0z"/>
      </svg>
    `,
    lang: 'Français',
  },
  {
    flag: `
      <svg class="w-8 h-8 rounded" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.2 38.4" style="enable-background:new 0 0 55.2 38.4" xml:space="preserve">
        <style type="text/css">.st0{fill:#FEFEFE;} .st1{fill:#C8102E;} .st2{fill:#012169;}</style><g><path class="st0" d="M2.87,38.4h49.46c1.59-0.09,2.87-1.42,2.87-3.03V3.03c0-1.66-1.35-3.02-3.01-3.03H3.01 C1.35,0.01,0,1.37,0,3.03v32.33C0,36.98,1.28,38.31,2.87,38.4L2.87,38.4z"/><polygon class="st1" points="23.74,23.03 23.74,38.4 31.42,38.4 31.42,23.03 55.2,23.03 55.2,15.35 31.42,15.35 31.42,0 23.74,0 23.74,15.35 0,15.35 0,23.03 23.74,23.03"/><path class="st2" d="M33.98,12.43V0h18.23c1.26,0.02,2.34,0.81,2.78,1.92L33.98,12.43L33.98,12.43z"/><path class="st2" d="M33.98,25.97V38.4h18.35c1.21-0.07,2.23-0.85,2.66-1.92L33.98,25.97L33.98,25.97z"/><path class="st2" d="M21.18,25.97V38.4H2.87c-1.21-0.07-2.24-0.85-2.66-1.94L21.18,25.97L21.18,25.97z"/><path class="st2" d="M21.18,12.43V0H2.99C1.73,0.02,0.64,0.82,0.21,1.94L21.18,12.43L21.18,12.43z"/><polygon class="st2" points="0,12.8 7.65,12.8 0,8.97 0,12.8"/><polygon class="st2" points="55.2,12.8 47.51,12.8 55.2,8.95 55.2,12.8"/><polygon class="st2" points="55.2,25.6 47.51,25.6 55.2,29.45 55.2,25.6"/><polygon class="st2" points="0,25.6 7.65,25.6 0,29.43 0,25.6"/><polygon class="st1" points="55.2,3.25 36.15,12.8 40.41,12.8 55.2,5.4 55.2,3.25"/><polygon class="st1" points="19.01,25.6 14.75,25.6 0,32.98 0,35.13 19.05,25.6 19.01,25.6"/><polygon class="st1" points="10.52,12.81 14.78,12.81 0,5.41 0,7.55 10.52,12.81"/><polygon class="st1" points="44.63,25.59 40.37,25.59 55.2,33.02 55.2,30.88 44.63,25.59"/></g>
      </svg>
    `,
    lang: 'Anglais'
  }
]

const About = () => {

  const age = () => {
    const today = new Date();
    const birthdateDate = new Date('1998/04/21' );

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <section id="about" className="h-fit relative flex items-center flex-col my-20 pb-16">
      <h1 
        className="
          text-4xl lg:text-6xl font-bold relative pb-3
          before:content[''] before:absolute before:w-1/2 before:h-1 before:bottom-0 before:left-1/4 before:border before:border-white before:bg-white before:rounded"
      >A propos</h1>

      <p className="mt-16">
        Développeur web passionné avec une expertise approfondie dans la conception, le développement et la maintenance de sites web interactifs.
        <br />
        Je suis déterminé à créer des expériences utilisateurs de qualité grâce à une programmation centré sur l'éco-conception et l'accessibilité.
      </p>

      <div className="w-full flex flex-col gap-8 mt-8 justify-center md:flex-row z-back">

        <div className="border rounded-xl bg-gray-800 text-white px-4 py-6 flex flex-col items-center w-full gap-4 xl:w-about">
          <p className="text-lg font-bold underline mb-4">Qui suis-je ?</p>
          <p>Valentin GIMONNET</p>
          <p>{age()} ans</p>
          <ul className="flex flex-row justify-center items-center gap-4">
            { LANGUAGES.map((language: LANGUAGE) => {
              return (
                <li className="flex flex-col justify-center items-center gap-2">
                  <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: language.flag}}></span>
                  <p>{language.lang}</p>
                </li>
              )
            })}
          </ul>
        </div>
        
        <div className="border rounded-xl bg-gray-800 text-white px-4 py-6 flex flex-col items-center w-full gap-4 xl:w-about">
          <p className="text-lg font-bold underline mb-4">Formations</p>
          <ul className="flex flex-col justify-center items-center gap-4">
            <li>
              <p className="text-center"><b>Master Développement Web</b></p>
              <p className="text-center">2020-2022 - ECV Digital (Paris)</p>
            </li>
            <li>
              <p className="text-center"><b>LP Web et Mobile</b></p>
              <p className="text-center">2019-2020 - IUT (Orléans)</p>
            </li>
            <li>
              <p className="text-center"><b>BTS SNIR</b></p>
              <p className="text-center">2017-2019 - Lycée Henir Brisson (Vierzon)</p>
            </li>
          </ul>
        </div>

        <div className="border rounded-xl bg-gray-800 text-white px-4 py-6 flex flex-col items-center w-full gap-4 xl:w-about">
          <p className="text-lg font-bold underline mb-4">Certifications</p>
          <ul className="flex flex-col justify-center items-center gap-4">
            <li className="flex flex-col justify-center items-center">
              <p className="text-center"><b>GREEN.IT</b></p>
              <p className="text-center">2022 - Eco-conception</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <p className="text-center"><b>OPQUAST IV</b></p>
              <p className="text-center">2022 - Qualité web et accessibilité</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <p className="text-center"><b>VOLTAIRE III</b></p>
              <p className="text-center">2022 - Langue française</p>
            </li>
          </ul>
        </div>

      </div>

    </section>
  )
};

export default About;