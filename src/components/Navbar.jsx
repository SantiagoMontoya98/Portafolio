import React from "react";
import {Navstyle, Logolink, Imglogo, Links, Hellolink} from "../css/NavbarStyles";
import {Cvbutton, Cvbuttonr, Hamburgercolor} from "../css/NavbarStyles";
import {Hamburgerb} from "../css/NavbarStyles";


const Navbar = () => {

  /* return <h1>Hola Mundo React</h1> */

  return (

    <Navstyle>      

      <Logolink>

        <Hamburgerb className="hamburger hamburger--collapse" type="button">
          <span className="hamburger-box">
            <Hamburgercolor className="hamburger-inner"></Hamburgercolor>
          </span>
        </Hamburgerb>

        <a href="#welcome-section">
          <Imglogo src="https://res.cloudinary.com/da6fz1omm/image/upload/v1635992909/Im%C3%A1genes%20Portafolio%20Digital/Mi-logo_qtavsu.png"
            title="Santiago Montoya Cano" alt="Santiago Montoya Cano"/>
        </a>

        <Hellolink href="#welcome-section" id="hola">Hola</Hellolink>
        <Links href="#projects" id="proyectos">Proyectos</Links>
        <Links href="#contact" id="contacto">Contacto</Links>

      </Logolink>

      <section>

        <a href="https://drive.google.com/uc?export=download&id=1nr2yYAmQ9PZ8jlTXg1Tt9fg38bGViG7H">
          <Cvbutton>Descargar Currículum</Cvbutton>
        </a>

        <a href="https://drive.google.com/uc?export=download&id=1nr2yYAmQ9PZ8jlTXg1Tt9fg38bGViG7H">
          <Cvbuttonr>Currículum</Cvbuttonr>
        </a>

      </section>

    </Navstyle>
  )

}

export default Navbar;

