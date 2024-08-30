import React, { useEffect } from 'react';

import Container from './components/Container';
import NavBar from './pages/NavBar';
import Header from './pages/Header';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Footer from './pages/Footer'

function App() {

  useEffect(() => {
    const setLightTheme = () => {
      localStorage.theme = 'dark';
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    }

    const setDarkTheme = () => {
      localStorage.theme = 'dark';
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    }

    setDarkTheme()
    
  },[])

  return (
    <div>
      <div className='grid gap-24 bg-white dark:bg-black
      text-black dark:text-white'>
        <Container>
          <NavBar />
        </Container>
        <Container>
          <Header />
        </Container>
        <Container>
          <AboutMe />
        </Container>
        <Container>
          <Services />
        </Container>
        <Container>
          <Projects />
        </Container>
        <Container>
          <Testimonials />
        </Container>
        <Container>
          <Contact />
        </Container>
        <div className='bg-light-gray dark:bg-black'>
          <Container>
            <Footer />
          </Container>
        </div>

      </div>
      <div className='bg-dark-gray dark:bg-black-gray py-3 text-center text-white font-poppins font-light'>
        © 2023 <span className='text-orange font-semibold'>Muhammad</span> All Rights Reserved , Inc.
      </div>
    </div>
  );
}

export default App;
