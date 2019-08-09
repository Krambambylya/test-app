import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {MethodService} from '../../services/MethodService';
import './AddForm.css';

const formPropTypes = {
  addItem: PropTypes.func.isRequired,
};

const AddForm = props => {

  const [value, setValue] = useState('');
  const [tags, setTags] = useState([]);

  const handleSetValue = text => {
    setValue(text);
    setTags(MethodService.getTagsByText(text));
  }

  const addItem = evt => {
    evt.preventDefault();

    console.log('add value', value);
    console.log('add tags', tags);

    // Reset value
    setValue('');
    setTags([])
  };

  return (
    <form
      method="POST"
      autoComplete="on"
      className='addForm-container'
      onSubmit={addItem}
      >
      <input
        type='text'
        className='addForm-input'
        value={value}
        onChange={(evt) => handleSetValue(evt.target.value)}
        placeholder='New value' />
      <button
        type="submit"
        aria-label="Add item">
        submit
      </button>
      <div className='addForm-tags'>
        <span>Tags: </span>
        {tags.length > 0 ? (
          tags.map((tag)=>{
            return (
              <span key={tag}>{tag}</span>
            )
          })
        ):null}
      </div>
    </form>
  );
};

export default AddForm;
