import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]); 

 
  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(toys => setToys(toys))
  }, []) 

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


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy) {
    if (newToy !== ""){
    setToys([...toys,newToy])
  } else  {
    setToys(toys)
  }
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onUpdatedToy={handleLikedToy} onDeleteItem={handleDeletedItem} />
    </>
  );
}

export default App;
