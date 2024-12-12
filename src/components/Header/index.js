import styles from './Header.module.css';
import logo from '../../assets/mytasks-logo.png';

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="MyTasks Logo" />
        </header>
    );
}

export default Header;
