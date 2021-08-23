const baseUrl = process.env.REACT_APP_API_BASEURL;

const getAllCategories = async () => {
  const res = await fetch(`${baseUrl}/categories`);
  return await res.json();
};

const categoryApi = { getAllCategories };

export default categoryApi;
