import { useEffect, useState } from 'react';

export const usePerson = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const storedPersons = JSON.parse(localStorage.getItem('persons'));
    if (storedPersons) {
      setPersons(storedPersons);
    }
  }, []);

  const addPerson = (name) => {
    const id = Math.floor(Math.random() * 10000);
    const user = {
      id: id,
      name: name,
      company: '',
    };

    localStorage.setItem('persons', JSON.stringify([user, ...persons]));
    setPersons([user, ...persons]);
  };

  const updatePerson = (userId, chosenCompany = '') => {
    const index = persons.findIndex((person) => person.id === userId);
    let updatedPersons = [...persons];
    updatedPersons[index] = {
      ...updatedPersons[index],
      company: chosenCompany,
    };
    localStorage.setItem('persons', JSON.stringify(updatedPersons));
    setPersons(updatedPersons);
  };

  return { addPerson, updatePerson, persons };
};
