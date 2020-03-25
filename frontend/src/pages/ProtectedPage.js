import React from 'react';
import Intro from '../components/Intro/Intro';
import PrivateInfo from '../components/PrivateInfo/PrivateInfo';
import { Container } from 'reactstrap';

const ProtectedPage = () => {

  return (
    <React.Fragment>
      <Intro introType={'local'} label='Доступ на страницу ограничен'/>
      <Container>
        <PrivateInfo/>
      </Container>
    </React.Fragment>
  )
}

export default ProtectedPage;