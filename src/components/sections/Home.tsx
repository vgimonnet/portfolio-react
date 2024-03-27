import { Transition } from '@headlessui/react';
import { useContext, useEffect, useState } from 'react';
import FadeIn from '../animations/FadeIn';
import { activeSectionContext } from '../../context/ActiveSectionContext';

const Home = () => {

  const INTRO = 'Welcome on my portfolio !';
  const [index, setIndex] = useState(0);
  const [age, setAge] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const { setActiveSection } = useContext(activeSectionContext);

  useEffect(() => {
    const today = new Date();
    const birthdateDate = new Date('1998/04/21');

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
      age--;
    }

    setAge(age);
  }, []);

  useEffect(() => {
    const titleContainer = document.getElementById('title-container');
    const timeout = setTimeout(() => {
      if (index < INTRO.length && titleContainer) {
        titleContainer.innerHTML += INTRO[index];
        setIndex(index+1);
      }
    }, 100);

    if (index >= INTRO.length) {
      clearTimeout(timeout);
      // setShowDetail(true);
      const nav = document.getElementById('nav');
      if (nav) {
        nav.classList.add('test');
      }
    }
    
    return () => {};
  }, [index])

  return (
    <section id="home" className="h-full relative flex justify-around items-center flex-col">
      <h1 id="title-container" className="text-center text-7xl"></h1>
      <nav id="nav" className="flex flex-row justify-center gap-24 mx-auto transition opacity-0">
        <button onClick={() => setActiveSection('about')} className="bounce px-4 py-2 border border-white rounded w-36">About</button>
        <button onClick={() => setActiveSection('projects')}  className="bounce px-4 py-2 border border-white rounded w-36">Projects</button>
        <button onClick={() => setActiveSection('contact')} className="bounce px-4 py-2 border border-white rounded w-36">Contact</button>
      </nav>
      {/* <Transition.Root className="flex flex-row justify-center gap-24 mx-auto" show={showDetail}>
        <FadeIn delay="delay-[100ms]">
          <button onClick={() => setActiveSection('about')} className="bounce px-4 py-2 border border-white rounded w-36">About</button>
        </FadeIn>
        <FadeIn delay="delay-[400ms]">
          <button onClick={() => setActiveSection('projects')}  className="bounce px-4 py-2 border border-white rounded w-36">Projects</button>
        </FadeIn>
        <FadeIn delay="delay-[600ms]">
          <button onClick={() => setActiveSection('contact')} className="bounce px-4 py-2 border border-white rounded w-36">Contact</button>
        </FadeIn>
      </Transition.Root> */}
    </section>
  )
};

export default Home;