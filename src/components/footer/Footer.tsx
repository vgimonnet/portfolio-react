import { useContext } from "react";
import { activeSectionContext } from "../../context/ActiveSectionContext";
import { Transition } from "@headlessui/react";

const Footer = () => {

  const { activeSection } = useContext(activeSectionContext);

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
        <footer className="absolute bottom-0 left-0 right-0 m-auto">
          <div className="flex flex-row no-wrap border rounded  border-neutral-400 w-fit mx-auto my-8 px-4 py-2">
            <p>@ Valentin Gimonnet - { (new Date()).getFullYear() }</p>
          </div>
        </footer>
      </Transition>
    </>
  )
}

export default Footer;
