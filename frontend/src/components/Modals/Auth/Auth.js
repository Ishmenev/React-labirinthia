import React, {Component} from 'react';
import styles from './Auth.module.scss';
import Title from '../../UI/Title/Title';
import Button from '../../UI/Button/Button';

export default class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpened: true
    }
  }

  modalClose = () => {
    this.setState({isModalOpened: !this.state.isModalOpened})
  }

  render() {
    let content = null;

    if(this.state.isModalOpened) {
      content = (
        <div className={styles.auth}>
        <div className={styles.auth__wrapper}>
          <button onClick={this.modalClose} className={styles.auth__close}></button>
          <Title>
            <h2 className={styles.auth__name}>Авторизоваться</h2>
          </Title>
          <p className={styles.auth__announce}>Вы можете авторизоваться через одну из социальных сетей</p>
          <ul className={styles.auth__socials}>
            <li className={`${styles.auth__option} ${styles.auth__option_vc}`}>
              <a className={`${styles.auth__link} ${styles.auth__link_vc}`} href='#'>Вконтакте</a>
            </li>
            <li className={`${styles.auth__option} ${styles.auth__option_ok}`}>
              <a className={`${styles.auth__link} ${styles.auth__link_ok}`} href='#'>Одноклассники</a>
            </li>
            <li className={`${styles.auth__option} ${styles.auth__option_fb}`}>
              <a className={`${styles.auth__link} ${styles.auth__link_fb}`} href='#'>Facebook</a>
            </li>
          </ul>
        </div>        
      </div>
      )
    } else {
      content = null;
    }

    return (
      content
    )  
  }

}
