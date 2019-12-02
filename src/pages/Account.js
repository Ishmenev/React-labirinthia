import React, {Component} from 'react';
import Intro from '../components/Intro/Intro';
import User from '../components/User/User';
import Characters from '../components/Characters/Characters';
import Wins from '../components/Wins/Wins';

export default class Account extends Component {
  constructor(props){
    super(props);

  }

  render() {
      
    return (
      <React.Fragment>
        <Intro label='Кабинет'/>
          <User />
          <Characters />
          <Wins />

      </React.Fragment>


    )
  }
}