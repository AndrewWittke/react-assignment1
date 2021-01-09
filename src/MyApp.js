import React, {useState} from 'react';
import Table from './Table';


import Form from './Form';


<<<<<<< HEAD
function MyApp() {
   const [characters, setCharacters] = useState([]);
=======

function MyApp() {
    const [characters, setCharacters] = useState([]);
    
    function updateList(person) {
      setCharacters([...characters, person]);
    }

>>>>>>> main

   function removeOneCharacter (index) {
      const updated = characters.filter((character, i) => {
         return i !== index
      });
      setCharacters(updated);
   }
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={removeOneCharacter} />
<<<<<<< HEAD
            <Form />
=======
        <Form handleSubmit={updateList} />
>>>>>>> main
      </div>
    )
}

export default MyApp;
