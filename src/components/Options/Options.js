import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Options.module.scss';
import Level from '../Level/Level';
import Button from '../UI/Button/Button';

const Options = ({renderLevels}) => {

    return (
      <div className={styles.options}>
        <ul className={styles.options__list}>
          <Row>
            {renderLevels.map((item) => (
              <Col md={6} lg={5} xl={4}>
                <li className={styles.options__item}>
                  <Level description={item.description}
                    number={item.id}>
                    {item.id}
                  </Level>
                </li>
              </Col>
                ))}                
          </Row>
        </ul>
        <div className={styles.options__button}>
          <Button domType={'button'}>Еще уровни</Button>
        </div>
      </div>
    )
}

export default Options;
