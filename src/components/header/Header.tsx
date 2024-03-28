import { FunctionComponent, useContext } from "react";
import { activeSectionContext } from "../../context/ActiveSectionContext";
import { Transition } from "@headlessui/react";

type HeaderItem = {
  label: string;
  anchor: string;
  svg: string;
}

const Header: FunctionComponent = () => {

  const items: HeaderItem[] = [
    {
      label: 'Home',
      anchor: 'home',
      svg: `
        <svg class="w-6 h-6 lg:w-10 lg:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
        </svg>
      `,
    },
    {
      label: 'About',
      anchor: 'about',
      svg: `
        <svg class="w-6 h-6 lg:w-10 lg:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
      `,
    },
    {
      label: 'Projects',
      anchor: 'projects',
      svg: `
        <svg class="w-6 h-6 lg:w-10 lg:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m5 4-2 2 2 2m4-4 2 2-2 2m5-12v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
        </svg>
      `,
    },
    {
      label: 'Contact',
      anchor: 'contact',
      svg: `
        <svg class="w-6 h-6 lg:w-10 lg:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
        </svg>
      `,
    }
  ];

  const { activeSection, setActiveSection } = useContext(activeSectionContext);

  return (
    <>
      <Transition
        className="z-10"
        show={activeSection !== 'home'}
        enter="transition-all ease-in-out duration-500 delay-[200ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <header className="absolute top-0 bottom-0 left-0 right-0 m-auto">
          <nav>
            <ul className="flex flex-row justify-center items-center no-wrap border rounded border-neutral-400 w-fit mx-auto my-8">
              { items.map((item: HeaderItem) => {
                return (
                  <li 
                    onClick={() => setActiveSection(item.anchor)} 
                    key={item.anchor}
                    className={ (activeSection === item.anchor ? 'text-blue-500 font-weight ' : 'text-white') +  " hover:cursor-pointer hover:text-blue-500 w-16 sm:w-20 md:w-24 lg:w-32 font-medium no-underline transition-all duration-500 md:px-4 py-2 rounded flex justify-center items-center md:flex-col gap-1"}>
                      <span dangerouslySetInnerHTML={{ __html: item.svg }}></span>
                      <span className="hidden md:block">{ item.label }</span>
                  </li>
                )
              }) }
            </ul>
          </nav>
        </header>
      </Transition>
    </>
  )
}

export default Header;
