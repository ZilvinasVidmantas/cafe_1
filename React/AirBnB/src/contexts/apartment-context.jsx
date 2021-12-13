import React, { createContext, useState, useEffect } from 'react';
import APIService from '../services/api-service';

const initialValue = {
  apartments: [],
};

const ApartmentContext = createContext(initialValue);

export const ApartmentProvider = ({ children }) => {
  const [state, setState] = useState({
    apartments: [],
    cities: [],
    countries: [],
    apartmentTypes: [],
    wishlists: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await APIService.fetchApartmentContextData();
      setState(data);
    };

    fetchData();
  }, []);

  return (
    <ApartmentContext.Provider value={state}>
      {children}
    </ApartmentContext.Provider>
  );
};

export default ApartmentContext;

/*
  Sukurti api-service.js funkcijas gauti duomenims:
    apartments
    cities
    countries
    apartmentTypes
  Gavus duomenis, įrašyti juos į ApartmentProvider <state>
*/
