import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'
import { ActiveSectionContextProvider } from './context/ActiveSectionContext';

function App() {


  return (
    <>
      <ActiveSectionContextProvider>
        <Header />
        <Main />
        <Footer />
      </ActiveSectionContextProvider>
    </>
  )
}

export default App
