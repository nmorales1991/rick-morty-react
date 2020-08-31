import React from "react";
import styled from "styled-components";


const Contenido = styled.div`
  min-height: 100vh;
  background-color: cornflowerblue;
  display: flex;
  margin-left: 200px;
  background-image: url("/img/background.jpg");
  //background-repeat: no-repeat;
  background-size: auto;
  //background-position: initial;
  //filter: brightness(80%);
`;

const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 5% 2% 5%;
`;

const ContenidoLugares = () => {

  return (
    <Contenido>
      <DivFlex>
            <h2>Lugares proximamente</h2>
      </DivFlex>
    </Contenido>
  );
};

export default ContenidoLugares;
