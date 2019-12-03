import React, {Component} from 'react';
import Intro from '../components/Intro/Intro';
import Indicators from '../components/Indicators/Indicators';
import Objects from '../components/Objects/Objects';
import Cover from '../components/Cover/Cover';
import { Container } from 'reactstrap';
import Title from '../components/UI/Title/Title';
import styles from './OwnLevel.module.scss';


export default class OwnLevel extends Component {
  constructor(props){
    super(props);
  }

  render() {
      
    return (
      <React.Fragment>
        <Intro label='Создать уровень'/>
        <Container>
        <Title>
          <h2 className={styles.indicators__name}>Параметры</h2>
          <h2 className={styles.indicators__display}>К сожалению, этот раздел доступен только с компьютера</h2>
        </Title>
        <Indicators />
        <Cover />
        <Objects />

        </Container>
      </React.Fragment>

    )
  }
}