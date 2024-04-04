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
        <div className="fixed h-screen w-screen border"></div>
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
