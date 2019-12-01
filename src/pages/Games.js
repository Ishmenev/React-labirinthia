import React, {Component} from 'react';
import Intro from '../components/Intro/Intro';
import Options from '../components/Options/Options';
import news from '../components/News/news-data';
import Filters from '../components/UI/Filters/Filters';
import Title from '../components/UI/Title/Title';
import styles from './Games.module.scss';
import { Container, Row, Col } from 'reactstrap';

export default class Games extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter: 'all',
      levels: news.levels
    }
  }

  filterLogic(levels, filter) {
    levels = this.state.levels;

    switch(filter) {
      case 'all': 
        return levels;
      case 'narrative':
        return levels.filter(item => item.type);
      case 'creative':
        return levels.filter(item => !item.type);
      default:
        return levels
    }
  }

  changeFilter = (filter) => {
    this.setState({filter})
  }


  render() {

    const {levels, filter} = this.state;

    const visibleLevels = this.filterLogic(levels, filter)
      
    return (
      <React.Fragment>
        <Intro label='Играть'/>
        <Container>
          <Title subclass={styles.options__title}>
            <h2 className={styles.options__name}>Уровни</h2>
          </Title>
          <Filters onFilter={this.changeFilter}/>
          <Options renderLevels={visibleLevels}/>
        </Container>
      </React.Fragment>
    )
  }
}