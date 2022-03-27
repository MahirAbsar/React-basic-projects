import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
export default function Home() {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button className='toggle-btn' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='modal-btn' onClick={openModal}>
        show modal
      </button>
    </main>
  );
}
