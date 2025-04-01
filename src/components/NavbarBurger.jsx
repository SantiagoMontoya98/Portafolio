import React, {useContext} from "react";
import { ContainerLinks, LinksBurger, LinkBurger, CloseBurger } from "../css/ContainerBurgerStyles";
import StylesContext from "./StylesProvider";

const NavbarBurger = () => {

  const {colorLink, handleChangeStylesBurger, openBurger, handleOpenBurger} = useContext(StylesContext);  

  return(
    <ContainerLinks className={openBurger ? 'open-burger' : "close-burger"}>

      <CloseBurger onClick={() => handleOpenBurger(false)}>
        <button className="hamburger hamburger--collapse is-active" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </CloseBurger>

      <LinksBurger>

          <LinkBurger href="#welcome-section" id="hola" onClick={handleChangeStylesBurger}                   
                    style={{color: colorLink.hola, textDecorationLine: 
                    colorLink.textHola}}>Hola</LinkBurger>
          <LinkBurger href="#projects" id="proyectos" onClick={handleChangeStylesBurger}               
                style={{color: colorLink.proyectos, textDecorationLine: 
                colorLink.textProyectos}}>Proyectos</LinkBurger>
          <LinkBurger href="#contact" id="contacto" onClick={handleChangeStylesBurger}                
                style={{color: colorLink.contacto, textDecorationLine: 
                colorLink.textContacto}}>Contacto</LinkBurger>

      </LinksBurger>

    </ContainerLinks>
  )

}

export default NavbarBurger;