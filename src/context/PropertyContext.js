import { createContext, useEffect, useState } from 'react';
import propertyApi from 'services/propertyApi';

const Context = createContext();

export const PropertyContextProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await propertyApi.getAllProperties();
      setProperties(data);
    };
    fetchData();
  }, []);

  return (
    <Context.Provider value={{ properties, setProperties }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
