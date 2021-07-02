import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import { getFavourites } from '../components/services/FavouriteService';
import Output from '../components/Output';
import Loading from '../components/Loading';
function FavouritesList() {
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const {pathname} = useLocation();
    useEffect(() => {
        const hey = async () => {
            const res = await getFavourites();
            // console.log(res)
            setFavouriteMovies(res);
            // console.log(favouriteMovies);
            setLoading(false);
        }
        hey();
    }, [pathname.includes('favourites')]);

    return (
        <React.Fragment>
            {loading ? <Loading /> : <Output favouriteMovies={favouriteMovies} />}
        </React.Fragment>
    )
}

export default FavouritesList
