import React, { useContext, useReducer, useEffect } from 'react';
import data from './data';
import reducer from './reducer';
const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project';

const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    cart: data,
    amount: 0,
    total: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // increase Item
  const increaseItem = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  // decrease Item
  const decreaseItem = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };
  // clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  // remove item
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };
  // fetch data
  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: 'DISPLAY_CART', payload: cart });
  };
  useEffect(() => {
    fetchData();
  }, []);
  // calculate totals
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        increaseItem,
        decreaseItem,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
