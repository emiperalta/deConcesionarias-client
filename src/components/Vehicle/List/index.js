import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { ImEye } from 'react-icons/im';

import vehiclesApi from 'services/vehiclesApi';

import './VehicleList.css';

export default function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await vehiclesApi.getAllVehicles();
      setVehicles(data);
    };
    fetchData();
  }, []);

  return (
    <div className='vehicle-container'>
      <h1 className='vehicle-list-title'>Listado de vehículos</h1>
      <Table bordered className='text-center' hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.length ? (
            vehicles.map(v => (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>
                  <FaEdit /> <MdDelete /> <ImEye />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className='text-center'>
                ¡No hay ningún vehículo cargado!
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
