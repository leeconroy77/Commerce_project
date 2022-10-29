import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import { Fragment, useContext } from 'react'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { UserContext } from '../../context/User.context'
import { CartContext } from '../../context/Cart.context'
import {signOutUser} from '../../utils/Firebase';
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'


import styles from './navigation.module.css';


const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const {isCartOpen, setIsCartOpen} = useContext(CartContext);
  
  const handleClick = () => 
    setIsCartOpen(!isCartOpen);




  return (
    <Fragment>
      <div className = {styles.navigation}>
        <Link className={styles.logoContainer} to="/">
          <CrownLogo />
        </Link>
        <div className={styles.navLinksContainer}>
          <Link className={styles.navLink} to="/shop">
            SHOP
          </Link>
          <Link className={styles.navLink} to="/contact">
            CONTACT
          </Link>
          {
            currentUser ? (
              <span className={styles.navLink} onClick={signOutUser}>SIGN OUT</span>
              ) : (<Link className={styles.navLink} to="/authentication">
            SIGN IN 
                </Link>
            )            
          }
          <CartIcon onClick={handleClick}/>          
        </div>
        {isCartOpen && <CartDropdown />}
                  
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation