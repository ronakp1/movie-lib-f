import React from 'react'
import { Link } from "react-router-dom";
// import styles from '../styles/navBar.module.css';
import styles from '../../styles/navBar.module.css'
import { FaRegPlayCircle } from 'react-icons/fa';
function NavBarLinks({ itemValue, id, pic }) {
    if (itemValue === "popular" || itemValue === "top rated" || itemValue === "upcoming") {
        return (
            <Link className={styles.test1} src={pic} to={`/discover/${itemValue}`}>
                <div className={styles.iconHolder}><img src={pic} className={`${styles.navIcon} ${styles.discoverIcons} `} alt={itemValue} />
                    {itemValue}</div> 
            </Link>
        )
    }
    else {
        return (
            <Link className={styles.test1} to={`/genre/${id}${itemValue}`} key={id}>
                <div className={styles.iconHolder}>
                    <FaRegPlayCircle className={styles.navIcon} />
                    {itemValue}
                </div>

            </Link>
        )
    }
}

export default NavBarLinks;
