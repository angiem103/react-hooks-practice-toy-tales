import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onUpdatedToy, onDeleteItem}) {

  const toyCards = toys.map(toy => <ToyCard toy={toy} key={toy.id} onDeleteItem={onDeleteItem} onUpdatedToy={onUpdatedToy}/>)

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
