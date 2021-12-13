import React, { createContext, useState } from 'react';

const initialValue = {
  apartments: [],
};

const ApartmentContext = createContext(initialValue);

export const ApartmentProvider = ({ children }) => {
  const [state] = useState({
    apartments: [],
    cities: [],
    countries: [],
  });

  return (
    <ApartmentContext.Provider value={state}>
      {children}
    </ApartmentContext.Provider>
  );
};

export default ApartmentContext;
