import { createContext, useReducer} from 'react';

import { createAction } from '../utils/reducer';



const addCartItem = (cartItems, productToAdd) => {

  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity +1 } : cartItem)
  }



  return [...cartItems, {...productToAdd, quantity: 1}]
};

const decreaseCartItem = (cartItems, productTodecrease) => {

  const existingCartItem = productTodecrease;

  if (existingCartItem.quantity >= 2) {
    return cartItems.map((cartItem) => cartItem.id === productTodecrease.id ? {...cartItem, quantity: cartItem.quantity -1 } : cartItem)
  } else

  if (existingCartItem.quantity === 1) {
    return cartItems = cartItems.filter((cartItem) => cartItem.id !== productTodecrease.id);
  } 


};

const removeCartItem = (cartItems, productTodelete) => {

  cartItems = cartItems.filter((cartItem) => cartItem.id !== productTodelete.id);

  
    return cartItems
  }


export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_REMOVE_CART_ITEMS: 'SET_REMOVE_CART_ITEMS',
  SET_CART_ITEMS_TOTAL: 'SET_CART_ITEMS_TOTAL',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',

}

const INITIAL_STATE ={
  cartItems: [],
  cartCounter: 0,
  cartTotal: 0,
  isCartOpen: false,
}

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      }; 
      case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);

    }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCounter: 0,
  cartTotal: 0,
});




export const CartProvider = ({children}) =>{
  

  const [{cartCounter, cartTotal, cartItems, isCartOpen}, dispatch ] = useReducer(cartReducer, INITIAL_STATE);

   
  const updateCartItemsReducer = (cartItems) => {
    const newCartCount = cartItems.reduce((total, cardItem) => total + cardItem.quantity, 
      0
      );

    const newCartTotal = cartItems.reduce((total, cardItem) => total + cardItem.quantity * cardItem.price, 
      0
      );


    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {      
          cartItems: cartItems,
          cartTotal: newCartTotal,
          cartCounter: newCartCount
        }) 
    )

  };

  

    
    const addItemsToCart = (productToAdd) => {
      const newCartItems = addCartItem(cartItems, productToAdd);
      updateCartItemsReducer(newCartItems)
    };

    const decrimentCartItem = (productTodecrease) => {
      const newCartItems = decreaseCartItem(cartItems, productTodecrease);
      updateCartItemsReducer(newCartItems);
    };

    const removeItemsFromCart = (productTodelete) => {
      const newCartItems = removeCartItem(cartItems, productTodelete)
      updateCartItemsReducer(newCartItems);
    };

    const setIsCartOpen = (bool) => {
      dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
    };

    


    const value = { isCartOpen, setIsCartOpen, addItemsToCart, cartItems, cartCounter,decrimentCartItem,removeItemsFromCart, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider> 


};