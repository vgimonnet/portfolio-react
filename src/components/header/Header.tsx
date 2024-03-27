import { FunctionComponent, useContext } from "react";
import { activeSectionContext } from "../../context/ActiveSectionContext";
import { Transition } from "@headlessui/react";

type HeaderItem = {
  label: string;
  anchor: string;
}

const Header: FunctionComponent = () => {

  const items: HeaderItem[] = [
    {
      label: 'Home',
      anchor: 'home'
    },
    {
      label: 'About',
      anchor: 'about'
    },
    {
      label: 'Projects',
      anchor: 'projects'
    },
    {
      label: 'Contact',
      anchor: 'contact'
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
        <header className="absolute top-0 bottom-0 left-0 right-0 m-auto">
          <nav>
            <ul className="flex flex-row no-wrap border rounded  border-neutral-400 w-fit mx-auto my-8">
              { items.map((item: HeaderItem) => {
                return (
                  <li 
                    onClick={() => setActiveSection(item.anchor)} 
                    key={item.anchor}
                    className={ (activeSection === item.anchor ? 'text-blue-500 font-weight ' : '') +  "cursor-pointer w-24 font-medium no-underline transition duration-500 hover:underline px-4 py-2 rounded"}>
                    { item.label }
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
