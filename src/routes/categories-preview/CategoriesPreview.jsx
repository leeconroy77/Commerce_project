import React from 'react';
import { useContext, Fragment } from 'react';
import {CategoriesContext} from '../../context/Categories.context';
import CategoryPreview from '../../components/category-preview/CategoryPreview';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);
  
  
  
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview products={products} key={title} title={title}/>
      })}
      
      </Fragment>
  
  )
}

export default CategoriesPreview