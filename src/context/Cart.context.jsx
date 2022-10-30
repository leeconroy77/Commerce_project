import { createContext, useState, useEffect, useReducer} from 'react';



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





export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartCounter: 0,
  removeItemsFromCart: () => {},
  decrimentCartItem: () => {},
  total: 0

});


export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_INCREMENT_CART_COUNTER: 'SET_INCREMENT_CART_COUNTER',
  SET_DECREMENT_CART_COUNTER: 'SET_DECREMENT_CART_COUNTER',
  SET_REMOVE_CART_ITEMS: 'SET_REMOVE_CART_ITEMS',
  SET_CART_ITEMS_TOTAL: 'SET_CART_ITEMS_TOTAL',

}

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch(type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
      case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
      case CART_ACTION_TYPES.SET_INCREMENT_CART_COUNTER:
      return {
        ...state,
        cartCounter: [...state.quantity, payload]
      };
      case CART_ACTION_TYPES.SET_DECREMENT_CART_COUNTER:
      return {
        ...state,
        cartCounter: [...state.quantity, payload]
      };
      case CART_ACTION_TYPES.SET_REMOVE_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
      case CART_ACTION_TYPES.SET_CART_ITEMS_TOTAL:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in CartReducer`);
  }
}

const INITIAL_STATE ={
  currentUser: null,
  cartItem: [],
  cartCounter: 0,
  cartTotal: 0,
  isCartOpen: false
}




export const CartProvider = ({children}) =>{

    const [{isCartOpen}, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    console.log(isCartOpen);
    
  

  const setIsCartOpen = () => {
    dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: true });
  }

    
    const [cartItems, setCartItems] = useState([]);
    const [cartCounter, setCartCounter] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    

    useEffect(() => {
      const newCartCount = cartItems.reduce((total, cardItem) => total + cardItem.quantity, 
      0
      );
      setCartCounter(newCartCount);
    }, [cartItems]);

    useEffect(() => {
      const newCartTotal = cartItems.reduce((total, cardItem) => total + cardItem.quantity * cardItem.price, 
      0
      );
      setCartTotal(newCartTotal);
    }, [cartItems]);
    
    const addItemsToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd))
    };

    const decrimentCartItem = (productTodecrease) => {
      setCartItems(decreaseCartItem(cartItems, productTodecrease))
    };

    const removeItemsFromCart = (productTodelete) => {
      setCartItems(removeCartItem(cartItems, productTodelete))
    };

    


    const value = {isCartOpen, setIsCartOpen, addItemsToCart, cartItems, cartCounter,decrimentCartItem,removeItemsFromCart, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider> 


};