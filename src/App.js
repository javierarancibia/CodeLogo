import React from 'react';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.firstSquare}></div>
        <div className={styles.secondSquare}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.thirdSquare}></div>
        <div className={styles.fourthSquare}></div>
      </div>
      <h5>Hover the squares!</h5>
    </div>
  );
}
