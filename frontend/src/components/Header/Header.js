import React, { Component } from 'react';
import { Link, NavLink, Redirect, Route } from 'react-router-dom';
import {
  Navbar,
  Container,
  NavbarToggler,
  Collapse,
  Nav
} from 'reactstrap';

import Modal from '../Modals/Modal/Modal';
import { connect } from 'react-redux';
import styles from './Header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      authModalStatus: false,
      nameModal: null,
      isLogin: false
    }
  }


  openModal = () => {
    this.setState(state => {
      return {
        authModalStatus: !state.authModalStatus
      }
    })
  }
  selectModal = name => {
    this.setState(() => {
      return {
        nameModal: name
      }
    })
  }
  toggle = () => {
    this.setState(state => {
      return {
        isOpen: !state.isOpen
      }
    })
  }

  render() {
    let content = null;
    let toggleClass = `${styles.navbar_toggler}`;
    const { isAuth } = this.props;
    const { isOpen, authModalStatus, nameModal } = this.state;
    console.log(nameModal);
    if (isOpen) {
      toggleClass += ` ${styles.active}`
    }

    if (!isAuth) {
      content = (
        <div>
          <button type="button"
            onClick={() => {
              this.openModal();
              this.selectModal('auth');
            }}
            className={`${styles.navbar__private} ${styles.navbar__private_display}`}>
            Авторизация
          </button>
          <div>
            {authModalStatus
              && <Modal closeModal={this.openModal}
                nameModal={nameModal} />}
          </div>
        </div>
      )
    }else {
      content = (
        <div>
          <Link to={'/account/'}
            className={`${styles.navbar__private} ${styles.navbar__private_display}`}>
            Иван K.
          </Link>
        </div>
      )
    }

    return (
      <div>
        <Navbar className={styles.navbar} expand='lg' >
          <Container>
            <Link className={styles.navbar__brand} to='/'><span className={styles.navbar__logo}>labirinthia.ru</span></Link>
            <button type="button" className={toggleClass} aria-label="Toggle navigation" onClick={this.toggle}>
              <span className={styles.navbar_toggler_bar}></span>
            </button>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className={styles.navbar_nav} navbar>
                <li>
                  <NavLink className={styles.navbar__option}
                    activeClassName={styles.navbar__option_active}
                    to='/games/'>
                    Играть
                    </NavLink>
                </li>
                <li>
                  <NavLink className={styles.navbar__option}
                    activeClassName={styles.navbar__option_active}
                    to='/creativity/'>
                    Создать уровень
                    </NavLink>
                </li>
                <li>
                  <NavLink className={styles.navbar__option}
                    activeClassName={styles.navbar__option_active}
                    to='/account/'>
                    Кабинет
                    </NavLink>
                </li>
              </Nav>
              <div className={styles.navbar__login}>
                {content}
              </div>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.user.isAuth
  }
}
export default connect(mapStateToProps)(Header)

// if (!this.state.authClosed && !this.state.authError) {
//   content = (
//     <div>
//       <Link to={{ pathname: this.props.location.pathname, search: '?login=true' }}
//         className={`${styles.navbar__private} ${styles.navbar__private_display}`}>
//         Личный кабинет
//           </Link>
//       <div>
//         {params.get('login')
//           && <Auth onClose={this.modalClose}
//             onRedirect={this.modalRedirect}
//             onError={this.modalError} />}
//       </div>
//     </div>
//   )
// } else if (!this.state.authClosed && this.state.authError) {
//   content = (
//     <div>
//       <Link to={{ pathname: this.props.location.pathname, search: '?login=true' }}
//         // Перед повторной проверкой возвращает СТЕЙТ с ошибкой в изначальное состояние
//         onClick={this.modalError}
//         className={`${styles.navbar__private} ${styles.navbar__private_display}`}>
//         Личный кабинет
//           </Link>
//       <div>
//         <Redirect to={{ pathname: '/error/' }} />
//         {params.get('login')
//           && <Auth onClose={this.modalClose}
//             onRedirect={this.modalRedirect}
//             onError={this.modalError} />}
//       </div>
//     </div>
//   )
// } else if (this.state.authClosed) {
//   content = (
//     <div>
//       <Link to={{ pathname: this.props.location.pathname, search: '?logout=true' }}
//         className={`${styles.navbar__private} ${styles.navbar__private_display}`}>
//         Выйти из кабинета
//           </Link>
//       <div>
//         <Redirect to={{ pathname: this.props.location.pathname }} />
//         {params.get('logout')
//           && <Logout
//             onClose={this.modalClose}
//             onRedirect={this.modalRedirect} />}
//       </div>
//     </div>
//   )
// }