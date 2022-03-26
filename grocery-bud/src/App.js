import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  }
  return [];
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const [editId, setEditId] = useState(null);
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // deal with alert
      showAlert(true, 'please insert a value', 'danger');
    } else if (name && isEdit) {
      // deal with it later
      const updatedList = list.map((singleItem) => {
        if (singleItem.id === editId) {
          return { ...singleItem, name };
        }
        return singleItem;
      });
      setList(updatedList);
      setIsEdit(false);
      setEditId(null);
      showAlert(true, 'value updated', 'success');
      setName('');
    } else {
      const newItem = { id: new Date().getTime().toString(), name };
      setList([...list, newItem]);
      setName('');
      showAlert(true, 'item added', 'success');
    }
  };
  const clearList = () => {
    setList([]);
    showAlert(true, 'list cleared', 'danger');
  };
  const updateItem = (id) => {
    const specificItem = list.find((singleItem) => singleItem.id === id);
    setIsEdit(true);
    setEditId(id);
    setName(specificItem.name);
  };
  const deleteItem = (id) => {
    const filteredItems = list.filter((singleItem) => singleItem.id !== id);
    setList(filteredItems);
    showAlert(true, 'item deleted', 'danger');
  };
  const showAlert = (show = false, msg, type) => {
    setAlert({ show, msg, type });
  };
  return (
    <div className='section-center'>
      {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
      <h3>grocery bud</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='e.g. eggs'
          />
          <button className='btn add-btn'>{isEdit ? 'edit' : 'add'}</button>
        </div>
      </form>
      {list.length > 0 && (
        <>
          <List list={list} deleteItem={deleteItem} updateItem={updateItem} />
          <button className='btn clear-btn' onClick={clearList}>
            clear items
          </button>
        </>
      )}
    </div>
  );
}

export default App;
