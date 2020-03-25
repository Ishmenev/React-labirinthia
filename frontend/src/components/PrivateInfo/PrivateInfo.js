import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import styles from './PrivateInfo.module.scss';

const PrivateInfo = () => {

  return (
    <div className={styles.private}>
      <Container>
        <Row>
          <Col lg={12}>
            <Title subClass={styles.private__title}>
              <h3 className={styles.private__name}>Данная страница доступна только авторизованным пользователям. Чтобы увидеть содержимое, пожалуйста, войдите в личный кабинет...</h3>
            </Title>
          </Col>
          {/* <Col lg={12}>
            <button className={styles.private__button}>
              Попытаться еще раз
            </button>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default PrivateInfo;
