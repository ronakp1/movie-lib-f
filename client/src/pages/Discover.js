import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { getDiscoverCategories } from '../apicalls/Connect';
import { useParams, useHistory, useLocation, Link } from "react-router-dom";
import Output from '../components/Output';
import Loading from '../components/Loading';
import { MovieContext } from '../components/services/MovieContext';

const Discover = () => {
    const { pageNumber, setPageNumber } = useContext(MovieContext);

    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);

    const linkRef = useRef('');
    const { name } = useParams();
    const { search } = useLocation();

    const searchParams = new URLSearchParams(search);
    let pageNumb = searchParams.get('page');
    // console.log("IDis", name, pageNumb, search);

    if (pageNumb === undefined || pageNumb === null) {
        pageNumb = 1;
    }

    if (name === '' || name === undefined) {
        name = "popular";
    }
    setPageNumber(pageNumb);

    useEffect(() => {
        let isUnmount = false;
        pageNumb = pageNumber;

        if (name !== linkRef.current) {
            pageNumb = 1;
        }
        const fetchData = async () => {
            linkRef.current = name;
            // console.log("linkref", linkRef);

            if (!isUnmount) {
                // console.log("name", name);
                const result = await getDiscoverCategories(name, pageNumb);
                setMovieList(result);
                setLoading(false);
            }
        }
        fetchData();
        return () => {
            isUnmount = true;
        }
    }, [name, pageNumb, pageNumber])

    return (
        <React.Fragment>
            {loading ? <Loading /> : <Output discoverList={movieList} />}
        </React.Fragment>

    )
}

export default Discover
