import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react";
import { Project } from "../types/project.type";

type ProjectModalContext = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  project: Project|undefined;
  setProject: Dispatch<SetStateAction<Project|undefined>>;
};

export const projectModalContext = createContext<ProjectModalContext>({
  isOpen: false,
  setIsOpen: () => {},
  project: undefined,
  setProject: () => {},
});

export const ProjectModalContextProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [project, setProject] = useState<Project|undefined>(undefined);

  const projectModalContextValue = useMemo(() => ({ isOpen, setIsOpen, project, setProject }), [isOpen, project]);
  return <projectModalContext.Provider value={projectModalContextValue}>{children}</projectModalContext.Provider>;
};
