import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Navbar, 
  Container, 
  NavbarToggler, 
  Collapse,
  Nav
} from 'reactstrap';
import Auth from '../Modals/Auth/Auth';
import styles from './Header.module.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState((state) => {
      return {
        isOpen: !state.isOpen
      }
    })
  }  
        
  render() {
    return (
      <div>
        <Navbar className={styles.navbar} expand='lg' >
          <Auth/>
          <Container>
            <Link className={styles.navbar__brand} to='/'><span className={styles.navbar__logo}>labirinthia.ru</span></Link>
            <NavbarToggler onClick={this.toggle}>
              <span className={styles.navbar_toggler_icon}></span>
            </NavbarToggler>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className={styles.navbar_nav} navbar>
                  <li>
                    <NavLink className={styles.navbar__option} activeClassName={styles.navbar__option_active} to='/games/'>Играть</NavLink>
                  </li>
                  <li>
                    <NavLink className={styles.navbar__option} activeClassName={styles.navbar__option_active} to='/creativity/'>Создать уровень</NavLink>
                  </li>
                  <li>
                    <NavLink className={styles.navbar__option} activeClassName={styles.navbar__option_active} to='/account/'>Кабинет</NavLink>
                  </li>
                </Nav>
                <div className={styles.navbar__login}>
                  <Link to='/account/' className={`${styles.navbar__private} ${styles.navbar__private_display}`}>Личный кабинет</Link>
                </div>
              </Collapse>
          </Container>
        </Navbar>
      </div>
    )  
  }
}
