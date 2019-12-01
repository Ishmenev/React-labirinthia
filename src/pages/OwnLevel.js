import React, {Component} from 'react';
import Intro from '../components/Intro/Intro';


export default class OwnLevel extends Component {
  constructor(props){
    super(props);

  }

  render() {
      
    return (
      <React.Fragment>
        <Intro label='Создать уровень'/>
      </React.Fragment>

    )
  }
}