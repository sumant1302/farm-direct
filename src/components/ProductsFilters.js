import React, { useEffect, useState } from 'react';
import { getCategory } from '../functions/getCategory';

const ProductsFilters = (props) => {
    // const categories = await getCategory();
    // console.log("Categories" + categories);
    // // const category = "";
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const fetchedCategories = await getCategory();
          setCategories(fetchedCategories);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
  
      fetchCategories();
    }, []);
  return (
      <div>
          <h2>Filters</h2>
          <h4>Category:</h4>
          {categories.map((category, key) => (
            <div>
              <label key={key} htmlFor={category} >
              <input type='checkbox' id={category} />
              {category}
                  </label>
                  </div>  
          ))
          }

    </div>
  )
}

export default ProductsFilters;
