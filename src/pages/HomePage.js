import { navigate } from '@reach/router';
import React, { useState } from 'react';
import { Button } from '../components/buttons/Button';
import { Form } from '../components/form/Form';
import { InputField } from '../components/form/InputField';
import { ListItem } from '../components/ListItem';
import { NavButton } from '../components/buttons/NavButton';
import { ScrollContainer } from '../components/ScrollContainer';
import { View } from '../components/View';
import { usePerson } from '../hooks/usePersonStorage';

export const HomePage = () => {
  const [name, setName] = useState('');
  const { addPerson, persons } = usePerson();

  function handleSubmit(e) {
    e.preventDefault();
    addPerson(name);
    e.target.reset();
  }

  function handleNavigate() {
    navigate('/company');
  }
  return (
    <View>
      <h2>Welcome!</h2>
      <Form onSubmit={handleSubmit}>
        <InputField
          label='Write a name to add a person:'
          onChange={(e) => setName(e.target.value)}
        ></InputField>
        <Button title='Add' type='submit' disabled={name === ''}></Button>
      </Form>
      {persons.length > 0 && <h3>Persons:</h3>}
      <ScrollContainer>
        {persons.map((person) => (
          <ListItem key={person.id} text={person.name}></ListItem>
        ))}
      </ScrollContainer>
      <NavButton
        title='Next'
        onClick={handleNavigate}
        alignment='right'
      ></NavButton>
    </View>
  );
};
