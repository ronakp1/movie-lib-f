import React, { useContext, useState, useEffect } from 'react';
import { MovieContext } from './services/MovieContext';
import { useHistory, Link, useParams, useLocation } from "react-router-dom";
import styles from '../styles/Pagination.module.css';
import { FaBackward, FaForward } from 'react-icons/fa';
const Pagination = () => {
    const { newPage, pageNumber } = useContext(MovieContext);
    let history = useHistory();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [newPage])


    return (
        <div className={styles.Pagination}>
            {pageNumber > 1 &&
                <Link className={styles.button} to={`?page=${parseInt(pageNumber) - 1}`} onClick={() => newPage("Previous")}> <FaBackward /> {`Page ${parseInt(pageNumber) - 1}`} </Link>
            }
            <Link className={styles.button} to={`?page=${parseInt(pageNumber) + 1}`} onClick={() => newPage("Next")} > {`Page ${parseInt(pageNumber) + 1}`} <FaForward className={styles.forwardIcon} /> </Link>
        </div>
    )
}

export default Pagination;