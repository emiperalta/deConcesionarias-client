const baseUrl = process.env.REACT_APP_API_BASEURL;

const getAllProperties = async () => {
  const res = await fetch(`${baseUrl}/vehicle-properties`);
  return await res.json();
};

const propertyApi = { getAllProperties };

export default propertyApi;
