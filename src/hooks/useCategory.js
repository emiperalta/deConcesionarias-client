import { useEffect, useState } from 'react';

import categoryApi from 'services/categoryApi';

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await categoryApi.getAllCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return {
    categories,
    setCategories,
    categoriesForSelect: categories.map(category => ({
      value: category.id,
      label: category.name,
    })),
  };
}
