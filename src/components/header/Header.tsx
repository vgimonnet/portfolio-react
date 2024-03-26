import { FunctionComponent, useContext } from "react";
import { activeSectionContext } from "../../context/ActiveSectionContext";

type HeaderItem = {
  label: string;
  anchor: string;
}

// interface HeaderProps {
//   activeSection: string;
//   setActiveSection: (section: string) => void;
// }

// const Header: FunctionComponent<HeaderProps> = ({ activeSection, setActiveSection }: HeaderProps) => {
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
    </>
  )
}

export default Header;
