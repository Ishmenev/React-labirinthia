import React, {Component} from 'react';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import styles from './Cover.module.scss';

export default class Cover extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className={styles.cover}>
        <Title>
          <h2 className={styles.cover__name}>Обложка</h2>
        </Title>
        <p className={styles.cover__description}>Вес файла не должен превышать <span className={styles.cover__measure}>2мб</span>, <br/>допустимые форматы изображений - <span className={styles.cover__measure}>.jps, .png.</span></p>
        <Button domType={'button'}>Загрузить</Button>
      </div>
    );
  }
}