import React, { useState } from 'react';
import NavBar from './NavBar';
import NavSearch from './NavSearch';
// import styles from '../styles/navBar.module.css';
// import styles from '../../NavBar.module.css'
import styles from '../../styles/navBar.module.css';
const NavMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const showMenuB = () => {
        setShowMenu(!showMenu);
    }
    return (
        <div className={styles.navMenu}>
            <a href="#" className={styles.toggleButton} onClick={showMenuB}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </a>
            <NavBar showMenu={showMenu} />
            <NavSearch />
        </div>
    )
}

export default NavMenu
