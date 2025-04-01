import styled from "styled-components";

export const Navstyle = styled.nav`

  background-color: var(--color-negro);
  width: 100vw;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;  
`;

export const Hamburgerb = styled.button`
  
  display: none;  

  @media (max-width: 617px){
    display: block;
    padding: 0;
    margin-left: -160px;
  }

  @media (max-width: 557px){    
    margin-left: -125px;
  }

  @media (max-width: 517px){    
    margin-left: -90px;
  }

  @media (max-width: 442px){    
    margin-left: -80px;
  }

  @media (max-width: 427px){    
    margin-left: -70px;
  }

  @media (max-width: 397px){    
    margin-left: -50px;
  }

  @media (max-width: 337px){    
    margin-left: -30px;
  }

  @media (max-width: 297px){    
    margin-left: -25px;
  }  

`;

export const Hamburgercolor = styled.span`

  background-color: var(--color-verde);
  display: none;

  &:before{
    background-color: var(--color-verde);
  }

  &:after{
    background-color: var(--color-verde);
  }

  @media (max-width: 617px){
    display: block;
  }

`;

export const Logolink = styled.section`

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 700px;
  font-size: 20px;
  font-family: "Nunito 2", sans-serif;

`;

export const Imglogo = styled.img`

  width: 100px;
  height: auto;

`;

export const Links = styled.a`
  
  text-decoration-line: none;
  color: var(--color-blanco);
  transition: all 500ms ease;

  &:hover{
    color: var(--color-verde);
    text-decoration-line: underline;
    opacity: 0.8;
  }

  @media (max-width: 617px){
    display: none;
  }


`;

export const Hellolink = styled.a`

  color: var(--color-blanco);
  transition: all 500ms ease;

  &:hover{
    color: var(--color-verde);
    opacity: 0.8;
  }

  @media (max-width: 617px){
    display: none;
  }

`;

export const Cvbutton = styled.button`

  padding: 15px 20px;
  border-width: 0;
  background-color: var(--color-verde);
  cursor: pointer;
  margin-right: 6rem;
  color: white;  
  font-family: "Nunito 2", sans-serif;  
  font-size: 14px;
  transition: all 800ms ease;

  &:hover{
    opacity: 0.8;
    transform: scale(0.97);
  }

  @media (max-width: 1015px){
    display:none;
  }

`;

export const Cvbuttonr = styled.button`

  padding: 15px 20px;
  border-width: 0;
  background-color: var(--color-verde);
  cursor: pointer;
  margin-right: 4rem;
  color: white;  
  font-family: "Nunito 2", sans-serif;  
  font-size: 14px;
  transition: all 800ms ease;
  display: none;

  &:hover{
    opacity: 0.8;
    transform: scale(0.97);
  }

  @media (max-width: 1015px){
    display:block;
  }

  @media (max-width: 617px){
    margin-right: 0;
  }

  @media (max-width: 297px){
    margin-right: -15px;
  }

`;