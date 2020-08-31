import React from "react";
import styled from "styled-components";

const Card = styled.div`
  flex: 0 1 calc(25% - 1em);
  background: #2f8782;
  border: 3px solid #bdca52;
  border-radius: 25px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 320px;
`;

const Imagen = styled.img`
  margin-top: 15px;
  margin-bottom: 25px;
  width: 220px;
  border-radius: 110px;
  border: 3px solid #bdca52;
`;

const Texto = styled.span`
font-size: 28px;
    letter-spacing: 1.2px;
}

`;

const Cards = React.memo(({personaje}) => {
  return (
    <Card>
      <div style={{ flex: 1 }}>
        <Imagen
          src={personaje.image}
          alt="img"
        />
      </div>
      <div style={{ flex: 2 }}>
        <Texto>{personaje.name}</Texto>
      </div>
    </Card>
  );
});

export default Cards;
