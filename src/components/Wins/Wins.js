import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './Wins.module.scss';

export default class Wins extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.wins}>
        <Container>
          <Title>
            <h2 className={styles.wins__name}>Достижения</h2>
          </Title>
          <p className={styles.wins__description}>Кликните по замочку чтобы узнать как открыть новые достижения!</p>
          <ul className={styles.wins__list}>
            <li className={styles.wins__option}>
              <a href='#' className={styles.wins__link}></a>
            </li>
            <li className={styles.wins__option}>
              <a href='#' className={styles.wins__link}></a>
            </li>
            <li className={styles.wins__option}>
              <a href='#' className={styles.wins__link}></a>
            </li>
          </ul>
        </Container>
      </div>
    )
  }
}
