import styled from "styled-components";

export const ContainerStyle = styled.section`

  background-color: var(--color-negro);
  height: 100vh;
  width: 100vw;
  padding: 80px 50px;

`;

export const Form = styled.form`

  width: 50%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 657px){
    width: 80%;
  } 

  @media (max-width: 477px){
    width: 90%;
  }  

  @media (max-width: 412px){
    width: 100%;
  }

  /* @media (max-width: 527px){
    font-size: 10px;
  }  */

`;

export const Formh2 = styled.h2`

  text-align: center;
  font-family: "Nunito 1", sans-serif;
  color: var(--color-blanco);
  font-size: 48px;
  margin-bottom: 20px;

  @media (max-width: 1220px){
    font-size: 36px;
  }  

  @media (max-width: 887px){
    font-size: 32px;
  }

  @media (max-width: 800px){
    font-size: 28px;
  }

  @media (max-width: 712px){
    font-size: 24px;
  }

  @media (max-width: 362px){
    font-size: 18px;
  }

`;

export const Formp = styled.p`

  font-family: "Nunito 2";  
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 847px){
    font-size: 14px;
  }

  @media (max-width: 752px){
    font-size: 12px;
  }

  @media (max-width: 412px){
    font-size: 10px;
  }

  @media (max-width: 332px){
    font-size: 9px;
  }

`;

export const Formlabel = styled.label`

  color: var(--color-blanco);
  font-family: "Nunito 2", sans-serif;  

  @media (max-width: 657px){
    font-size: 14px;
  }

`;

export const Input = styled.input`

  border: 3px solid var(--color-verde);
  font-family: "Nunito 2";
  border-radius: 8px;  

  &:hover{
    border: 3px solid var(--color-verde);
  }

  &:focus{
    border: 3px solid var(--color-verde);
  }

  &::placeholder{
    color: var(--color-placeholder);

    @media (max-width: 362px){
      font-size: 14px;
    }

    @media (max-width: 342px){
      font-size: 12px;
    }

    @media (max-width: 317px){
      font-size: 10px;
    }

  }
  
`;

export const Textarea = styled.textarea`

  border: 3px solid var(--color-verde);
  font-family: "Nunito";
  font-weight: 600;
  border-radius: 8px;
  resize: none;

  &:hover{
    border: 3px solid var(--color-verde);
  }

  &:focus{
    border: 3px solid var(--color-verde);
  }

  &::placeholder{
    color: var(--color-placeholder);

    @media (max-width: 362px){
      font-size: 14px;
    }

    @media (max-width: 342px){
      font-size: 12px;
    }

    @media (max-width: 317px){
      font-size: 10px;
    }

  }

`;

export const Buttonmargin = styled.div`

  margin-top: 30px;

`;

export const Buttonsubmit = styled.input`

  background-color: var(--color-verde);
  color: var(--color-blanco);
  font-family: "Nunito 2";
  border: 3px solid var(--color-negro);
  outline-width: 0;
  font-size: 18px;
  transition: all 500ms ease;

  &:hover{
    opacity: 0.8;
    transform: scale(0.97);
    border: 3px solid var(--color-verde);
    outline-width: 0;
    color: var(--color-blanco);
    background-color: var(--color-negro);
  }

`;