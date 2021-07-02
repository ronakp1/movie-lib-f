import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from '../../styles/navBar.module.css';
import Output from '../Output';

import { FaSearch } from 'react-icons/fa';
const NavSearch = () => {
    const [searchState, setSearchState] = useState('');

    const handleChange = event => {
        // console.log(event.target.value);
        setSearchState(event.target.value);
        // console.log(searchState);
    }

    const handleKeyPress = (e) => {
        if (e.target.charCode === 13) {
            // console.log("pressed"); 
            setStat(searchState);
        }
    }

    const setStat = (val) => {
        // console.log("searchstate", searchState);
        <Output searchString={val} />
        setSearchState('');

    }

    return (
        // <React.Fragment>
        //     {loading ? <p>loadinghere</p> : <Output searchList={movieList} />}
        // </React.Fragment>
        <div className={styles.navSearch}>
            <input className={styles.inputSearch} type="text" value={searchState} onChange={handleChange} onKeyPress={(e) => handleKeyPress(e)} placeholder="Search for a movie..." />
            {searchState !== '' && <Link className={styles.searchRef} to={`/search/${searchState}`} onClick={() => setStat(searchState)} >
                <FaSearch className={styles.searchIcon} />
            </Link>}
        </div>

    );
}

export default NavSearch;
