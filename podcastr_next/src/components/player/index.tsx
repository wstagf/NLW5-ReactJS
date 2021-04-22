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
      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider}/>
          </div>
          
          <span>00:00</span>
        </div>
        <div className={styles.button}>
          <button type="button">
            <img src="/shuffle.svg" alt="Embaralhar"></img>
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="Tocar anterior"></img>
          </button>
          <button type="button" className={styles.playButton}>
            <img src="/play.svg" alt="Tocar"></img>
          </button>
          <button type="button">
            <img src="/play-next.svg" alt="Tocar próxima"></img>
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="Repetir"></img>
          </button>
        </div>
      </footer>
    </div>
  );
}