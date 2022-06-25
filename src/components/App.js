import React from 'react';
import Container from './Container/Container';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const App = () => {
  return (
    <>
     <Navbar/>
     <Container>
     <About />
     <Projects />
     <Contact />
     </Container>
     <Footer />
    
    </>
  );
}

export default App;