import React from 'react';
import { Projectscontainer, Projectsarticle, Guappjolotas, Amazonas, CvApp } from '../css/ProjectsStyles';
import { Projectsarticleh2, Projectsarticlep } from '../css/ProjectsStyles';
import { Project, Projectimg, Blockmaster, ImgCvApp } from '../css/ProjectsStyles';
import { Projecth2, Projectp, Buttonscontainer } from '../css/ProjectsStyles';
import { Buttonview, Buttoncode, Landingpage } from '../css/ProjectsStyles';
import { Documentation, Surveyform, Tributepage  } from '../css/ProjectsStyles';
import { CalculatorIMC, Moviesforyou, Currencyconverter  } from '../css/ProjectsStyles';

const Projects = () => {
  return (
    
  <Projectscontainer id="projects">

    <Projectsarticle>

      <Projectsarticleh2>Parece magia, funciona con código</Projectsarticleh2>

      <Projectsarticlep>
        Como desarrollador Frontend he trabajado en los siguientes proyectos...
      </Projectsarticlep>

    </Projectsarticle>

    <Project>

      <Projectimg
        src="https://res.cloudinary.com/da6fz1omm/image/upload/v1641283094/Im%C3%A1genes%20Portafolio%20Digital/cvapp_l5ulnr.png"
        title="CvApp" alt="CvApp"/>  

      <CvApp>

        <Projecth2>CvApp</Projecth2>

        <Projectp>Es una aplicación la cual permite crear un curriculum vitae de manera profesional e intuitiva, el cual puede ser descargado en formato PDF, además ofrece la oportunidad de ver diferentes tutoriales con el objetivo de enriquecer el cv y hacerlo mas atractivo para los reclutadores.</Projectp>

        <Buttonscontainer>
          <a href="https://cvapp-573c8.web.app/" target="_blank">
            <Buttonview>Ver proyecto</Buttonview>
          </a>

          <a href="https://github.com/Juanpabedoyav/Demo-Day" target="_blank">
            <Buttoncode>Ver código</Buttoncode>
          </a>
        </Buttonscontainer>

      </CvApp>

    </Project>    

    <Project>

      <Projectimg
        src="https://res.cloudinary.com/da6fz1omm/image/upload/v1641281971/Im%C3%A1genes%20Portafolio%20Digital/amazonas_ibyfzb.png"
        title="Amazonas" alt="Amazonas"/>

      <Amazonas>

        <Projecth2>Amazonas</Projecth2>

        <Projectp>Es una aplicación en la cual se visualiza un pequeño clon de amazon y añade la funcionalidad de iniciar sesión con cuentas de Google o Facebook con la ayuda de Firebase.</Projectp>

        <Buttonscontainer>
          <a href="https://as-c9b11.web.app/" target="_blank">
            <Buttonview>Ver proyecto</Buttonview>
          </a>

          <a href="https://github.com/SantiagoMontoya98/Amazonas" target="_blank">
            <Buttoncode>Ver código</Buttoncode>
          </a>
        </Buttonscontainer>

      </Amazonas>

    </Project>

    <Project>

      <Projectimg
        src="https://res.cloudinary.com/da6fz1omm/image/upload/v1641280775/Im%C3%A1genes%20Portafolio%20Digital/guappjolotas_d17rum.png"
        title="Guappjolotas" alt="Guappjolotas"/>

      <Guappjolotas>

        <Projecth2>Guappjolotas</Projecth2>

        <Projectp>Es una aplicación en la cual se venden guajolotas un platillo típico de México, además bebidas y tamales, la cual está conectada con la API de Stripe con el objetivo de realizar el pago de los productos.</Projectp>

        <Buttonscontainer>
          {/* <a href="https://guappjolotas.herokuapp.com/" target="_blank">
            <Buttonview>Ver proyecto</Buttonview>
          </a> */}

          <a href="https://github.com/SantiagoMontoya98/Guappjolotas" target="_blank">
            <Buttoncode>Ver código</Buttoncode>
          </a>
        </Buttonscontainer>

      </Guappjolotas>

    </Project>

    <Project>

      <Projectimg
        src="https://res.cloudinary.com/da6fz1omm/image/upload/v1635992910/Im%C3%A1genes%20Portafolio%20Digital/Block-Master_xwgrw9.jpg"
        title="Block Master" alt="Block Master"/>

      <Blockmaster>

        <Projecth2>Block Master</Projecth2>

        <Projectp>Es una aplicación en la cual se puede ver el poster de las películas más recientes del momento las cuales son
          cargadas con la
          información de una API REST
          junto con su respectivo tráiler, también se pueden buscar películas,
          filtrar por las más valoradas y menos valoradas, crear y actualizar usuarios y hacer el CRUD de películas.</Projectp>

        <Buttonscontainer>
          <a href="https://santiagomontoya98.github.io/Block-Master/" target="_blank">
            <Buttonview>Ver proyecto</Buttonview>
          </a>

          <a href="https://github.com/SantiagoMontoya98/Block-Master" target="_blank">
            <Buttoncode>Ver código</Buttoncode>
          </a>
        </Buttonscontainer>

      </Blockmaster>

    </Project>

    <Project>

      <Projectimg
        src="https://res.cloudinary.com/da6fz1omm/image/upload/v1635997309/Im%C3%A1genes%20Portafolio%20Digital/Landing-Page_f8fnms.jpg"
        title="Landing Page" alt="Landing Page"/>

      <Landingpage>

        <Projecth2>Financial Mentors</Projecth2>

        <Projectp>Es una landing page en la cual se ofrece el servicio de educación financiera
          personalizada en español con los
          mentores
          más experimentados a nivel mundial.</Projectp>

        <Buttonscontainer>
          <a href="https://santiagomontoya98.github.io/Producto-Comercial/" target="_blank">
            <Buttonview>Ver proyecto</Buttonview>
          </a>

          <a href="https://github.com/SantiagoMontoya98/Producto-Comercial" target="_blank">
            <Buttoncode>Ver código</Buttoncode>
          </a>
        </Buttonscontainer>

      </Landingpage>

    </Project>

    <Project>

      <Projectimg
        src="https://res.cloudinary.com/da6fz1omm/image/upload/v1635998441/Im%C3%A1genes%20Portafolio%20Digital/Documentaci%C3%B3n-T%C3%A9cnica_pxnoir.jpg"
        title="Documentación Técnica" alt="Documentación Técnica"/>

      <Documentation>

        <Projecth2>Documentación Técnica</Projecth2>

        <Projectp>Es una página con responsive design en la cual se puede consultar la documentación técnica referente a la API
          del DOM.</Projectp>

        <Buttonscontainer>
          <a href="https://santiagomontoya98.github.io/Documentacion-Tecnica/" target="_blank">
            <Buttonview>Ver proyecto</Buttonview>
          </a>

          <a href="https://github.com/SantiagoMontoya98/Documentacion-Tecnica" target="_blank">
            <Buttoncode>Ver código</Buttoncode>
          </a>
        </Buttonscontainer>

      </Documentation>

    </Project>

    <Project>

      <Projectimg
        src="https://res.cloudinary.com/da6fz1omm/image/upload/v1635998729/Im%C3%A1genes%20Portafolio%20Digital/Formulario-Encuesta_iovsro.jpg"
        title="Formulario de encuesta de hobbies" alt="Formulario de encuesta de hobbies"/>

      <Surveyform>

        <Projecth2>Formulario de encuesta de hobbies</Projecth2>

        <Projectp>Es una formulario con responsive design en el cual se ingresa información personal de cada usuario con sus
          hobbies favoritos y
          también tiene la opción de hacer comentarios y sugerencias.</Projectp>

        <Buttonscontainer>
          <a href="https://santiagomontoya98.github.io/Formulario-de-encuesta/" target="_blank">
            <Buttonview>Ver proyecto</Buttonview>
          </a>

          <a href="https://github.com/SantiagoMontoya98/Formulario-de-encuesta" target="_blank">
            <Buttoncode>Ver código</Buttoncode>
          </a>
        </Buttonscontainer>

      </Surveyform>

    </Project>

    <Project>

      <Projectimg
        src="https://res.cloudinary.com/da6fz1omm/image/upload/v1635999441/Im%C3%A1genes%20Portafolio%20Digital/P%C3%A1gina-Tributo_org384.jpg"
        title="Página Tributo" alt="Página Tributo"/>

      <Tributepage>

        <Projecth2>Página Tributo</Projecth2>

        <Projectp>Es una página con responsive design haciendo un tributo a la leyenda de la música reggae Bob Marley en la
          cual se puede visualizar el time line de su vida y carrera musical.</Projectp>

        <Buttonscontainer>
          <a href="https://santiagomontoya98.github.io/Pagina-tributo/" target="_blank">
            <Buttonview>Ver proyecto</Buttonview>
          </a>

          <a href="https://github.com/SantiagoMontoya98/Pagina-tributo" target="_blank">
            <Buttoncode>Ver código</Buttoncode>
          </a>
        </Buttonscontainer>

      </Tributepage>

    </Project>

    <Project>

      <Projectimg
        src="https://res.cloudinary.com/da6fz1omm/image/upload/v1636003643/Im%C3%A1genes%20Portafolio%20Digital/Calculadora-IMC_ogygdv.jpg"
        title="Calculadora IMC" alt="Calculadora IMC"/>

      <CalculatorIMC>

        <Projecth2>Calculadora IMC</Projecth2>

        <Projectp>Es una aplicación en la cual al inicio muestra un formulario de registro de usuarios, luego de registrarse
          los datos se guardan en el local storage y muestra la interfaz para calcular el índice de masa corporal de las
          personas ingresando la edad el peso y la
          estatura y dando click en el botón llamado CALCULAR IMC muestra el resultado del indicie de masa corporal de
          la persona según los datos ingresados anteriormente y también muestra estadísticas del IMC de mujeres y
          hombres.
        </Projectp>

        <Buttonscontainer>
          <a href="https://santiagomontoya98.github.io/Modulo-3-Tarea-03-Calculadora-IMC/" target="_blank">
            <Buttonview>Ver proyecto</Buttonview>
          </a>

          <a href="https://github.com/SantiagoMontoya98/Modulo-3-Tarea-03-Calculadora-IMC" target="_blank">
            <Buttoncode>Ver código</Buttoncode>
          </a>
        </Buttonscontainer>

      </CalculatorIMC>

    </Project>

    <Project>

      <Projectimg
        src="https://res.cloudinary.com/da6fz1omm/image/upload/v1636004615/Im%C3%A1genes%20Portafolio%20Digital/Pel%C3%ADculas-para-ti_ivfghe.jpg"
        title="Películas para ti" alt="Películas para ti"/>

      <Moviesforyou>

        <Projecth2>Películas para ti</Projecth2>

        <Projectp>Es una aplicación que tiene un slider de películas, adicional a ello tiene el poster de 5 películas los
          cuales al darle click muestra la descripción de cada película y también tiene una opción de registro de
          usuarios la cual muestra un
          formulario para ingresar los datos y luego del registro estos datos son almacenados en el local storage.
        </Projectp>

        <Buttonscontainer>
          <a href="https://santiagomontoya98.github.io/Modulo-3-Tarea-02-Peliculas/" target="_blank">
            <Buttonview>Ver proyecto</Buttonview>
          </a>

          <a href="https://github.com/SantiagoMontoya98/Modulo-3-Tarea-02-Peliculas" target="_blank">
            <Buttoncode>Ver código</Buttoncode>
          </a>
        </Buttonscontainer>

      </Moviesforyou>

    </Project>

    <Project>

      <Projectimg
        src="https://res.cloudinary.com/da6fz1omm/image/upload/v1636005417/Im%C3%A1genes%20Portafolio%20Digital/Conversor-Divisas_uvbubk.jpg"
        title="Conversor de Divisas" alt="Conversor de Divisas"/>

      <Currencyconverter>

        <Projecth2>Conversor de Divisas</Projecth2>

        <Projectp>Es una aplicación que permite convertir divisas como pesos colombianos, pesos mexicanos, dólares, libras
          esterlinas y euros, ingresando la cantidad de dinero y eligiendo la divisa a la cual se quiere convertir.
        </Projectp>

        <Buttonscontainer>
          <a href="https://santiagomontoya98.github.io/Modulo-3-Tarea-01-Divisas/" target="_blank">
            <Buttonview>Ver proyecto</Buttonview>
          </a>

          <a href="https://github.com/SantiagoMontoya98/Modulo-3-Tarea-01-Divisas" target="_blank">
            <Buttoncode>Ver código</Buttoncode>
          </a>
        </Buttonscontainer>

      </Currencyconverter>

    </Project>

  </Projectscontainer>

  )
}

export default Projects;