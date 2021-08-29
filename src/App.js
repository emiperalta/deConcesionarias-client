import { Route } from 'wouter';

import { PropertyContextProvider } from 'context/PropertyContext';
import { VehiclesContextProvider } from 'context/VehicleContext';

import HomePage from 'pages/Home';
import VehiclePage from 'pages/Vehicle';
import VehicleDetailsPage from 'pages/VehicleDetails';
import PropertyPage from 'pages/Property';

export default function App() {
  return (
    <PropertyContextProvider>
      <VehiclesContextProvider>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/vehicles' component={VehiclePage} />
        <Route exact path='/vehicles/:id' component={VehicleDetailsPage} />
        <Route exact path='/properties' component={PropertyPage} />
      </VehiclesContextProvider>
    </PropertyContextProvider>
  );
}
