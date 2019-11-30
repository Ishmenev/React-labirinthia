import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './Feedback.module.scss';
import Button from '../UI/Button/Button';

export default class Feedback extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className={styles.feedback}>
        <Container>
          <Title>
            <h2 className={styles.feedback__name}>Связаться</h2>
          </Title>
          <form action='get'>
            <Row>
              <Col sm={12} md={6}>
                <input type='text' className={`${styles.feedback__input} ${styles.feedback__input_name}`} placeholder='Имя'></input>
              </Col>
              <Col sm={12} md={6}>
                <input type='text' className={`${styles.feedback__input} ${styles.feedback__input_lastname}`} placeholder='Фамилия'></input>
              </Col>
              <Col sm={12} md={6}>
                <input type='text' className={`${styles.feedback__input} ${styles.feedback__input_email}`} placeholder='Электронная почта'></input>
              </Col>
              <Col sm={12} md={6}>
                <input type='text' className={`${styles.feedback__input} ${styles.feedback__input_agenda}`} placeholder='Тема сообщения'></input>
              </Col>
              <Col lg={12}>
                <textarea name='feedback-text' id='feedback' cols='30' rows='5' className={styles.feedback__textarea} placeholder='Текст сообщения'></textarea>
              </Col>
              <Col lg={12}>
                <input className={styles.feedback__button} type='submit' value='Отправить'></input>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    )
  }
}