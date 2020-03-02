import React from 'react';
import Intro from '../components/Intro/Intro';
import Info from '../components/Info/Info';
import Levels from '../components/Levels/Levels';
import News from '../components/News/News';
import Feedback from '../components/Feedback/Feedback';

const MainPage = ({data: {news, levels}}) => {

  return (
    <React.Fragment>
      <Intro introType={'main'} label='Лабиринтия' />
      <Info/>
      <Levels/>
      <News news={news}/>
      <Feedback/>
    </React.Fragment>
  )
}

export default MainPage;