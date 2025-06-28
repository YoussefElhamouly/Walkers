'use client';
import styles from './button.module.scss';

const Button = ({ children, customStyles = '', onClick = () => {} }) => {
  return (
    <button
      className={`${styles.generalBtn} ${customStyles}`}
      // onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
