import styled from "styled-components";

export const Projectscontainer = styled.section`

  height: 100%;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;

`;

export const Projectsarticle = styled.article`

  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: flex-end;

`;

export const Projectsarticleh2 = styled.h2`

  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Nunito 1";
  font-size: 32px;
  width: 400px;
  color: var(--color-negro);
  margin-bottom: 0;

  @media(max-width: 768px){
    margin-left: 20px;
    font-size: 26px; 
  }  

`;

export const Projectsarticlep = styled.p`

  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Nunito 2";
  font-size: 20px;  
  width: 610px;
  text-align: left;
  margin-right: 20px;
  margin-bottom: 0;
  color: var(--color-negro);

  @media(max-width: 1200px){
    margin-left: 50px;
  }

  @media(max-width: 768px){
    margin-left: 20px;
    font-size: 15px; 
  }  


`;

export const Project = styled.section`

  padding: 0 5%;
  width: 60%;
  height: 400px;
  margin: 50px 0;
  position: relative;  
  transition: all 800ms ease;  

  @media(max-width: 1200px){
    padding: 0 0;
    width: 75%;    
  }

  @media(max-width: 768px){
    padding: 0 2%;
    width: 90%;
  }

  @media(max-width: 480px){
    padding: 0 0;
    width: 85%;
  }
  
`;

export const Projectimg = styled.img`

  width: 100%;
  height: 100%;

`;

export const CvApp = styled.article`

  width: 380px;
  height: 300px;
  background-color: var(--color-negro);
  position: absolute;
  top: 55px;
  left: -27%;
  padding-left: 20px;
  padding-right: 10px;  
  box-shadow: 1px 1px 20px -1px var(--color-negro);
  transition: left 800ms ease;

  @media(max-width: 1200px){
    width: 320px;
    height: 280px;
    left: -14%;
  }

  @media(max-width: 768px){
    width: 250px;
    height: 260px;
    left: -2%;    
  }

  @media(max-width: 480px){
    width: 230px;
    height: 245px;    
    left: -5%;    
  }

`;

export const Amazonas = styled.article`

  width: 380px;
  height: 235px;
  background-color: var(--color-negro);
  position: absolute;
  top: 75px;
  left: -27%;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 1200px){
    width: 320px;
    height: 220px;
    left: -14%;
  }

  @media(max-width: 768px){
    width: 240px;
    height: 220px;
    left: -2%;
  }

  @media(max-width: 480px){
    width: 230px;
    height: 205px;
    left: -5%;
  }

`;

export const Guappjolotas = styled.article`

  width: 380px;
  height: 255px;
  background-color: var(--color-negro);
  position: absolute;
  top: 70px;
  left: -27%;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 1200px){
    width: 320px;
    height: 240px;
    left: -14%;
  }

  @media(max-width: 768px){
    width: 240px;
    height: 230px;
    left: -2%;    
  }

  @media(max-width: 480px){
    width: 230px;
    height: 220px;
    left: -5%;    
  }

`;

export const Blockmaster = styled.article`

  width: 380px;
  height: 320px;
  background-color: var(--color-negro);
  position: absolute;
  top: 45px;
  left: -27%;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 1200px){
    width: 320px;
    height: 290px;
    left: -14%;
  }

  @media(max-width: 768px){
    width: 240px;
    height: 280px;
    left: -2%;    
  }

  @media(max-width: 480px){
    width: 230px;
    height: 260px;
    left: -5%;    
  }

`;

export const Landingpage = styled.article`

  width: 380px;
  height: 230px;
  background-color: var(--color-negro);
  position: absolute;
  top: 80px;
  left: -27%;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 1200px){
    width: 320px;
    height: 215px;
    left: -14%;
  }

  @media(max-width: 768px){
    width: 240px;
    height: 210px;
    left: -2%;
  }

  @media(max-width: 480px){
    width: 230px;
    height: 200px;
    left: -5%;
  }

`;

export const Documentation = styled.article`

  width: 380px;
  height: 205px;
  background-color: var(--color-negro);
  position: absolute;
  top: 67px;
  left: -27%;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 1200px){
    width: 320px;
    height: 190px;
    left: -14%;
  }

  @media(max-width: 768px){
    width: 240px;
    height: 195px;
    left: -2%;
  }

  @media(max-width: 480px){
    width: 230px;
    height: 185px;
    left: -5%;
  }

`;

export const Surveyform = styled.article`

  width: 380px;
  height: 285px;
  background-color: var(--color-negro);
  position: absolute;
  top: 60px;
  left: -27%;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 1200px){
    width: 320px;
    height: 260px;
    left: -14%;
  }

  @media(max-width: 768px){
    width: 240px;
    height: 255px;
    left: -2%;
  }

  @media(max-width: 480px){
    width: 230px;
    height: 240px;
    left: -5%;
  }

`;

export const Tributepage = styled.article`

  width: 380px;
  height: 230px;
  background-color: var(--color-negro);
  position: absolute;
  top: 80px;
  left: -27%;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 1200px){
    width: 320px;
    height: 235px;
    left: -14%;
  }

  @media(max-width: 768px){
    width: 240px;
    height: 215px;
    left: -2%;
  }

  @media(max-width: 480px){
    width: 230px;
    height: 200px;
    left: -5%;
  }

`;

export const CalculatorIMC = styled.article`

  width: 380px;
  height: 380px;
  background-color: var(--color-negro);
  position: absolute;
  top: 8px;
  left: -27%;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 1200px){
    width: 320px;
    height: 365px;
    left: -14%;
  }

  @media(max-width: 768px){
    width: 240px;
    height: 360px;   
    left: -2%;    
  }

  @media(max-width: 480px){
    width: 230px;
    height: 335px;
    left: -5%;    
  }

`;

export const Moviesforyou = styled.article`

  width: 380px;
  height: 315px;
  background-color: var(--color-negro);
  position: absolute;
  top: 45px;
  left: -27%;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 1200px){
    width: 320px;
    height: 290px;   
    left: -14%;
  }

  @media(max-width: 768px){
    width: 240px;
    height: 295px;
    left: -4%;   
  }

  @media(max-width: 480px){
    width: 230px;
    height: 260px;
    left: -5%;    
  }

`;

export const Currencyconverter = styled.article`

  width: 380px;
  height: 255px;
  background-color: var(--color-negro);
  position: absolute;
  top: 60px;
  left: -27%;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 1200px){
    width: 320px;
    height: 230px;
    left: -14%;
  }

  @media(max-width: 768px){
    width: 240px;
    height: 230px;
    left: -2%;  
  }

  @media(max-width: 480px){
    width: 230px;
    height: 220px;
    left: -5%;    
  }

`;

export const Projecth2 = styled.h2`

  font-family: "Nunito 1", sans-serif;
  color: var(--color-blanco);
  margin-bottom: 0;
  margin-top: 21px;
  font-size: 22px;

  @media(max-width: 1200px){
    font-size: 20px;
  }

  @media(max-width: 768px){
    font-size: 18px;
  }

  @media(max-width: 480px){
    font-size: 16px;
  }

`;

export const Projectp = styled.p`

  font-family: "Nunito 2", sans-serif;  
  color: var(--color-blanco);
  margin-top: 5px;
  margin-bottom: 0;
  text-align: left;

  @media(max-width: 1200px){
    font-size: 14px;
  }

  @media(max-width: 768px){
    font-size: 12px;
  }

  @media(max-width: 480px){
    font-size: 11px;
  }

`;

export const Buttonscontainer = styled.section`

  margin-top: 13px;

`;

export const Buttonview = styled.button`

  background-color: var(--color-verde);
  padding: 12px 20px;
  color: var(--color-blanco);
  font-family: "Nunito 2";  
  border-width: 0;
  margin-right: 5px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 16px;
  transition: all 500ms ease;
  outline-width: 0;

  &:hover{
    opacity: 0.8;
    transform: scale(0.97);
  }

  @media(max-width: 1200px){
    font-size: 14px;
  }

  @media(max-width: 768px){
    font-size: 12px;
    padding: 12px 10px;
  }

  @media(max-width: 480px){    
    padding: 10px 10px;
    font-size: 12px;
  }

`;

export const Buttoncode = styled.button`

  background-color: var(--color-negro);
  padding: 10px 25px;
  color: var(--color-verde);
  font-family: "Nunito 2";  
  border: 2px solid var(--color-verde);
  margin-right: 5px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 16px;
  transition: all 800ms ease;

  &:hover{
    opacity: 0.8;
    transform: scale(0.97);
  }

  @media(max-width: 1200px){
    font-size: 14px;
  }

  @media(max-width: 768px){
    font-size: 12px;
    padding: 12px 15px;
  }

  @media(max-width: 480px){
    font-size: 12px;
    padding: 10px 8px;
  }

`;