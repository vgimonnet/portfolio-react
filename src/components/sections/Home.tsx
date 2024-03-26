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
      setShowDetail(true);
      if (titleContainer) {
        titleContainer.classList.add('goup')
      }
    }
    
    return () => {};
  }, [index])

  return (
    <section id="home" className="h-full relative">
      <h1 id="title-container" className="text-center text-7xl absolute top-2/4 translate-y-1/4"></h1>
      <Transition.Root className="flex flex-row justify-center mt-60 gap-24 mx-auto" show={showDetail}>
        <FadeIn delay="delay-[0ms]">
          <button onClick={() => setActiveSection('about')} className="bounce px-4 py-2 border border-white rounded w-36">About</button>
        </FadeIn>
        <FadeIn delay="delay-[300ms]">
          <button onClick={() => setActiveSection('projects')}  className="bounce px-4 py-2 border border-white rounded w-36">Projects</button>
        </FadeIn>
        <FadeIn delay="delay-[500ms]">
          <button onClick={() => setActiveSection('contact')} className="bounce px-4 py-2 border border-white rounded w-36">Contact</button>
        </FadeIn>
      </Transition.Root>
    </section>
  )
};

export default Home;