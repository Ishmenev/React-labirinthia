import React from 'react';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import styles from './Objects.module.scss';
import Creator from './Creator';

const Objects = () => {
    
    return (
        <div className={styles.objects}>
            <Title>
                <h2 className={styles.objects__name}>Объекты</h2>
            </Title>
            <p className={styles.objects__option}>Выбранный элемент: <span
                className={styles.objects__element}>Дерево</span></p>
            <Creator/>
            <div className={styles.objects__save}>
                <Button domType={'button'}>Сохранить</Button>
            </div>
        </div>
    );
}

export default Objects;