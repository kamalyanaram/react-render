import React, { useState } from 'react';

const initState = {
  fname: 'Bruce',
  lname: 'Wayne',
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);

  const chanageName = () => {
    const newPerson = { ...person };

    newPerson.fname = 'Clark';
    newPerson.lname = 'Kent';

    setPerson(newPerson);
    // person.fname = 'Clark'
    // person.lname = 'Kent'
    // setPerson(person)
  };

  console.log('ObjectUseState Render');
  return (
    <div>
      <button onClick={chanageName}>
        {person.fname} - {person.lname}
      </button>
    </div>
  );
};
