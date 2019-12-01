import React, {Component} from 'react';
import Intro from '../components/Intro/Intro';

export default class Start extends Component {
  constructor(props){
    super(props);

  }

  render() {
      
    return (
      <React.Fragment>
        <Intro label='Игра началась'/>
      </React.Fragment>
    )
  }
}