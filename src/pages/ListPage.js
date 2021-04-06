import { Link, navigate } from '@reach/router';
import React, { useState } from 'react';
import { RadioButton } from '../components/form/RadioButton';
import { ListItem } from '../components/ListItem';
import { NavButton } from '../components/buttons/NavButton';
import { ScrollContainer } from '../components/ScrollContainer';
import { View } from '../components/View';
import { useCompany } from '../hooks/useCompanyStorage';
import { usePerson } from '../hooks/usePersonStorage';
import styled from 'styled-components';

const StyledText = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const ListPage = () => {
  const { companies } = useCompany();
  const { updatePerson, persons } = usePerson();
  const [selectedCompany, setSelectedCompany] = useState('');

  const notEmployed =
    persons && persons.filter((person) => person.company === '');

  function handleUpdatePerson(e) {
    e.preventDefault();
    const userId = Number(e.target.value);
    updatePerson(userId, selectedCompany);
  }

  function handleNavigate() {
    navigate('/company');
  }

  return (
    <View>
      <h2>Employment</h2>
      {notEmployed.length === 0 ? (
        <p>
          Everyone has find a job. Go back to the <Link to='/'>first page</Link>{' '}
          to add more persons and apply a job to them.
        </p>
      ) : (
        <StyledText>Select a company to apply persons to:</StyledText>
      )}
      <ScrollContainer>
        {notEmployed.length > 0 &&
          companies.map((company, i) => (
            <RadioButton
              htmlFor={company}
              key={i}
              id={company}
              value={company}
              name='company'
              onChange={(e) => setSelectedCompany(e.target.value)}
              label={company}
            ></RadioButton>
          ))}
      </ScrollContainer>
      {notEmployed.length > 0 && <StyledText>Needs a job:</StyledText>}
      <ScrollContainer>
        {notEmployed.length > 0 &&
          notEmployed.map((person) => (
            <ListItem
              key={person.id}
              text={person.name}
              btnTitle='Apply'
              onClick={handleUpdatePerson}
              value={person.id}
              disabled={selectedCompany === ''}
            ></ListItem>
          ))}
      </ScrollContainer>
      <NavButton title='Previous' onClick={handleNavigate}></NavButton>
    </View>
  );
};
