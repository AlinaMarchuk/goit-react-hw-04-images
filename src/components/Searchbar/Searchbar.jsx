import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { BiSearch } from 'react-icons/bi';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      return toast.warn('Sorry, there are no search query. Please try again.', {
        theme: 'colored',
      });
    }
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <BiSearch size="20px" />
          {/* <span class="button-label"></span> */}
        </button>

        <input
          onChange={handleChange}
          name="input"
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
