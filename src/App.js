import { Route } from 'wouter';

import { PropertyContextProvider } from 'context/PropertyContext';
import { VehiclesContextProvider } from 'context/VehicleContext';

import VehiclePage from 'pages/Vehicle';
import VehicleDetailsPage from 'pages/VehicleDetails';
import PropertyPage from 'pages/Property';

export default function App() {
  return (
    <PropertyContextProvider>
      <VehiclesContextProvider>
        <Route path='/vehicles' component={VehiclePage} />
        <Route path='/vehicles/:id' component={VehicleDetailsPage} />
        <Route path='/properties' component={PropertyPage} />
      </VehiclesContextProvider>
    </PropertyContextProvider>
  );
}
