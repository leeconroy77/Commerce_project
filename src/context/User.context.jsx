import { createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/reducer';

import { 
  onAuthStateChangeListener, 
  signOutUser, 
  createUserDocumentFromAuth,
} from '../utils/Firebase';

export  const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,

} );

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'  
}

const userReducer = (state, action) => {
 
  
  const { type, payload } = action;

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }
}

const INITIAL_STATE ={
  currentUser: null
}




export const UserProvider = ({ children } ) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);
  

  const setCurrentUser = (user) => {
    dispatch(createAction( USER_ACTION_TYPES.SET_CURRENT_USER, user));
  }

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