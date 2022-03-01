import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import iconMap from '../../../../data/icon-map';
import ProductService from '../../../../services/product-service';

const useCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const setCategoryFromUrl = (fetchedCategories) => {
    const categoryParam = searchParams.get('category');
    const foundCategory = fetchedCategories.find((x) => x.id === categoryParam);
    const category = foundCategory ?? fetchedCategories[0];
    if (!foundCategory) {
      setSearchParams({ category: category.id });
    }
    setSelectedCategory(category.id);
    setCategories(fetchedCategories);
  };

  const changeCategory = (id) => {
    setSearchParams({ category: id });
    setSelectedCategory(id);
  };

  useEffect(() => {
    (async () => {
      const categoryData = await ProductService.fetchCategories();
      const fetchedCategories = categoryData.map(({ icon, ...x }) => ({
        ...x,
        Icon: iconMap[icon],
      }));
      setCategoryFromUrl(fetchedCategories);
    })();
  }, []);

  return {
    categories,
    selectedCategory,
    changeCategory,
  };
};

export default useCategories;
