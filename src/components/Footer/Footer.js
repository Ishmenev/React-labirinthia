import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';

import styles from './Footer.module.scss';

export default class Footer extends Component {
  constructor(props){
      super(props);
  }


  render() {

    return (
      <div className={styles.footer}>
        <Container>
          <div className={styles.authors}>
            <span>Created by <span className={styles.authors__name}>Egor Dyachenko</span> & <span className={styles.authors__name}>Evgeny Ishmenev</span></span>
          </div>
        </Container>
      </div>
    )
  }
}