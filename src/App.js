import React from 'react';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.firstSquare}>
          <p className={styles.text1}>C</p>
        </div>
        <div className={styles.secondSquare}>
          <p className={styles.text2}>o</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.thirdSquare}>
          <p className={styles.text3}>d</p>
        </div>
        <div className={styles.fourthSquare}>
          <p className={styles.text4}>e</p>
        </div>
      </div>
      <h5>Hover the squares!</h5>
    </div>
  );
}
