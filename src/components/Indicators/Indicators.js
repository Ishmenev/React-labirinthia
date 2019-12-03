import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Indicators.module.scss';

export default class Indicators extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className={styles.indicators}>
        <Row>
          <Col>
            <Row>
              <Col md={10} lg={7} xl={5}>
                <p className={styles.indicators__description}>Высота уровня,<br/><span className={styles.indicators__measure}> в количестве клеток:</span></p>
              </Col>
              <Col md={10} lg={8} xl={6}>
              <input type='text' className={styles.indicators__input} placeholder='Высота'></input>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col md={10} lg={7} xl={5}>
                <p className={styles.indicators__description}>Ширина уровня,<br/><span className={styles.indicators__measure}> в количестве клеток:</span></p>
              </Col>
              <Col md={10} lg={8} xl={6}>
              <input type='text' className={styles.indicators__input} placeholder='Ширина'></input>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}