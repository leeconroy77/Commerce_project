import { Link } from 'react-router-dom'
import styles from './directory-item.styles.module.css'

import React from 'react'

const DirectoryItem = ({ category}) => {

  const {imageUrl, title } = category

  return (
    <div  className={styles.directoryContainer} >  
        <div className={styles.backgroundImage}  style={{backgroundImage: `url(${imageUrl})`}}/>
          <Link className={styles.directoryItemBody}  to={`/shop/${title}`}>            
            <h2 className={styles.h2} >{title}</h2>
            <p className={styles.p} >Shop Now</p>
          </Link>
          </div> 
  )
}

export default DirectoryItem