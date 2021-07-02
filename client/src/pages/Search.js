import React, { useContext, useState, useEffect, useRef } from 'react';
import Output from '../components/Output';
import { getSearch } from '../apicalls/Connect';
import { useParams, useLocation } from "react-router-dom";
import { MovieContext } from '../components/services/MovieContext';

function Search(props) {
    const [searchState, setSearchState] = useState('');
    const [searchNow, setSearchNow] = useState(false);
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { pageNumber, setPageNumber, searchPagination, setSearchPagination } = useContext(MovieContext);
    const [oldSearch, setOldSearch] = useState('');
    const refSearch = useRef('');
    // console.log("searchin3", props);


    const { query } = useParams();

    let location = useLocation();
    const search = location.search;
    // console.log("loc11", search);
    const searchParams = new URLSearchParams(search);
    // console.log("searchp", searchParams);
    let pageNumb = searchParams.get('page');
    // console.log("IDis", query, pageNumb);

    if (pageNumb === undefined || pageNumb === null) {
        pageNumb = 1;
    }

    setPageNumber(pageNumb);
    useEffect(() => {
        const fetchData = async () => {
            pageNumb = pageNumber;
            if (query !== refSearch.current) {
                pageNumb = 1;
            }
            refSearch.current = query;
            setLoading(true);
            console.log("searchin1", query);
            const result = await getSearch(query, pageNumb);
            setMovieList(result);
            setLoading(false);
        };
        fetchData();
    }, [query, pageNumb, pageNumber])

    return (
        <React.Fragment>
            {loading ? <p>loadinghere</p> : <Output searchList={movieList} />}
        </React.Fragment>
    )
}

export default Search
