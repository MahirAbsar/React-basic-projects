import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
function List({ list, deleteItem, updateItem }) {
  return (
    <div>
      {list.map((singleItem) => {
        const { id, name } = singleItem;
        return (
          <article key={id} className='grocery-container'>
            <p>{name}</p>
            <div className='btn-container'>
              <button className='btn edit-btn'>
                <FaEdit onClick={() => updateItem(id)} />
              </button>
              <button className='btn delete-btn'>
                <FaTrashAlt onClick={() => deleteItem(id)} />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
