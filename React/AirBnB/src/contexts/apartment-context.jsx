import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';
import APIService from '../services/api-service';

const initialValue = {
  cities: [],
  countries: [],
  apartmentTypes: [],
  wishlists: [],
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
    console.log('incijuojamas parsiuntimas kontekste');
    const fetchData = async () => {
      const data = await APIService.fetchApartmentContextData();
      setState(data);
    };

    fetchData();
  }, []);

  const providerValue = useMemo(() => ({
    ...state,
  }), [state]);

  return (
    <ApartmentContext.Provider value={providerValue}>
      {children}
    </ApartmentContext.Provider>
  );
};

export default ApartmentContext;
