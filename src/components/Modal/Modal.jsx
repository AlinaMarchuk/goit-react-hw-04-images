import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ onBackdrop, onKeyDown, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div className={styles.overlay} onClick={onBackdrop}>
      <div className={styles.modal}>
        <img src={children} alt={children} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
  onBackdrop: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
