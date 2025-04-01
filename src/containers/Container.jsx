import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ContainerBurger from '../components/ContainerBurger';
import { StylesProvider } from '../components/StylesProvider';

export const Container = () => {
  return (

    <StylesProvider>
      <main>

        <ContainerBurger/>

        <Navbar/>
        
        <Welcome/>

        <Projects/>

        <Contact/>

        <Footer/>

      </main>
    </StylesProvider>
    
  )
}
