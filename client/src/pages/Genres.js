import React, { useEffect, useState, useContext, useRef } from "react";
import { getGenre } from '../apicalls/Connect';
import { useParams, useHistory, useLocation, Link } from "react-router-dom";
import Output from '../components/Output';
import { MovieContext } from '../components/services/MovieContext';
// import { MyContext } from './GenreFilters';

const Genres = () => {
    const { pageNumber, setPageNumber } = useContext(MovieContext);

    const [genreList, setGenreList] = useState([]);
    const [loading, setLoading] = useState(true);
    let [pageValue, setPageValue] = useState("action");

    const linkRef = useRef('');
    const { id } = useParams();
    const { search } = useLocation();

    const searchParams = new URLSearchParams(search);
    let pageNumb = searchParams.get('page');

    const enterString = id;
    let regexStr = enterString.match(/[a-z]+|[^a-z]+/gi);

    if (pageNumb === undefined || pageNumb === null) {
        pageNumb = 1;
    }
    setPageNumber(pageNumb);

    useEffect(() => {
        pageNumb = pageNumber;
        if (id !== linkRef.current) {
            pageNumb = 1;
        }

        const fetchData = async () => {
            linkRef.current = id;
            setLoading(true);
            const result = await getGenre((regexStr[0]), pageNumb, pageValue);
            setGenreList(result);
            setLoading(false);
        }
        fetchData();
    }, [id, pageNumb, pageNumber, pageValue])

    return (
        <div>
            {loading ? <p>loading</p> : <Output genreList={genreList} changeValue={pageValue => setPageValue(pageValue)} />}
        </div >
    )
}

export default Genres
