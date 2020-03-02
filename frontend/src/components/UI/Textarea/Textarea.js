import React, { Component } from 'react';
import styles from './Textarea.module.scss';

export default class Textarea extends Component {
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

    if(value.length < 8) {
      this.setState({
        errorText: 'This field should included at least 8 characters...'
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
        <textarea
          type='text'
          rows='5'
          placeholder={this.props.name}
          onChange={(e) => this.passData(e)}
          className={styles.feedback__textarea}/>
        <p>{this.state.errorText.length > 0 && <span className={styles.feedback__error}>{this.state.errorText}</span>}</p>
      </div>
    ) 
  }
}
