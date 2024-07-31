
import { useRef } from 'react';
import './asset/App.css';
import Certificate from './component/Certificate/Certificate';
import Contact from './component/Contact/Contact';
import About from './component/about/About';
import Education from './component/education/Education';
import Hero from './component/hero/Hero';
import Navbar from './component/navbar/Navbar';
import Works from './component/works/Works';

function App() {

  const introRef = useRef(null)
  const aboutRef = useRef(null)
  const worksRef = useRef(null)
  const contactsRef = useRef(null)

  const introClick = () => {
        introRef.current?.scrollIntoView({behavior:'smooth'})
  }
  const aboutClick = () => {
        aboutRef.current?.scrollIntoView({behavior:'smooth'})
  }
  const worksClick = () => {
        worksRef.current?.scrollIntoView({behavior:'smooth'})
  }
  const contactsClick = () => {
        contactsRef.current?.scrollIntoView({behavior:'smooth'})
  }

  return (
      <div class="area">
          <ul class="circles">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
          </ul>
          <ul class="circles2">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
          </ul>
          <Navbar
              moveIntro = {() => {introClick()}}
              moveAbout = {() => {aboutClick()}}
              moveWorks = {() => {worksClick()}}
              moveContacts = {() => {contactsClick()}}
                
         />
         <div ref={introRef}>
           <Hero/>
         </div>
          <div ref={aboutRef}>
            <About/>
          </div>
          <Education/>
          <Certificate/>
          <div ref={worksRef}>
            <Works/>
          </div>
          <div ref={contactsRef}>
            <Contact/>
          </div>
     </div >
      
  );
}

export default App;
