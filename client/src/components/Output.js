import React, { useContext, useEffect, useState } from 'react';
// import { MovieContext } from './MovieContext';
import MovieCard from './MovieCard';

import Pagination from './Pagination';
import { useLocation } from "react-router-dom";
import styles from '../styles/MovieCard.module.css';
import GenreFilters from './GenreFilters';


const Output = (props) => {
    // const { movies, loading } = useContext(MovieContext);
    const [currentMovies, setCurrentMovies] = useState([]);
    const [similar, setSimilar] = useState(['']);
    const [genreTitle, setGenreTitle] = useState('');
    let location = useLocation();
    const path = location.pathname;
    // console.log("kanye", props);
    useEffect(() => {
        if (props.length < 2) {
            return;
        }
        const path = location.pathname;
        // console.log("kanye", props);
        if ((path.includes("person"))) {

            setSimilar("person");
            if (props.personCredits !== undefined) {
                // console.log("credit", props.personCredits);
                // console.log("credit", props.personCredits.cast);
                setCurrentMovies(props.personCredits.cast);
            }
        }

        if ((path.includes("search"))) {
            setSimilar("search");

            setCurrentMovies(props.searchList);
            const enterString = location.pathname;
            let regexStr = enterString.match(/[a-z]+|[^a-z]+/gi);
            setGenreTitle(`Search Results: '${regexStr[3]}' `);
            document.title = genreTitle;
        }

        if ((path.includes("genre"))) {

            setSimilar("genre");
            const enterString = location.pathname;
            let regexStr = enterString.match(/[a-z]+|[^a-z]+/gi);
            setGenreTitle(`${regexStr[3]} Films`);
            document.title = genreTitle;
            setCurrentMovies(props.genreList);
        }
        if ((path.includes("movie"))) {
            setSimilar("movie");


            if (props.recomendedMovies !== undefined) {
                setCurrentMovies(props.recomendedMovies);
            }

        }
        if (path.includes("discover")) {
            setSimilar("discover");
            setCurrentMovies(props.discoverList);

        }
        if (path.includes("favourites")) {
            setSimilar("favourites");
            if (props.favouriteMovies !== undefined) {
                setCurrentMovies(props.favouriteMovies.favourites);
                // console.log("kanye3", props.favouriteMovies.favourites);
            }

        }

    }, [props])

    const removeSlash = movieName => {
        const finalString = movieName.match(/[a-z]+|[^a-z]+/gi);
        return finalString[3];
    }

    if (currentMovies !== undefined && currentMovies.length) {
        return (
            <div className={styles.movieWrapper}>
                <div className={styles.movieCategory}>
                    {similar === "movie" ? <h1>Reccomended Films</h1>
                        : similar === "person" ? <h1>Has starred in</h1>
                            : similar === "genre" ? <GenreFilters changeValue={props.changeValue} title={genreTitle} />
                                : similar === "favourites" ? <h1>Favourites</h1>
                                    : similar === "search" ? <h1>{genreTitle}</h1>
                                        : <h1>{`${removeSlash(location.pathname)} Films`}</h1>
                    }


                </div>
                {/* {hey.includes('favourites') ? <div className={styles.moviesContainerAlt}> : <div className={styles.moviesContainer}>} */}
                <div className={path.includes('favourites') ? styles.moviesContainerAlt : styles.moviesContainer}>
                    {/* <div className={styles.moviesContainer}> */}
                    {currentMovies !== undefined &&
                        currentMovies.map((c, index) => (
                            <MovieCard
                                title={c.title}
                                poster={c.poster_path}
                                vote_average={c.vote_average}
                                id={c.id}
                                movieId={c.movieId}
                                key={index}
                            />
                        ))
                    }

                </div>
                {path.includes('favourites') ?
                    null : <Pagination /> 
                }
            </div>

        );
    }
    else {
        return (
            null
        );
    }
}

export default Output;
