import React, { Component } from 'react';
import styles from './Level.module.scss';
import Button from '../UI/Button/Button';


export default class Level extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      description: 'Вы оказались в загадочном лабиринте! Что делать? А вот хз!'
    }
  }

  render() {
    const {id, description} = this.state;

    return (
      <li className={styles.levels__item}>
        <img className={styles.levels__image}></img>
        <div className={styles.levels__wrapper}>
          <h3 className={styles.levels__title}>Вступление</h3>
          <span className={styles.levels__number}>Уровень: {id}</span>
          <p className={styles.levels__description}>{description}</p>
          <Button domType={'button'}>Кнопка</Button>
        </div>
      </li>
    )
  }
}
