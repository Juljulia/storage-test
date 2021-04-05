import { useEffect, useState } from 'react';

export const useCompany = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const storedCompanies = JSON.parse(localStorage.getItem('companies'));
    storedCompanies && setCompanies(storedCompanies);
  }, []);

  const addCompany = (name) => {
    const isExisting = companies.some((company) => company === name);
    if (!isExisting) {
      localStorage.setItem('companies', JSON.stringify([...companies, name]));
      setCompanies([...companies, name]);
    }
  };

  return { addCompany, companies };
};
