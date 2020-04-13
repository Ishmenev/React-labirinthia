import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import styles from './PrivateInfo.module.scss';
import {Link} from 'react-router-dom';

const PrivateInfo = () => {

  return (
    <div className={styles.private}>
      <Container>
        <Row>
          <Col lg={12}>
            <Title subClass={styles.private__title}>
              <p className={styles.private__name}>Данная страница доступна только авторизованным пользователям.</p>
              <p className={styles.private__name}>Вы можете авторизоваться <Link to={'/?login=true'}>по ссылке</Link>.</p>
            </Title>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PrivateInfo;
