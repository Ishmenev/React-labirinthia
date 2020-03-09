import React, { Component } from 'react';
import styles from './Input.module.scss';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        errorMessage: 'Введите правильный username',
        valid: false,
        touched: false,
      },
      lastname: {
        errorMessage: 'Введите правильный lastname',
        valid: false,
        touched: false,
      },
      subject: {
        errorMessage: 'Введите правильный subject',
        valid: false,
        touched: false,
      }

    }
  }

  passData = (e) => {
    const {name, value} = e.target;

    if(value.length < 6) {
      this.setState({
        [name]: {
          touched: true,
          valid: false
        }
      })
      this.props.onInvalid(name, value)
    }

    if(value === '') {
      this.setState({
        [name]: {
          touched: true,
          valid: true
        }
      })
      this.props.onInvalid(name, value)
    } 

    if(value.length >= 6) {
      this.setState({
        [name]: {
          touched: true,
          valid: true
        }
      })
      this.props.onValid(name, value)
    }
  }


  render() {
    let content = null;
    let {nameType} = this.props;

    if (nameType === 'username') {
      content =       
        <div>
          <input
            type='text'
            name='username'
            value={this.props.value}
            onChange={(e) => this.passData(e)}
            placeholder='Имя'
            className={styles.feedback__input}
          />
          {
            !this.state.username.valid && this.state.username.touched
              ? <span className={styles.feedback__error}>{'Введите верное значение'}</span>
              : null
          }
          
        </div>

    } 
    else if (nameType === 'lastname') {
      content =       
      <div>
        <input
          type='text'
          name={nameType}
          value={this.props.value}
          onChange={(e) => this.passData(e)}
          placeholder='Фамилия'
          className={styles.feedback__input}
        />

        {
          !this.state.lastname.valid && this.state.lastname.touched
            ? <span className={styles.feedback__error}>{'Введите верное значение'}</span>
            : null
        }
      </div>
    }
    else if (nameType === 'subject') {
      content =       
      <div>
        <input
          type='text'
          name={nameType}
          value={this.props.value}
          onChange={(e) => this.passData(e)}
          placeholder='Тема сообщения'
          className={styles.feedback__input}
        />

        {
          !this.state.subject.valid && this.state.subject.touched
            ? <span className={styles.feedback__error}>{'Введите верное значение'}</span>
            : null
        }
      </div>
    }


    return(
      content
    ) 
  }
}
