import styled from "styled-components";

export const Footerstyle = styled.footer`

  background-color: var(--color-negro);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  padding: 20px;

  @media(max-width: 757px){
    flex-direction: column;   
  }

`;

export const Footerimg = styled.img`

  width: 100px;
  height: auto;

  @media(max-width: 757px){
    padding: 5px;   
  }

`;

export const Footeri = styled.i`

  font-size: 25px;
  color: var(--color-blanco);
  transition: all 500ms ease;

  &:hover{
    transform: scale(0.95);    
  }

  @media(max-width: 757px){
    padding: 5px;   
  }

`;

export const Footera = styled.a`

  transition: opacity 500ms ease;

  &:hover{
    opacity: 0.5;    
  }

`;

export const Footerby = styled.article`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media(max-width: 757px){
    flex-direction: column;
    padding: 5px;    
  }

`;

export const Copyright = styled.p`

  @media(max-width: 417px){
    font-size: 14px;    
  }

  @media(max-width: 357px){
    font-size: 12px;    
  }

  @media(max-width: 312px){
    font-size: 11px;    
  }

`;

export const Footermarginp = styled.p`

  margin-right: 10px;

  @media(max-width: 417px){
    font-size: 14px;    
  }

  @media(max-width: 357px){
    font-size: 12px;    
  }

  @media(max-width: 312px){
    font-size: 11px;    
  }

`;