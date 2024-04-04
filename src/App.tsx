import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'
import ProjectModal from './components/project/ProjectModal';
import { ActiveSectionContextProvider } from './context/ActiveSectionContext';
import { ProjectModalContextProvider } from './context/ProjectModalContext';

function App() {


  return (
    <>
      <ProjectModalContextProvider>
        <div className="fixed top-0 h-0.5 w-screen border-t z-50"></div>
        <div className="fixed right-0 h-screen w-0.5 border-r z-50"></div>
        <div className="fixed bottom-0 h-0.5 w-screen border-b z-50"></div>
        <div className="fixed left-0 h-screen w-0.5 border-l z-50"></div>
        <ActiveSectionContextProvider>
          <Header />
          <Main />
          <Footer />
        </ActiveSectionContextProvider>
        <ProjectModal />
      </ProjectModalContextProvider>
    </>
  )
}

export default App
