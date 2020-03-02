import React, { Component } from 'react';
import styles from './Email.module.scss';

export default class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: ''
    }
  }

  passData = (e) => {
    const {name, value} = e.target;
    const errorText = this.state.errorText

    if(!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState({
        errorText: 'Email is not valid'
      })
      this.props.onInvalid(name, errorText)
    } else {
      this.setState({
        errorText: ''
      })
      this.props.onValid(name, value)
    }    
  }


  render() {

    return(
      <div>
        <input 
          type='text'
          name='email'
          placeholder='Email'
          onChange={(e) => this.passData(e)}
          className={styles.feedback__email}/>
        <p>{this.state.errorText.length > 0 && <span className={styles.feedback__error}>{this.state.errorText}</span>}</p>
      </div>
    ) 
  }
}
