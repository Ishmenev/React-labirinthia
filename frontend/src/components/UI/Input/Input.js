import React, { Component } from 'react';
import styles from './Input.module.scss';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: ''
    }
  }

  passData = (e) => {
    const value = e.target.value;
    const name = this.props.name;
    const errorText = this.state.errorText

    if(!value.length > 0) {
      this.setState({
        errorText: 'This field should not be empty...'
      })
      this.props.onInvalid(name, value)
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
          placeholder={this.props.name}
          onChange={(e) => this.passData(e)}
          className={styles.feedback__input}/>
        <p>{this.state.errorText.length > 0 && <span className={styles.feedback__error}>{this.state.errorText}</span>}</p>
      </div>
    ) 
  }
}
