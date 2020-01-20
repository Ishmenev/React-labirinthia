import React, {Component} from 'react';
import Slider from "react-slick";
import { Container } from 'reactstrap';
import styles from './News.module.scss';
import Title from '../UI/Title/Title';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { connect} from 'react-redux';
import store from '../../store';

class News extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    const getData = store.getState()
    const properties = getData.data.properties;

    const settings = {
      dots: true,
      infinite: false,
      speed: 0,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };

    return(
      <div className={styles.news}>
        <Title>
          <h2 className={styles.news__name}>Новости</h2>
        </Title>
        <Container>
          <Slider {...settings}>
            {this.props.properties}
          </Slider>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    properties: state.data.properties.map((item) => (
      <div key={item.id} className={styles.news__item}>
        <Title>
          <h3 className={styles.news__title}>{item.title}</h3>
        </Title>
        <p className={styles.news__text}>{item.text}</p>
        <span className={styles.news__date}>{item.date}</span>
      </div>
      ))
  }
}


export default connect(mapStateToProps)(News)