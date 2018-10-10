import styles from './laodscreen.module.css';
import logo from '../../assets/img/logo.png';

import React from 'react';

const LoadScreen = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo tela de Load" className={styles.loadScreen} />
    </div>
  );
};

export default LoadScreen;
