import { useContext, useEffect, useState } from 'react';
import { activeSectionContext } from '../../context/ActiveSectionContext';

const Home = () => {

  const INTRO = 'Welcome on my portfolio !';
  const [index, setIndex] = useState(0);

  const { setActiveSection } = useContext(activeSectionContext);

  const [titleAnimation, setTitleAnimation] = useState(false);


  useEffect(() => {
    if (titleAnimation) {
      const titleContainer = document.getElementById('title-container');
      const timeout = setTimeout(() => {
      if (index < INTRO.length && titleContainer) {
        if (index === 0) {
          const tmp = document.getElementById('tmp');
          if (tmp) titleContainer.removeChild(tmp);
        }
        titleContainer.innerHTML += INTRO[index];
        setIndex(index+1);
        }
      }, 75);
      
      if (index >= INTRO.length) {
        setTitleAnimation(false);
        clearTimeout(timeout);
        const nav = document.getElementById('nav');
        if (nav) {
          nav.classList.add('fadeIn');
        }
      }
    }
    
    return () => {};
  }, [index, titleAnimation])


  useEffect(() => {
    setTimeout(() => {
      const logo = document.getElementById('logo');
      if (logo) {
        logo.className += ' h-36 sm:h-36 md:h-48 lg:h-64 xl:h-96'
      }
      setTimeout(() => {
        setTitleAnimation(true);
      }, 250);
    }, 250);
  }, []);

  return (
    <section id="home" className="h-5/6 md:h-full relative flex justify-center items-center flex-col gap-16 md:gap-16 lg:gap-24">
      <h1 
        id="title-container" 
        className="
          text-center text-4xl h-20
          md:text-4xl
          lg:text-5xl
          xl:text-7xl
        "
      >
        <span id="tmp" className="invisible">Welcome on my portfolio !</span>
      </h1>

      <img src="vg.svg" alt="VG Tag logo" id="logo" className="h-16 transition-all duration-1000" />

      <nav id="nav" className="flex flex-col md:flex-row justify-center gap-8 md:gap-24 mx-auto transition invisible">
        <button onClick={() => setActiveSection('about')} className="bounce px-4 py-2 border border-white rounded w-36">About</button>
        <button onClick={() => setActiveSection('projects')}  className="bounce px-4 py-2 border border-white rounded w-36">Projects</button>
        <button onClick={() => setActiveSection('contact')} className="bounce px-4 py-2 border border-white rounded w-36">Contact</button>
      </nav>
    </section>
  )
};

export default Home;