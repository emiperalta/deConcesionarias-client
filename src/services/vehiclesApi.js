const baseUrl = process.env.REACT_APP_API_BASEURL;

const getAllVehicles = async () => {
  const res = await fetch(`${baseUrl}/vehicles`);
  return await res.json();
};

const vehiclesApi = { getAllVehicles };

export default vehiclesApi;
