import * as React from 'react';
import styles from './style.module.scss';
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR"
export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
    const currentDate = format(new Date(), 'EEEEE, d, MMMM');

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg"></img>
      <p>O melhor para você ouvir, sempre</p>
      <span>Quinta, 22 de abril</span>
    </header>
  );
}

