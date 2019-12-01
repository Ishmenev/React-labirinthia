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
              <Col lg={4}>
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
        <Button domType={'button'}>Еще уровни</Button>
      </div>
    )
}

export default Options;
