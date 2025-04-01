import React, { useContext } from "react";
import {Navstyle, Logolink, Imglogo, Links, Hellolink} from "../css/NavbarStyles";
import {Cvbutton, Cvbuttonr, Hamburgercolor} from "../css/NavbarStyles";
import {Hamburgerb} from "../css/NavbarStyles";
import StylesContext from "./StylesProvider";


const Navbar = () => {

  const {colorLink, handleChangeStyles, handleOpenBurger} = useContext(StylesContext);  

  return (

    <Navstyle>

      <Logolink>

        <Hamburgerb className="hamburger hamburger--collapse" type="button" onClick={() => handleOpenBurger(true)}>
          <span className="hamburger-box">
            <Hamburgercolor className="hamburger-inner"></Hamburgercolor>
          </span>
        </Hamburgerb>

        <a href="#welcome-section">
          <Imglogo src="https://res.cloudinary.com/da6fz1omm/image/upload/v1635992909/Im%C3%A1genes%20Portafolio%20Digital/Mi-logo_qtavsu.png"
            title="Santiago Montoya Cano" alt="Santiago Montoya Cano"/>
        </a>

        <Hellolink href="#welcome-section" id="hola" onClick={handleChangeStyles} 
                   style={{color: colorLink.hola, textDecorationLine: 
                   colorLink.textHola}}>Hola</Hellolink>
        <Links href="#projects" id="proyectos" onClick={handleChangeStyles}
               style={{color: colorLink.proyectos, textDecorationLine: 
               colorLink.textProyectos}}>Proyectos</Links>
        <Links href="#contact" id="contacto" onClick={handleChangeStyles}
               style={{color: colorLink.contacto, textDecorationLine: 
               colorLink.textContacto}}>Contacto</Links>

      </Logolink>

      <section>

        <a href="https://drive.google.com/uc?export=download&id=1ItjK8JXfDOp6BpaJq8RJSwtrewLgWdZ7">
          <Cvbutton>Descargar Curriculum</Cvbutton>
        </a>

        <a href="https://drive.google.com/uc?export=download&id=1ItjK8JXfDOp6BpaJq8RJSwtrewLgWdZ7">
          <Cvbuttonr>Curriculum</Cvbuttonr>
        </a>

      </section>

    </Navstyle>
  )

}

export default Navbar;

