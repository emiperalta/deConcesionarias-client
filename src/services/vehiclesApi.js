const baseUrl = process.env.REACT_APP_API_BASEURL;

const getAllVehicles = async () => {
  const res = await fetch(`${baseUrl}/vehicles`);
  return await res.json();
};

const getOneVehicle = async id => {
  const res = await fetch(`${baseUrl}/vehicles/${id}`);
  return await res.json();
};

const createVehicle = async data => {
  const res = await fetch(`${baseUrl}/vehicles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

const updateVehicle = async (id, data) => {
  const res = await fetch(`${baseUrl}/vehicles/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

const deleteVehicle = async id => {
  return await fetch(`${baseUrl}/vehicles/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const vehicleApi = {
  createVehicle,
  deleteVehicle,
  getAllVehicles,
  getOneVehicle,
  updateVehicle,
};

export default vehicleApi;
