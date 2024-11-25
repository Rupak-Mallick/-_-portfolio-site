import { About } from './components/About';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Work } from './components/Work';
import './App.css'
import { Contact } from './components/Contact';



function App() {
 

  return (
    <div className='bg-black'>
      <Header/>
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
