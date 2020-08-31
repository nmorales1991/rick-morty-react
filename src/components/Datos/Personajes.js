import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Card from "./Components/Cards";

import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";

const Contenedor = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Personajes = ({name}) => {
  const [personajes, setpersonajes] = useState([]);
  const [hasmore, sethasmore] = useState(true);
  const [page, setpage] = useState(1)

  const renderCards = () => {
    let items = [];

    personajes !== null &&
      personajes.forEach((personaje, index) => {
        items.push(<Card key={index} personaje={personaje} />);
      });
    return items;
  };

  const loadMoreItems = (result, page) => {

    if (page !== 1) {
      let personajec = [...personajes];
      result.data.results.forEach((data) => {
        personajec.push(data);
      });

      setpersonajes(personajec);
    } else {
      setpersonajes(result.data.results);
    }
    setpage(page)
  };

  const goToPage = (page) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
      .then((result) => {
        if(result.data.info.next===null)sethasmore(false)
        loadMoreItems(result, page+1);
      })
      .catch((err) => {
        console.log(err)
        sethasmore(false);
      });
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=1&name=${name}`)
      .then((result) => {
        setpersonajes(result.data.results)
        sethasmore(true)
        setpage(2)
      })
      .catch((err) => {
        console.log(err)
      });
  }, [name])

  return (
    <InfiniteScroll pageStart={0} loadMore={()=>goToPage(page)} hasMore={hasmore}>
      <Contenedor>{renderCards()}</Contenedor>
    </InfiniteScroll>
  );
};

export default Personajes;
