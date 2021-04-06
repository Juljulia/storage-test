import { useEffect, useState } from 'react';

export const useCompany = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    let storedCompanies = JSON.parse(localStorage.getItem('companies'));
    if (storedCompanies) {
      storedCompanies.sort();
      setCompanies(storedCompanies);
    }
  }, []);

  const addCompany = (name) => {
    const isExisting = companies.some((company) => company === name);
    if (!isExisting) {
      localStorage.setItem('companies', JSON.stringify([name, ...companies]));
      setCompanies([name, ...companies]);
    }
  };

  return { addCompany, companies };
};
