import React from 'react';
// import Logo from '../../../assets/images/logo.png';
import Logo2 from './Logo';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <a className={styles.logo} href='#sasda'>
        {/* <img src={Logo} alt='logo' /> */}
        <Logo2 />
      </a>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
