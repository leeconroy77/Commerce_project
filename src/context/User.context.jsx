import { createContext, useState, useEffect } from 'react';

import { 
  onAuthStateChangeListener, 
  signOutUser, 
  createUserDocumentFromAuth,
} from '../utils/Firebase';

export  const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,

} );

export const UserProvider = ({ children } ) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser};

  signOutUser()

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      setCurrentUser(user) 
      createUserDocumentFromAuth(user)     
    } )

    return unsubscribe;
  }, [])

  return <UserContext.Provider value={value} >{children} </UserContext.Provider>
}  