import React, { Component } from 'react';
import news from './news-data';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './News.module.scss';

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: news.properties,
      property: news.properties[0]
    }
  }

  nextProperty = () => {
    let newIndex = this.state.property.id+1;
    this.setState((state) => {      
      return {
        property: news.properties[newIndex]
      }
    })
    console.log(news.properties[newIndex])
  }

  prevProperty = () => {
    const newIndex = this.state.property.id-1;
    this.setState((state) => {
      return {
        property: news.properties[newIndex]
      }      
    })
  }

  render() {
    const {property, properties} = this.state;

    return (
      <div className={styles.news}>
        <Container>
          <Title>
            <h2 className={styles.news__name}>Новости</h2>
          </Title>
          <div className={styles.news__container}>
            <div className={styles.news__slider}>
              <div className={styles.news__wrapper} style={{
                      'transform': `translateX(-${property.id*(100/properties.length)}%)`
                    }}>
                {properties.map((item) => (
                      <div key={item.id} className={styles.news__item}>
                        <Title>
                          <h3 className={styles.news__title}>{item.title}</h3>
                        </Title>
                        <p className={styles.news__text}>{item.text}</p>
                        <span className={styles.news__date}>{item.date}</span>
                      </div>
                ))}
              </div>
            </div>
            <div className={styles.news__controls}>
              <button className={styles.news__next}
                onClick={() => this.nextProperty()}
                disabled={property.id === news.properties.length-1}
                >
              </button>
              <button className={styles.news__previous}
                onClick={() => this.prevProperty()}
                disabled={property.id === 0}
                >
              </button>
            </div>
          </div>

        </Container>
      </div>
    )
  }
}