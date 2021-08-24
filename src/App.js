import { Route } from 'wouter';

import { PropertyContextProvider } from 'context/PropertyContext';

import VehiclePage from 'pages/Vehicle';
import PropertyPage from 'pages/Property';

export default function App() {
  return (
    <PropertyContextProvider>
      <Route path='/vehicles' component={VehiclePage} />
      <Route path='/properties' component={PropertyPage} />
    </PropertyContextProvider>
  );
}
