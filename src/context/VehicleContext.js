import { createContext, useState } from 'react';

const Context = createContext();

export const VehiclesContextProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  return (
    <Context.Provider value={{ vehicles, setVehicles, currentId, setCurrentId }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
