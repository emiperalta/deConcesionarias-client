import { createContext, useState } from 'react';

const Context = createContext();

export const PropertyContextProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  return (
    <Context.Provider value={{ properties, setProperties, currentId, setCurrentId }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
