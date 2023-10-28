import React from 'react';
import SingleItem from './SingleItem';
import { Item } from './types';

interface ItemsProps {
  items: Item[]; // Replace 'any' with the actual type of 'items' if possible
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
}

const Items: React.FC<ItemsProps> = ({ items, removeItem, editItem }) => {
  return (
    <div className='items'>
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
};

export default Items;
