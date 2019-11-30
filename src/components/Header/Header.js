import React, { useState } from 'react';
import { 
  Navbar, 
  Container, 
  NavbarToggler, 
  Collapse,
  Nav
} from 'reactstrap';
import styles from './Header.module.scss';

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);  
        

  return (
    <div>
      <Navbar className={styles.navbar} expand='lg' >
        <Container>
          <a className={styles.navbar__brand} href='/'><span className={styles.navbar__logo}>labirinthia.ru</span></a>
          <NavbarToggler onClick={toggle}>
            <span className={styles.navbar_toggler_icon}></span>
          </NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
              <Nav className={styles.navbar_nav} navbar>
                <li>
                  <a className={`${styles.navbar__option} ${styles.navbar__option_active}`} href='./play.html'>Играть</a>
                </li>
                <li>
                  <a className={styles.navbar__option} href='./creativity.html'>Создать уровень</a>
                </li>
                <li>
                  <a className={styles.navbar__option} href='./account.html'>Кабинет</a>
                </li>
              </Nav>
              <div className={styles.navbar__login}>
                <a href='#' className={`${styles.navbar__private} ${styles.navbar__private_display}`}>Личный кабинет</a>
              </div>
            </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;