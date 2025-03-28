import styled, { keyframes } from "styled-components";

export const Welcomestyle = styled.section`

  background-color: var(--color-negro);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;  

  @media (max-width: 1000px){
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

`;

export const Articlestyle = styled.article`

  margin-top: 280px;

  @media (max-width: 1000px){
    margin-top: 20px;
  }
  
`;

export const Articleh1 = styled.h1`

  font-family: "Nunito 1", sans-serif;
  font-size: 48px;
  margin-top: 0;
  margin-bottom: 20px;
  color: var(--color-blanco);

  @media (max-width: 1000px){
    font-size: 32px;
  }     

  @media (max-width: 637px){
    font-size: 32px;
  }

  @media (max-width: 462px){
    font-size: 24px;
  }

  @media (max-width: 378px){
    font-size: 18px;
  }

  @media (max-width: 357px){
    font-size: 18px;
  }

`;

export const Articleh2 = styled.h2`

  font-family: "Nunito 1", sans-serif;
  font-size: 48px;
  margin-bottom: 0;
  margin-top: 0;
  color: var(--color-blanco);

  @media (max-width: 1000px){
    font-size: 32px;
  }     

  @media (max-width: 637px){
    font-size: 32px;
  }

  @media (max-width: 462px){
    font-size: 24px;
  }

  @media (max-width: 378px){
    font-size: 18px;
  }

  @media (max-width: 357px){
    font-size: 18px;
  }

`;

export const Articlep = styled.p`

  font-family: "Nunito 2", sans-serif;  
  font-size: 1.1rem;
  margin-bottom: 0;
  margin-top: 0;
  color: var(--color-blanco);
  width: 620px;

  @media (max-width: 1000px){
    font-size: 0.9rem;
  }  

  @media (max-width: 637px){
    font-size: 0.9rem;
  }
  

  @media (max-width: 637px){
    width: 500px;
  }

  @media (max-width: 527px){
    width: 400px;
  }

  @media (max-width: 447px){
    width: 350px;
  }

  @media (max-width: 378px){
    width: 250px;
  }

  @media (max-width: 357px){
    width: 280px;
    font-size: 0.7rem;
  }

  @media (max-width: 307px){
    width: 250px;
  }

`;

export const Welcomefigure = styled.figure `

  @media (min-width: 1000px){
    margin-top: 180px;
  }
  
`;

export const Welcomeimg = styled.img`

  height: 400px;
  transition: height 800ms ease;

  @media (max-width: 1000px){
    height: 340px;
    margin-bottom: 20px;
  }

  @media (max-width: 637px){
    height: 300px;
  }

`;

const Movearrow = keyframes`

  0% {
    transform: translateY(10px);
  }

  25% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }

  75% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(10px);
  }

`;

export const Arrowimg = styled.img`

  margin-top: 100px;
  animation: ${Movearrow} 1.5s ease infinite;

  @media (max-width: 1000px){
    margin-top: 40px;
  }   

  @media (max-width: 637px){
    margin-top: 60px;
  }

  @media (max-width: 527px){
    margin-top: 50px;
  }

  @media (max-width: 462px){
    margin-top: 40px;
  }

  @media (max-width: 337px){
    margin-top: 50px;    
  }

  @media (max-width: 307px){
    margin-top: 60px;
  }

  @media (max-width: 297px){
    margin-top: 35px;
  }

`;