import React, { useState } from "react";
import {Links, Hellolink} from "../css/NavbarStyles";
import { ContainerLinks, LinksBurger } from "../css/ContainerBurgerStyles";

const ContainerBurger = () => {

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

  return(
    <ContainerLinks>

      <LinksBurger>

          <a href="#welcome-section" id="hola" onClick={handleClick} 
                    style={{color: colorLink.hola, textDecorationLine: 
                    colorLink.textHola}}>Hola</a>
          <a href="#projects" id="proyectos" onClick={handleClick}
                style={{color: colorLink.proyectos, textDecorationLine: 
                colorLink.textProyectos}}>Proyectos</a>
          <a href="#contact" id="contacto" onClick={handleClick}
                style={{color: colorLink.contacto, textDecorationLine: 
                colorLink.textContacto}}>Contacto</a>

      </LinksBurger>

    </ContainerLinks>
  )

}

export default ContainerBurger;