import { useReducer, useEffect, useState, createContext } from 'react';
import { firestore, timestamp } from '../firebase/config';

export const FirestoreContext = createContext();

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

export const firestoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: false, error: null };
    case 'ADDED_DOCUMENT':
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case 'DELETED_DOCUMENT':
      return { isPending: false, document: null, success: true, error: null };
    case 'ERROR':
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };

    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const FirestoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(firestoreReducer, initialState);
  return (
    <FirestoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreProvider;
