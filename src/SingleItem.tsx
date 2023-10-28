import React from 'react';

interface SingleItemProps {
  item: {
    id: string;
    name: string;
    completed: boolean;
  };
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
}

const SingleItem: React.FC<SingleItemProps> = ({ item, removeItem, editItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed ? 'line-through' : 'none',
        }}
      >
        {item.name}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
