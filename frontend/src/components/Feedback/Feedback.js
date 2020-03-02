import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './Feedback.module.scss';
import Input from '../UI/Input/Input';
import Email from '../UI/Email/Email';
import Textarea from '../UI/Textarea/Textarea';


export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorCount: 0,
      formValid: false,
      Username: '',
      Lastname: '',
      Subject: '',
      errors: {
        username: '',
        lastname: '',
        email: ''
      }
    }
  }

  onValid = (name, value) => {
    let errors = this.state.errors;
    switch(name) {
      case 'Username': 
        errors.username = '';
        break
      case 'Lastname': 
        errors.lastname = '';
        break
      case 'email':
        errors.email = ''
        break
      default:
        break
    }
    this.setState(() => {
      return {
        [name]: value,
        errors,
        errorCount: this.countErrors(this.state.errors),
        formValid: this.validateForm({[name]: value})
      }      
    })
  }

  onInvalid = (name, value) => {
    let errors = this.state.errors;

    switch(name) {
      case 'Username': 
        errors.username = 'ERROR'
        break
      case 'Lastname': 
        errors.lastname = 'ERROR';
        break
      case 'email':
        errors.email = 'ERROR';
        break
      default:
        break
    }
    this.setState(() => {
      return {
        [name]: value,
        errors,
        errorCount: this.countErrors(this.state.errors),
        formValid: this.validateForm({[name]: value})
      }
    })
  }

  sendData = (e) => {
    e.preventDefault();
    if(!this.state.formValid) {
      console.log('FORM IS INVALID', this.state)
    } else {
      console.log('FORM IS VALID', this.state)
    }
  }

  validateForm = (data) => {
      let valid = null;

      Object.values(data).forEach(
        (val) => val.length > 0 && (valid = true)
      );
      return valid;
  }

  countErrors = (errors) => {
    let count = 0;
    Object.values(errors).forEach(
      (val) => val === 'ERROR' && (count = count+1)
    );
    return count;
  }



  render() {


    return (
      <div className={styles.feedback}>
        <Container>
          <Title>
            <h2 className={styles.feedback__name}>Связаться</h2>
          </Title>
          <form id='form' onSubmit={this.sendData} action='get'>
            <Row>
              <Col sm={12} md={6}>
                <Input
                  onValid={this.onValid}
                  onInvalid={this.onInvalid}
                  value={this.state.value}
                  name='Username'/>
              </Col>
              <Col sm={12} md={6}>
                <Input 
                  onValid={this.onValid}
                  onInvalid={this.onInvalid}
                  value={this.state.value}
                  name='Lastname'/>
              </Col>
              <Col sm={12} md={6}>
                <Email
                  onValid={this.onValid}
                  onInvalid={this.onInvalid}
                  value={this.state.value}/>
              </Col>
              <Col sm={12} md={6}>
                <Input
                  onValid={this.onValid}
                  onInvalid={this.onInvalid}
                  value={this.state.value}
                  name='Subject'/>
              </Col>
              <Col lg={12}>
                <Textarea
                  onValid={this.onValid}
                  onInvalid={this.onInvalid}
                  value={this.state.value}
                  name='Textarea'/>
              </Col>
              <Col lg={12}>
                <button className={styles.feedback__button}>Отправить</button>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    )

  }
}


