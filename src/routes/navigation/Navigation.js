import React from 'react'
import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {





  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to="/">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to="/Shop">
            SHOP
          </Link>
          <Link className='nav-link' to="/Contact">
            CONTACT
          </Link>
        </div>          
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation