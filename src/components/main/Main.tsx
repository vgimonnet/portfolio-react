import { FunctionComponent, useContext } from 'react';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Projects from '../sections/Projects';
import Home from '../sections/Home';
import { Transition } from '@headlessui/react';
import { activeSectionContext } from '../../context/ActiveSectionContext';

const Main: FunctionComponent = () => {

  const { activeSection } = useContext(activeSectionContext);

  return (
    <main className='h-full p-8 md:p-16 lg:p-24 xl:p-32'>
      <Transition
        className="h-full"
        show={activeSection === 'home'}
        enter="transition-all ease-in-out duration-500 delay-[150ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-0"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Home />
      </Transition>
      <Transition
        className="h-full"
        show={activeSection === 'about'}
        enter="transition-all ease-in-out duration-500 delay-[150ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-0"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <About />
      </Transition>
      <Transition
        className="h-full"
        show={activeSection === 'projects'}
        enter="transition-all ease-in-out duration-500 delay-[150ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-0"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Projects />
      </Transition>
      <Transition
        className="h-full"
        show={activeSection === 'contact'}
        enter="transition-all ease-in-out duration-500 delay-[150ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-0"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Contact />
      </Transition>
    </main>
  )
}

export default Main
