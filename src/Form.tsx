import React, { useState, FormEvent, ChangeEvent } from 'react';
import { toast } from 'react-toastify';

interface FormProps {
  addItem: (itemName: string) => void;
}

const Form: React.FC<FormProps> = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error('Please provide a value');
      return;
    }
    addItem(newItemName);
    setNewItemName('');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItemName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItemName}
          onChange={handleInputChange}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
