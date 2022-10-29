import React from 'react'
import DirectoryItem from '../directory-item/DirectoryItem'
import styles from './directory.styles.module.css'


const Directory = ({categories}) => {
  return (
    <div className={styles.categoriesContainer} >
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
  ))}
  </div>
  )
}

export default Directory