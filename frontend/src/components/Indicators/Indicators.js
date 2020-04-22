import React from 'react';
import {Row, Col} from 'reactstrap';
import styles from './Indicators.module.scss';
import Title from '../UI/Title/Title';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

class Indicators extends React.Component {
    
    state = {
        height: 10,
        width: 10
    };
    
    changeSize = (paramName, value) => {
        this.setState({
            [paramName]: value
        })
    };
    
    render() {
        const { height, width } = this.state;
        
        return (
            <div className={styles.indicators}>
                <Title>
                    <h2 className={styles.indicators__name}>Размеры</h2>
                    <h2 className={styles.indicators__display}>К сожалению, этот раздел доступен только с компьютера</h2>
                </Title>
                <Row>
                    <Col md={4}>
                        <p className={styles.indicators__description}>Высота уровня,<br/><span
                            className={styles.indicators__measure}> в количестве клеток, от 1 до 30:</span></p>
                    </Col>
                    <Col md={4}>
                        <Input inputType={'number'}
                               placeholder={'Высота'}
                               value={height}
                               name={'height'}
                               minNumber={1}
                               maxNumber={30}
                               onValid={this.changeSize}
                               onInvalid={() => {}}
                        />
                    </Col>
            
                </Row>
                <Row>
                    <Col md={4}>
                        <p className={styles.indicators__description}>Ширина уровня,<br/><span
                            className={styles.indicators__measure}> в количестве клеток, от 1 до 30:</span></p>
                    </Col>
                    <Col md={4}>
                        <Input
                            inputType={'number'}
                            placeholder={'Ширина'}
                            value={width}
                            name={'width'}
                            minNumber={1}
                            maxNumber={30}
                            onValid={this.changeSize}
                            onInvalid={() => {}}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
    
}

export default Indicators;