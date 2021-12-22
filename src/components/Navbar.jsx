import React, { useState } from "react";
import {Navstyle, Logolink, Imglogo, Links, Hellolink} from "../css/NavbarStyles";
import {Cvbutton, Cvbuttonr, Hamburgercolor} from "../css/NavbarStyles";
import {Hamburgerb} from "../css/NavbarStyles";


const Navbar = () => {

  const [colorLink, setColorLink] = useState({

    hola: "var(--color-verde)",
    textHola: "underline",
    proyectos: "",
    textProyectos: "",
    contacto: "",
    textContacto: ""

  });

  const handleClick = ({target}) => {

    if(target.matches("#hola")){

      console.log(target);

      setColorLink({

        hola: "var(--color-verde)",
        textHola: "underline",
        proyectos: "",
        textProyectos: "",
        contacto: "",
        textContacto: ""

      })

    }

    if(target.matches("#proyectos")){

      console.log(target);

      setColorLink({

        hola: "",
        textHola: "",
        proyectos: "var(--color-verde)",
        textProyectos: "underline",
        contacto: "",
        textContacto: ""

      })

    }

    if(target.matches("#contacto")){

      console.log(target);

      setColorLink({

        hola: "",
        textHola: "",
        proyectos: "",
        textProyectos: "",
        contacto: "var(--color-verde)",
        textContacto: "underline"

      })

    }

  }


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

        <Hellolink href="#welcome-section" id="hola" onClick={handleClick} 
                   style={{color: colorLink.hola, textDecorationLine: 
                   colorLink.textHola}}>Hola</Hellolink>
        <Links href="#projects" id="proyectos" onClick={handleClick}
               style={{color: colorLink.proyectos, textDecorationLine: 
               colorLink.textProyectos}}>Proyectos</Links>
        <Links href="#contact" id="contacto" onClick={handleClick}
               style={{color: colorLink.contacto, textDecorationLine: 
               colorLink.textContacto}}>Contacto</Links>

      </Logolink>

      <section>

        <a href="https://drive.google.com/uc?export=download&id=10UHqhlB4tPA7zxU03oTEQEp7X5nj5vQj">
          <Cvbutton>Descargar Curriculum</Cvbutton>
        </a>

        <a href="https://drive.google.com/uc?export=download&id=10UHqhlB4tPA7zxU03oTEQEp7X5nj5vQj">
          <Cvbuttonr>Curriculum</Cvbuttonr>
        </a>

      </section>

    </Navstyle>
  )

}

export default Navbar;

