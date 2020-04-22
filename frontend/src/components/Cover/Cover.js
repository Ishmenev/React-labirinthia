import React from 'react';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import styles from './Cover.module.scss';
import Input from "../UI/Input/Input";

class Cover extends React.Component {
    
    state = {
        imageLink: '',
    };
    
    changeImageLink = (paramName, value) => {
        this.setState({
            [paramName]: value
        })
    };
    
    render() {
        return (
            <div className={styles.cover}>
                <Title>
                    <h2 className={styles.cover__name}>Обложка</h2>
                </Title>
                <p className={styles.cover__description}>Вес файла не должен превышать <span
                    className={styles.cover__measure}>2мб</span>, <br/>допустимые форматы изображений - <span
                    className={styles.cover__measure}>.jps, .png.</span></p>
                <Input inputType={'subject'}
                       placeholder={'Ссылка на изображение'}
                       value={this.state.imageLink}
                       name={'imageLink'}
                       minLength={5}
                       maxLength={500}
                       onValid={this.changeImageLink}
                       onInvalid={() => {}}
                />
                <Title>
                    <h2 className={styles.cover__start}>Создать уровнь</h2>
                </Title>
                <Button domType={'button'} onClick={() => {
                    this.props.changeStep('second')
                }}>Создать</Button>
            </div>
        );
    }
    
    
    
}

export default Cover;