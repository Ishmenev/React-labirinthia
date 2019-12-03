import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './Intro.module.scss';

export default class Intro extends Component {
  constructor(props){
    super(props);
  }


  render() {
    const subName = this.props.subName || null;


    return (
      <div className={styles.intro}>
        <Container>
          <Title subClass={styles.intro__title}>
            <h1 className={`${styles.intro__name} ${subName}`}>{this.props.label}</h1>
          </Title>
        </Container>
        {this.props.children}
      </div>
    );
  }
}