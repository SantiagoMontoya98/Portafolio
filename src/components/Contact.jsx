import React from 'react';
import { ContainerStyle, Form, Formh2, Formp } from '../css/ContactStyles';
import { Formlabel, Input, Textarea, Buttonmargin } from '../css/ContactStyles';
import { Buttonsubmit } from '../css/ContactStyles';

const Contact = () => {


  return (


    <ContainerStyle id="contact">

      <Form action="https://formsubmit.co/santiagomontoya98@hotmail.com" method="POST" target="_blank">

        <Formh2>Formulario de Contacto</Formh2>

        <Formp>Si esta interesad@ en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</Formp>

        <div className="field">
          <Formlabel className="label">Nombre Completo</Formlabel>
          <div className="control has-icons-left">
            <Input className="input" type="text" name="nombre" placeholder="Ingresa tu nombre completo"
              pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" title="Ingresa un nombre valido" required />
            <span className="icon is-small is-left">
              <i className="fas fa-signature"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <Formlabel className="label">Correo electronico</Formlabel>
          <div className="control has-icons-left">
            <Input className="input" type="text" name="correo" placeholder="Ingresa tu correo electronico"
              pattern="^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$" title="Ingresa un correo electronico valido" required />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <Formlabel className="label">Mensaje</Formlabel>
          <Textarea className="textarea" name="mensaje" placeholder="Ingresa tu mensaje..."></Textarea>
        </div>

        <Buttonmargin className="field is-grouped is-grouped-centered">
          <p className="control">
            <Buttonsubmit type="submit" className="button" value="Enviar mensaje"/>
          </p>
        </Buttonmargin>

    </Form>

  </ContainerStyle>

  );

}

export default Contact;