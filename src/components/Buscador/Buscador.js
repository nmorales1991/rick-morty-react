import React from "react";
import styled from "styled-components";

const Busqueda = styled.input`
  width: 500px;
  height: 20px;
  border-radius: 30px;
  padding: 15px;
  font-family: "VT323", monospace;
  font-size: 25px;
  background: #2f8782;
  border: 3px solid #bdca52;
  color: white;
  outline: none;
  letter-spacing: 1.2px;
  :focus {
    border: 3px solid #ef8162;
    transition: 0.5s;
  }
  ::placeholder {
    color: white;
  }
`;

const ContenedorBuscador = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Buscador = ({setname,name}) => {
  return (
    <ContenedorBuscador>
      <Busqueda
        autoComplete="false"
        autoFocus={true}
        spellCheck={false}
        type="text"
        placeholder="Buscador..."
        value={name}
        onChange={(e)=>setname(e.target.value)}
      />
    </ContenedorBuscador>
  );
};

export default Buscador;
