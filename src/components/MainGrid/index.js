import styled from 'styled-components';

const MainGrid = styled.main`
  width: 100%;  //  ajuda a deixar estável para mobile
  grid-gap: 10px; // para fazer espaço entre as colunas do grid
  margin-left: auto; // para centralizar  (balanceria a direita)
  margin-right: auto; // para centralizar (balanceia para a esquerda)
  max-width: 500px; // no celular não esticar tanto como um tablet e tal
  padding: 16px;
  .profileArea {  // lembrando que em react devemos usar class-name ao invés de class no html do component
    display: none;
    @media(min-width: 860px){
      display: block;
    }
  }
  @media(min-width: 860px){
    max-width: 1110px;
    display: grid;
    grid-template-areas: 
      "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default MainGrid;