import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({newToy}) {

  const [toys, setToys] = useState([])

  function handleDeletedItem(deletedToy){
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  function handleLikedToy(updatedToy) {
    const updatedLikes = toys.map((toy) => {
      if (toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
    })
    setToys(updatedLikes)
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(toys => setToys(toys))
  }, [])

  const listWithNewToy = [...toys, newToy]
  const toyList = listWithNewToy.map(toy => <ToyCard toy={toy} key={toy.id} onDeleteItem={handleDeletedItem} onUpdatedToy={handleLikedToy}/>)

  return (
    <div id="toy-collection">{toyList}</div>
  );
}

export default ToyContainer;
