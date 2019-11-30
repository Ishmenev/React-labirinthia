import React, {Component} from 'react';
import Intro from '../components/Intro/Intro';
import Info from '../components/Info/Info';
import Levels from '../components/Levels/Levels';
import News from '../components/News/News';
import Feedback from '../components/Feedback/Feedback';

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
          
    }
  }

  render() {
      
    return (
      <React.Fragment>
        <Intro/>
        <Info/>
        <Levels/>
        <News/>
        <Feedback/>
      </React.Fragment>
    )
  }
}