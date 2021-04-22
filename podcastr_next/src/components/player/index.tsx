import * as React from 'react';
import styles from './style.module.scss';

export function Player () {
    
  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora"></img>
        <strong>Tocando agora</strong>
      </header>
      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>
      <footer></footer>
    </div>
  );
}