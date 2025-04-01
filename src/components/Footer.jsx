import React from 'react';
import { Footerstyle, Footerimg, Footeri, Footera } from '../css/FooterStyles';
import { Footerby, Footermarginp, Copyright } from '../css/FooterStyles';

const Footer = () => {

  return(


    <Footerstyle>

      <a href="#welcome-section"><Footerimg
          src="https://res.cloudinary.com/da6fz1omm/image/upload/v1635992909/Im%C3%A1genes%20Portafolio%20Digital/Mi-logo_qtavsu.png"
          title="Santiago Montoya Cano" alt="Santiago Montoya Cano"/></a>

      <Footerby>

        <Footermarginp>Hecho con ❤️ por Santiago</Footermarginp>

        <Copyright>Copyright &copy; 2025 Todos los derechos reservados</Copyright>

      </Footerby>



      <article>
        <Footera href="https://github.com/SantiagoMontoya98" id="profile-link" target="_blank"><Footeri className="fab fa-github"></Footeri></Footera>
      </article>

    </Footerstyle>


  );

}

export default Footer;