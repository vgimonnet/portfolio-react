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
      label: 'Accueil',
      anchor: 'home',
      svg: `
        <svg class="w-6 h-6 lg:w-10 lg:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
        </svg>
      `,
    },
    {
      label: 'A propos',
      anchor: 'about',
      svg: `
        <svg class="w-6 h-6 lg:w-10 lg:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
      `,
    },
    {
      label: 'Compétences',
      anchor: 'aptitudes',
      svg: `
        <svg class="w-6 h-6 lg:w-10 lg:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m5 4-2 2 2 2m4-4 2 2-2 2m5-12v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
        </svg>
      `,
    },
    {
      label: 'Projets',
      anchor: 'projects',
      svg: `
        <svg class="w-6 h-6 lg:w-10 lg:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.5 14.5V16.5C4.5 17.0523 4.94772 17.5 5.5 17.5H12.5M4.5 14.5V6.5C4.5 5.94772 4.94772 5.5 5.5 5.5H19.5C20.0523 5.5 20.5 5.94772 20.5 6.5V14.5M4.5 14.5H20.5M20.5 14.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H12.5M12.5 17.5V20.5M12.5 20.5H8M12.5 20.5H17" stroke="currentColor" stroke-width="1.625"></path> </g>
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
        show={activeSection !== 'home'}
        enter="transition-all ease-in-out duration-500 delay-[200ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <header className="fixed top-0 left-0 right-0 m-auto py-1 w-fit z-10">
          <nav className=" bg-gray-800 z-10">
            <ul className="flex flex-row justify-center items-center no-wrap border rounded border-neutral-400 w-fit mx-auto my-8">
              { items.map((item: HeaderItem) => {
                return (
                  <li 
                    onClick={() => setActiveSection(item.anchor)} 
                    key={item.anchor}
                    className={ (activeSection === item.anchor ? 'text-blue-500 font-weight ' : 'text-white') +  " hover:cursor-pointer hover:text-blue-500 w-16 sm:w-20 md:w-24 lg:w-32 font-medium no-underline transition-all duration-500 md:px-4 py-2 rounded flex justify-center items-center md:flex-col gap-1"}>
                      <span dangerouslySetInnerHTML={{ __html: item.svg }}></span>
                      <span className="hidden lg:block">{ item.label }</span>
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
