import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import styles from './Intro.module.scss';

export default class Intro extends Component {
  constructor(props){
    super(props);
  }


  render() {

    return (
      <div className={styles.intro}>
        <Container>
          <Title subClass={styles.intro__title}>
              <h1 class={styles.intro__name}>Лабиринтия</h1>
          </Title>
          <div className={styles.intro__options}>
            <Row>
              <Col xs={6}>
                <div className={styles.intro__choice}>
                  <p className={styles.intro__text}>Проходи уровни, получай призы и прочий lorem</p>
                  <Button domType={'button'}>Кнопка</Button>
                </div>
              </Col>
              <Col xs={6}>
                <div className={styles.intro__choice}>
                    <p className={styles.intro__text}>Создай свой собственный уровень и нагни их всех!</p>
                    <Button domType={'button'}>Кнопка</Button>
                </div>
              </Col>
            </Row>
          </div>
          <span className={styles.intro__compass}></span>
        </Container>
      </div>
    );
  }
}