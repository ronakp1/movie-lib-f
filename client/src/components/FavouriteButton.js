import React, { useEffect, useState, useRef } from 'react';
import { addFavourite, checkFavourite, removeFavourite } from './services/FavouriteService';
import styles from '../styles/movie.module.css';

const FavouriteButton = (props) => {
    const [favourited, setFavourited] = useState(false);
    // const favouritedd = useRef(false);
    const { id, poster_path, original_title, vote_average, runtime, release_date } = props.movie;
    const data = {
        movieId: id,
        movieTitle: original_title,
        release_date: release_date,
        vote_average: vote_average,
        poster_path: poster_path
    }
    useEffect(() => {
        const hey = async () => {
            const res = await checkFavourite(data);
            // console.log("check", res);

            if (res.authenticated)
                setFavourited(true)
            // favouritedd.current = true;
            else {
                setFavourited(false)
                // favouritedd.current = false;
            }
        }
        hey();
    }, [favourited]);

    const setFavourite = async () => {
        // console.log("og", original_title);

        if (favourited) {
            const res = await removeFavourite(data);
            // console.log("hey3", res);
            setFavourited(false);
        } else {
            const res = await addFavourite(data);
            // console.log("hey3", res);
            setFavourited(true);
        }
    }
    return (
        <div>
            <button  className={styles.clickables}  type="button" onClick={() => { setFavourite() }}> {favourited ? 'Remove from Favourites' : 'Add to Favourites'} </button>
        </div>
    )
}

export default FavouriteButton
