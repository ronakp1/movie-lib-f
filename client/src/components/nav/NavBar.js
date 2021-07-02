import React, { useState, useEffect, useContext } from 'react';
import NavBarLinks from './NavBarLinks';
import styles from '../../styles/navBar.module.css';
import { getGenres } from '../../apicalls/Connect';
import upcoming from '../../svg/upcoming.svg';
import popular from '../../svg/popularity.svg';
import topRated from '../../svg/bar-chart.svg';
import { Link, useHistory } from "react-router-dom";
import AuthService, { isAuth, logout } from '../services/AuthService';
import { AuthContext } from '../services/AuthContext';
import FavouritesList from '../../pages/FavouritesList';
import { react } from '@babel/types';

const NavBar = ({ showMenu }) => {
    const [genreList, setGenreList] = useState([]);
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);
    // const authContext = useContext(AuthContext);
    let history = useHistory();

    const logoutHandler = async (e) => {
        const res = await logout();
        if (res.success) {
            setUser(res.user);
            setIsAuthenticated(false);
            history.push('/');
        }
    }
    useEffect(() => {
        let isUnmount = false;

        const getList = async () => {


            if (!isUnmount) {
                const result = await getGenres();
                // console.log("response", result)
                setGenreList(result);
            }
        }
        getList();
        return () => {
            isUnmount = true;
        }
    }, [])


    let completeClass = showMenu ? styles.hamburger : '';
    return (
        <div className={styles.navBar}>
            <Link className={` ${styles.dropbtn}`} to="/">Movie Library</Link>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Discover</button>
                <div className={`${styles.dropdownContent} ${styles.discoverContent} ${completeClass} `}>
                    <div className={`${styles.groupContent} ${styles.discoverContent}`}>
                        <NavBarLinks itemValue="popular" pic={popular} />
                        <NavBarLinks itemValue="top rated" pic={topRated} />
                        <NavBarLinks itemValue="upcoming" pic={upcoming} />
                    </div>
                </div>
            </div>

            <div className={styles.dropdown}>
                <a className={styles.dropbtn}>Genres</a>
                <div className={`${styles.dropdownContent} ${styles.genreContent} ${completeClass}`}>
                    <div className={`${styles.groupContent} ${styles.genreHam}`}>
                        {/* {genreList.length > 0 &&
                            genreList.map(genre =>
                                <NavBarLinks itemValue={genre.name} id={genre.id} key={genre.id} />)
                        } */}
                        {genreList &&
                            genreList.map(genre =>
                                <NavBarLinks itemValue={genre.name} id={genre.id} key={genre.id} />)
                        }
                    </div>
                </div>
            </div>
            {isAuthenticated ?
                // <React.Fragment>
                 <div className={completeClass}> 
                    <Link className={` ${styles.dropbtn} ${styles.authButtons} `} to="/favourites">Favourites</Link>
                    <button type="button" className={` ${styles.dropbtn} ${styles.authButtons} `} onClick={logoutHandler} >Logout</button>
                  </div> 
                //  </React.Fragment>
                :
                <React.Fragment>
                    <Link className={` ${styles.dropbtn}`} to="/signup">Signup</Link>
                    <Link className={` ${styles.dropbtn}`} to="/login">Login</Link>
                </React.Fragment>
            }

        </div>
    );

}

export default NavBar;