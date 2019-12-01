import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link className={styles.navbar__brand} to='/'><span className={styles.navbar__logo}>labirinthia.ru</span></Link>
          <NavbarToggler onClick={toggle}>
            <span className={styles.navbar_toggler_icon}></span>
          </NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
              <Nav className={styles.navbar_nav} navbar>
                <li>
                  <Link className={`${styles.navbar__option} ${styles.navbar__option_active}`} to='./games'>Играть</Link>
                </li>
                <li>
                  <Link className={styles.navbar__option} to='./creativity'>Создать уровень</Link>
                </li>
                <li>
                  <Link className={styles.navbar__option} to='./start'>Играть</Link>
                </li>
              </Nav>
              <div className={styles.navbar__login}>
                <Link to='/account' className={`${styles.navbar__private} ${styles.navbar__private_display}`}>Личный кабинет</Link>
              </div>
            </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;