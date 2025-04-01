import styled from "styled-components";

export const ContainerLinks = styled.section`

  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0);  
  display: block;
  z-index: 999;  

`;

export const LinksBurger = styled.section`

  display: flex;
  flex-direction: column; 
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: -35vh;  

`;

export const LinkBurger = styled.a`

  font-size: 24px;  
  padding: 18px;
  //border-bottom: 1px solid var(--color-verde); 
  text-align: center;
  color: var(--color-blanco);
  font-family: "Nunito 2", sans-serif;
  transition: all 500ms ease;

  &:hover{
    color: var(--color-verde);
    opacity: 0.8;
    text-decoration: underline;
  }

`;

export const CloseBurger = styled.section`

  margin-top: 25px;  
  margin-left: 15px;

`;