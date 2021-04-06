import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/buttons/Button';
import { NavButton } from '../components/buttons/NavButton';
import { Form } from '../components/form/Form';
import { InputField } from '../components/form/InputField';
import { RadioButton } from '../components/form/RadioButton';
import { ListItem } from '../components/ListItem';
import { ScrollContainer } from '../components/ScrollContainer';
import { View } from '../components/View';
import { useCompany } from '../hooks/useCompanyStorage';
import { usePerson } from '../hooks/usePersonStorage';

const StyledText = styled.p`
  margin: 0;
`;

export const CompanyPage = () => {
  const { addCompany, companies } = useCompany();
  const { updatePerson, persons } = usePerson();
  const [selectedCompany, setSelectedCompany] = useState('');
  const [company, setCompany] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (selectedCompany !== '') {
      const result = persons.filter(
        (person) => person.company === selectedCompany
      );
      setEmployees(result);
    }
  }, [selectedCompany, persons]);

  function handleSubmit(e) {
    e.preventDefault();
    addCompany(company);
    e.target.reset();
  }

  function handleUpdatePerson(e) {
    e.preventDefault();
    const userId = Number(e.target.value);
    updatePerson(userId);
  }

  function handleNavigate(dir) {
    if (dir === 'left') {
      navigate('/');
    }
    if (dir === 'right') {
      navigate('/list');
    }
  }

  return (
    <View>
      <h2>Workplace</h2>
      <Form onSubmit={handleSubmit}>
        <InputField
          label='Write the name of a company:'
          onChange={(e) => setCompany(e.target.value)}
        ></InputField>
        <Button title='Add' type='submit' disabled={company === ''}></Button>
      </Form>
      {companies.length > 0 && (
        <h4>Select a company to see who works there:</h4>
      )}
      <ScrollContainer>
        {companies.map((company, i) => (
          <RadioButton
            htmlFor={company}
            key={i}
            id={company}
            name='company'
            value={company}
            onChange={(e) => setSelectedCompany(e.target.value)}
            label={company}
          ></RadioButton>
        ))}
      </ScrollContainer>

      {companies.length > 0 && <h4>Employers at {selectedCompany}</h4>}
      <ScrollContainer>
        {employees.length > 0 || companies.length === 0 ? (
          employees.map((person) => (
            <ListItem
              key={person.id}
              text={person.name}
              onClick={handleUpdatePerson}
              value={person.id}
              btnTitle='Remove'
            ></ListItem>
          ))
        ) : (
          <StyledText>No employers</StyledText>
        )}
      </ScrollContainer>
      <NavButton
        title='Previous'
        onClick={() => handleNavigate('left')}
      ></NavButton>
      <NavButton
        title='Next'
        onClick={() => handleNavigate('right')}
        alignment='right'
      ></NavButton>
    </View>
  );
};
