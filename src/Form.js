<<<<<<< HEAD


import React, {useState} from 'react'
import Table from './Table'







function Form() {
=======
import React, {useState} from 'react';
import Table from './Table';

function Form(props) {
>>>>>>> main
   const [person, setPerson] = useState(
      {
         name: '',
         job: '',
      }
   );
<<<<<<< HEAD
    function handleChange(event) {
      const { name, value } = event.target;
      if (name === "job")
         setPerson(
            {name: person['name'], job: value}
         );
      else
        setPerson(
            {name: value, job: person['job']}
         );
    }
=======

    
    
    function submitForm() {
      props.handleSubmit(person);
      setPerson({name: '', job: ''});
    }


>>>>>>> main
    
    return (
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={person.name}
            onChange={handleChange} />
          <label htmlFor="job">Job</label>
          <input
            type="text"
            name="job"
            id="job"
            value={person.job}
            onChange={handleChange} />
        </form>
    );
}


<<<<<<< HEAD
export default Form;


=======

function handleChange(event) {
  const { name, value } = event.target;
  if (name === "job")
     setPerson(
        {name: person['name'], job: value}
     );
  else
    setPerson(
        {name: value, job: person['job']}
     );
}


export default Form;
>>>>>>> main
