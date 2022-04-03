import React from 'react';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context';
import Navbar from './Navbar';
const App = () => {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <section className='loading'>
        <h1>Loading...</h1>
      </section>
    );
  }
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
};

export default App;
