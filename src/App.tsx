import { useEffect, useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Item } from './types';

const getLocalStorage = (): Item[] => {
  let list: Item[] = [];
  const listData = localStorage.getItem('list');
  if (listData) {
    try {
      list = JSON.parse(listData) as Item[];
    } catch (error) {
      console.error('Error parsing data from local storage:', error);
    }
  }
  return list;
};

const setLocalStorage = (items: Item[]) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>(getLocalStorage());

  const addItem = (itemName: string) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);

    toast.success('Item added to the list');
  };

  const removeItem = (itemId: string) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);

    toast.success('Item deleted');
  };

  const editItem = (itemId: string) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
  };

  useEffect(() => {
    setLocalStorage(items);
  }, [items]);

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
