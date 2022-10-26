import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import { Fragment, useContext } from 'react'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { UserContext } from '../../context/User.context'
import {signOutUser} from '../../utils/Firebase';
import './navigation.styles.scss'


const Navigation = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);
  
 const signOutHandler = async () => {
  await signOutUser();
  setCurrentUser(null)
 }


  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to="/">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to="/shop">
            SHOP
          </Link>
          <Link className='nav-link' to="/contact">
            CONTACT
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
              ) : (<Link className='nav-link' to="/authentication">
            SIGN IN 
                </Link>
            )            
          }
        </div>          
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation