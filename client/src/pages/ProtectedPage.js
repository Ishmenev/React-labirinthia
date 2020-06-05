import React from 'react';
import Intro from '../components/Intro/Intro';
import TechTemplate from '../components/TechTemplate/TechTemplate';

const ProtectedPage = () => {

  return (
    <React.Fragment>
      <Intro introType={'local'} label='Нет доступа'/>
      <TechTemplate>
        <p>Данная страница доступна только авторизованным пользователям.</p>
        <p>Пожалуйста, авторизуйтесь и зайдите в ваш кабинет.</p>
      </TechTemplate>
    </React.Fragment>
  )
}

export default ProtectedPage;