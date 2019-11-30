import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import Level from '../Level/Level';
import styles from './Levels.module.scss';

export default class Levels extends Component {
  constructor(props){
    super(props);
  }


  render() {

    return (
      <div className={`${styles.levels} ${styles.levels_display}`}>
        <Container>
          <Title subClass={styles.info__title}>
            <h2 className={styles.levels__name}>Поехали!</h2>
          </Title>
          <ul className={styles.levels__list}>
            <Row>
              <Col md={6} lg={4}>
                <Level>
                  {this.props.children}
                </Level>
              </Col>
              <Col md={6} lg={4}>
                <Level>
                  {this.props.children}
                </Level>
              </Col>
              <Col md={6} lg={4}>
                <Level>
                  {this.props.children}
                </Level>
              </Col>
            </Row>
          </ul>
          <p className={styles.levels__options}>Самые популярные уровни, больше уровней вы можете найти, кликнув по кнопке ниже</p>
          <Button domType={'button'}>Кнопка</Button>
        </Container>
      </div>
    );
  }
}