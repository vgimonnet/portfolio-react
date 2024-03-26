import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react";

type ActiveSectionContext = {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
};

export const activeSectionContext = createContext<ActiveSectionContext>({
  activeSection: 'home',
  setActiveSection: () => {},
});

export const ActiveSectionContextProvider = ({ children }: PropsWithChildren) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const activeSectionContextValue = useMemo(() => ({ activeSection, setActiveSection }), [activeSection]);
  return <activeSectionContext.Provider value={activeSectionContextValue}>{children}</activeSectionContext.Provider>;
};
