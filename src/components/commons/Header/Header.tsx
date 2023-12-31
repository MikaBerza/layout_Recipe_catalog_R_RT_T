import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link className={styles.logoLink} to='/'>
        <img className={styles.logo} src={Logo} alt='logo' />
      </Link>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
