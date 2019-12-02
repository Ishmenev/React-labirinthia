import React, {Component} from 'react';
import Intro from '../components/Intro/Intro';
import Info from '../components/Info/Info';
import Levels from '../components/Levels/Levels';
import News from '../components/News/News';
import Feedback from '../components/Feedback/Feedback';
import styles from './MainPage.module.scss';

import { Row, Col } from 'reactstrap';
import Button from '../components/UI/Button/Button';

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
          
    }
  }

  render() {
      
    return (
      <React.Fragment>
        <Intro label='Лабиринтия' subName={styles.intro__name_main}>
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
        </Intro>
        <Info/>
        <Levels/>
        <News/>
        <Feedback/>
      </React.Fragment>
    )
  }
}