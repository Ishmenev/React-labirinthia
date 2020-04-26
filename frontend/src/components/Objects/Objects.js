import React from 'react';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import styles from './Objects.module.scss';
import Creator from './Creator';

const Objects = ({levelData}) => {
    
    return (
        <div className={styles.objects}>
            <Title>
                <h2 className={styles.objects__name}>Объекты</h2>
            </Title>
           
            <Creator data={levelData}/>
            <div className={styles.objects__save}>
                <Button domType={'button'}>Сохранить</Button>
            </div>
        </div>
    );
}

export default Objects;