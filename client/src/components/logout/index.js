import React from 'react';
import styles from './index.module.css';

const Logout = ({ logout }) => {
  return (
    <button
      className={
        'waves-effect waves-light red btn sidenav-close ' + styles['logout-btn']
      }
      onClick={logout}
    >
      Logout
    </button>
  );
};

export default Logout;
