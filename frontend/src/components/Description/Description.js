import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './Description.module.scss';
import Input from "../UI/Input/Input";

export default class Description extends Component {


    render() {
        const {title, descr} = this.props.levelData;

        return (
            <div className={styles.description}>
                <Title>
                    <h2 className={styles.description__name}>Название и описание</h2>
                </Title>
                <Row>
                    <Col md={4}>
                        <p className={styles.description__description}>Название уровня,<br/><span
                            className={styles.description__measure}> от 5 до 30 символов:</span></p>
                    </Col>
                    <Col md={4}>
                        <Input
                            inputType={'subject'}
                            placeholder={'Название уровня'}
                            value={title}
                            name={'title'}
                            minLength={5}
                            maxLength={30}
                            onValid={this.props.changeLevelData}
                            onInvalid={() => {}}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <p className={styles.description__description}>Описание уровня<br/><span
                            className={styles.description__measure}> от 15 до 130 символов:</span></p>
                    </Col>
                    <Col md={4}>
                        <Input
                            inputType={'subject'}
                            placeholder={'Описание уровня'}
                            value={descr}
                            name={'descr'}
                            minLength={15}
                            maxLength={130}
                            onValid={this.props.changeLevelData}
                            onInvalid={() => {}}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}