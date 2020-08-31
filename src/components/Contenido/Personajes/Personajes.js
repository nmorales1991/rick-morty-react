import React,{useState} from "react";
import styled from "styled-components";
import Buscador from "../../Buscador/Buscador";
import Personajes from "../../Datos/Personajes";

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

const ContenidoPersonajes = () => {
  const [name, setname] = useState('')
  return (
    <Contenido>
      <DivFlex>
        <Buscador setname={setname} name={name} />

        <Personajes name={name} />
      </DivFlex>
    </Contenido>
  );
};

export default ContenidoPersonajes;
