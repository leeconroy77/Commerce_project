import { createContext, useState, useEffect} from 'react';

const addCartItem = (cartItems, productToAdd) => {

  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity +1 } : cartItem)
  }



  return [...cartItems, {...productToAdd, quantity: 1}]
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartCounter: 0,

});

export const CartProvider = ({children}) =>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCounter, setCartCounter] = useState(0);

    

    useEffect(() => {
      const newCartCount = cartItems.reduce((total, cardItem) => total + cardItem.quantity, 
      0
      );
      setCartCounter(newCartCount);
    }, [cartItems]);
    
    const addItemsToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd))
    };


    const value = {isCartOpen, setIsCartOpen, addItemsToCart, cartItems, cartCounter};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider> 


};