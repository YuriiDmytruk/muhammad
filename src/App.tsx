import React from 'react';

import Container from './components/Container';
import NavBar from './pages/NavBar';
import Header from './pages/Header';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';

function App() {
  return (
    <>
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
      <div className='mb-96' />
    </>
  );
}

export default App;
