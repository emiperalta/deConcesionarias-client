const baseUrl = process.env.REACT_APP_API_BASEURL;

const getAllProperties = async () => {
  const res = await fetch(`${baseUrl}/vehicle-properties`);
  return await res.json();
};

const getOneProperty = async id => {
  const res = await fetch(`${baseUrl}/vehicle-properties/${id}`);
  return await res.json();
};

const createProperty = async data => {
  const res = await fetch(`${baseUrl}/vehicle-properties`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

const updateProperty = async (id, data) => {
  const res = await fetch(`${baseUrl}/vehicle-properties/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

const deleteProperty = async id => {
  return await fetch(`${baseUrl}/vehicle-properties/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const propertyApi = {
  createProperty,
  deleteProperty,
  getAllProperties,
  getOneProperty,
  updateProperty,
};

export default propertyApi;
