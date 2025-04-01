import React, { useContext }  from 'react';
import { Welcomestyle, Articlestyle, Articleh1, Articleh2} from '../css/WelcomeStyles';
import { Articlep, Welcomefigure, Welcomeimg, Arrowimg } from '../css/WelcomeStyles';
import StylesContext from "./StylesProvider";

const Welcome = () => {

   const {handleChangeStyles} = useContext(StylesContext);

  return (    

  <Welcomestyle id="welcome-section">

    <Articlestyle>

      <Articleh2>¡Hola a todos!</Articleh2>
      <Articleh1>Soy Santiago Montoya Cano</Articleh1>

      <Articlep>Desarrollador Frontend apasionado por el conocimiento sobre el desarrollo de software. Me encanta escuchar
        música y salir a caminar.</Articlep>

      <a href="#projects">
        <Arrowimg
          src="https://res.cloudinary.com/da6fz1omm/image/upload/v1635992909/Im%C3%A1genes%20Portafolio%20Digital/arrow-down_hhoc6g.svg"
          alt=""
          id="proyectos"
          onClick={handleChangeStyles}/>
      </a>

    </Articlestyle>

    <Welcomefigure>
      <Welcomeimg
        src="https://res.cloudinary.com/da6fz1omm/image/upload/v1635992910/Im%C3%A1genes%20Portafolio%20Digital/Foto_jqsdga.png"
        title="Santiago Montoya Cano" alt="Santiago Montoya Cano"/>
    </Welcomefigure>

  </Welcomestyle>


  )
}

export default Welcome;