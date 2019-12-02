import React, { Component } from 'react';
import styles from './Level.module.scss';
import Button from '../UI/Button/Button';

export default class Level extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <li className={styles.levels__item}>
        <img className={styles.levels__image}></img>
        <div className={styles.levels__wrapper}>
          <h3 className={styles.levels__title}>Вступление</h3>
          <span className={styles.levels__number}>Уровень: {this.props.number}</span>
          <p className={styles.levels__description}>{this.props.description}</p>
          <Button domType={'link'}>Начать</Button>
        </div>
      </li>
    )
  }
}
