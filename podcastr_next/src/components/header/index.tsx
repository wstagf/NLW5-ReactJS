import * as React from 'react';
import styles from './style.module.scss';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg"></img>
      <p>O melhor para você ouvir, sempre</p>
      <span>Quinta, 22 de abril</span>
    </header>
  );
}

