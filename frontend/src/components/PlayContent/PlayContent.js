import React, { Component } from 'react';
import Title from '../UI/Title/Title';
import Game from '../Game/Game';
import {Container, Row, Col} from 'reactstrap';
import styles from './PlayContent.module.scss';

export default class PlayContent extends Component {
    constructor(props){
        super(props);
    }


    render() {

        return (
            <div className={styles.block}>
                <Container>
                   <Row>
                       <Col md={12}>
                           <Title>
                               <h2 className={styles.title}>Уровень 1: Вступление</h2>
                           </Title>
                       </Col>
                   </Row>
                    <Row>
                        <Col md={7}>
                            <p className={styles.description}>Супер пупер уровень нереально крутое интерактивное. Супер пупер уровень нереально крутое интерактивное описание.
                            </p>
                        </Col>
                        <Col md={1}>
                        
                        </Col>
                        <Col md={4}>
                            <p className={styles.info}>Управление: <b>W, A, S, D</b>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Game/>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}