import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import { Fragment, useContext } from 'react'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { UserContext } from '../../context/User.context'
import { CartContext } from '../../context/Cart.context'
import {signOutUser} from '../../utils/Firebase';
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'


import './navigation.styles.scss'


const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const {isCartOpen, setIsCartOpen} = useContext(CartContext);
  
  const handleClick = () => 
    setIsCartOpen(!isCartOpen);

  


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
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
              ) : (<Link className='nav-link' to="/authentication">
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