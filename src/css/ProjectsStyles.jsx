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

  @media(max-width: 607px){
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

  @media(max-width: 1117px){
    margin-left: 50px;
  }

  @media(max-width: 607px){
    margin-left: 20px;
    font-size: 15px; 
  }  


`;

export const Project = styled.section`

  padding: 0 30px;
  width: 80%;
  height: 400px;
  margin: 50px 0;
  position: relative;

`;

export const Projectimg = styled.img`

  width: 100%;
  height: 100%;

`;

export const Blockmaster = styled.article`

  width: 380px;
  height: 315px;
  background-color: var(--color-negro);
  position: absolute;
  top: 55px;
  left: 10px;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 747px){
    width: 320px;
    height: 280px;
  }

  @media(max-width: 607px){
    width: 240px;
    height: 230px;
    padding-left: 15px;
  }

  @media(max-width: 532px){
    width: 230px;
    height: 235px;
    padding-left: 15px;
  }

`;

export const Landingpage = styled.article`

  width: 380px;
  height: 230px;
  background-color: var(--color-negro);
  position: absolute;
  top: 80px;
  left: 10px;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 747px){
    width: 320px;
    height: 205px;
  }

  @media(max-width: 607px){
    width: 240px;
    height: 180px;
    padding-left: 15px;
  }

  @media(max-width: 532px){
    width: 230px;
    height: 178px;
    padding-left: 15px;
  }

`;

export const Documentation = styled.article`

  width: 380px;
  height: 205px;
  background-color: var(--color-negro);
  position: absolute;
  top: 67px;
  left: 10px;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 747px){
    width: 320px;
    height: 187px;
  }

  @media(max-width: 607px){
    width: 240px;
    height: 165px;
    padding-left: 15px;
  }

  @media(max-width: 532px){
    width: 230px;
    height: 163px;
    padding-left: 15px;
  }

`;

export const Surveyform = styled.article`

  width: 380px;
  height: 285px;
  background-color: var(--color-negro);
  position: absolute;
  top: 80px;
  left: 10px;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 747px){
    width: 320px;
    height: 250px;
  }

  @media(max-width: 607px){
    width: 240px;
    height: 215px;
    padding-left: 15px;
  }

  @media(max-width: 532px){
    width: 230px;
    height: 210px;
    padding-left: 15px;
  }

`;

export const Tributepage = styled.article`

  width: 380px;
  height: 230px;
  background-color: var(--color-negro);
  position: absolute;
  top: 80px;
  left: 10px;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 747px){
    width: 320px;
    height: 225px;
  }

  @media(max-width: 607px){
    width: 240px;
    height: 180px;
    padding-left: 15px;
  }

  @media(max-width: 532px){
    width: 230px;
    height: 193px;
    padding-left: 15px;
  }

`;

export const CalculatorIMC = styled.article`

  width: 380px;
  height: 380px;
  background-color: var(--color-negro);
  position: absolute;
  top: 40px;
  left: 10px;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 747px){
    width: 320px;
    height: 360px;
  }

  @media(max-width: 607px){
    width: 240px;
    height: 280px;
    padding-left: 15px;
  }

  @media(max-width: 532px){
    width: 230px;
    height: 290px;
    padding-left: 15px;
  }

`;

export const Moviesforyou = styled.article`

  width: 380px;
  height: 315px;
  background-color: var(--color-negro);
  position: absolute;
  top: 60px;
  left: 10px;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 747px){
    width: 320px;
    height: 285px;
    padding-left: 15px;
  }

  @media(max-width: 607px){
    width: 240px;
    height: 240px;
    padding-left: 15px;
  }

  @media(max-width: 532px){
    width: 230px;
    height: 230px;
    padding-left: 15px;
  }

`;

export const Currencyconverter = styled.article`

  width: 380px;
  height: 255px;
  background-color: var(--color-negro);
  position: absolute;
  top: 60px;
  left: 10px;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px -1px var(--color-negro);

  @media(max-width: 747px){
    width: 320px;
    height: 226px;
  }

  @media(max-width: 607px){
    width: 240px;
    height: 200px;
    padding-left: 15px;
  }

  @media(max-width: 532px){
    width: 230px;
    height: 190px;
    padding-left: 15px;
  }

`;

export const Projecth2 = styled.h2`

  font-family: "Nunito 1", sans-serif;
  color: var(--color-blanco);
  margin-bottom: 0;
  margin-top: 21px;
  font-size: 22px;

  @media(max-width: 747px){
    font-size: 18px;
  }

  @media(max-width: 607px){
    font-size: 14px;
  }

`;

export const Projectp = styled.p`

  font-family: "Nunito 2", sans-serif;  
  color: var(--color-blanco);
  margin-top: 5px;
  margin-bottom: 0;
  text-align: left;

  @media(max-width: 747px){
    font-size: 14px;
  }

  @media(max-width: 607px){
    font-size: 10px;
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
  font-size: 14px;
  transition: all 800ms ease;
  outline-width: 0;

  &:hover{
    opacity: 0.8;
    transform: scale(0.97);
  }

  @media(max-width: 747px){
    font-size: 12px;
  }

  @media(max-width: 607px){
    font-size: 10px;
    padding: 12px 10px;
  }

  @media(max-width: 532px){    
    padding: 10px 10px;
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
  font-size: 14px;
  transition: all 800ms ease;

  &:hover{
    opacity: 0.8;
    transform: scale(0.97);
  }

  @media(max-width: 747px){
    font-size: 12px;
  }

  @media(max-width: 607px){
    font-size: 10px;
    padding: 12px 15px;
  }

  @media(max-width: 532px){    
    padding: 10px 8px;
  }

`;