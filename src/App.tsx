import { useContext } from 'react';
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'
import { ActiveSectionContextProvider, activeSectionContext } from './context/ActiveSectionContext';

function App() {

  const { activeSection }= useContext(activeSectionContext);

  return (
    <>
      <ActiveSectionContextProvider>
        { activeSection !== 'home' && <Header /> }
        <Main />
        { activeSection !== 'home' && <Footer /> }
      </ActiveSectionContextProvider>
    </>
  )
}

export default App
