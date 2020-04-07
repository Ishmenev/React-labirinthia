import React from 'react';
import styles from './Level.module.scss';
import Button from '../UI/Button/Button';
import img from './img/level-choice_1.jpg';

const Level = ({number, description}) => {

  return (
    <li className={styles.item}>
      <div className={styles.item__image}>
        <img src={img} className={styles.image} alt='pic.Level'></img>
      </div>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Вступление</h3>
        <span className={styles.number}>Уровень: {number}</span>
        <p className={styles.description}>{description}</p>
        <Button domType={'simple'}>Начать</Button>
      </div>
    </li>
  )

}

export default Level;
