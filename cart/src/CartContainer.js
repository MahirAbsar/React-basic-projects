import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './context';
const CartContainer = () => {
  const { cart, clearCart, total } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className='cart'>
        <h2>your bag</h2>
        <h4>has no item</h4>
      </section>
    );
  }
  return (
    <section className='cart'>
      <h2>your bag</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <h3>
        total <span> {total}$ </span>
      </h3>
      <button className='btn clear-btn' onClick={clearCart}>
        clear cart
      </button>
    </section>
  );
};

export default CartContainer;
