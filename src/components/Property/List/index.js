import { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import PropertyContext from 'context/PropertyContext';

// import propertyApi from 'services/propertyApi';

import './PropertyList.css';

export default function VehicleList() {
  const { properties } = useContext(PropertyContext);
  // const [properties, setProperties] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await propertyApi.getAllProperties();
  //     setProperties(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className='property-container'>
      <h1 className='property-list-title'>Listado de propiedades de vehículos</h1>
      <Table bordered className='text-center' hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {properties.length ? (
            properties.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>
                  <FaEdit /> <MdDelete />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className='text-center'>
                ¡No hay ningúna propiedad de vehículo cargada!
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
