import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
export default function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={isModalOpen ? `modal-overlay show-modal` : 'modal-overlay'}>
      <section className='modal-container'>
        <button className='close-btn modal-close-btn' onClick={closeModal}>
          <FaTimes />
        </button>
        <h3>Showing Modal</h3>
      </section>
    </div>
  );
}
