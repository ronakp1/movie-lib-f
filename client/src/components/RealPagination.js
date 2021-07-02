// import React, { useContext, useEffect } from 'react';
// import { MovieContext } from './MovieContext';
// import { useHistory, useLocation, Link, useParams, useRouteMatch } from "react-router-dom";
// import Output from './Output';

// const RealPagination = () => {
//     const { newPage, pageNumber, setPageNumber, setSearchPageNumber, pageId, setPageId } = useContext(MovieContext);

//     let history = useHistory();
//     let location = useLocation();
//     const { whatever, pageNumb } = useParams();
//     const { url } = useRouteMatch();
//     console.log("hey2", whatever, pageNumb);

//     useEffect(() => {
//         console.log("hey2 inside", whatever, pageNumb);
//         setPageId(`${whatever}${pageNumb}`);
//     }, [location])
//     // useEffect(() => {
//     //     const detectHome = () => {
//     //     console.log("URLloc is ", location);
//     //     const loc = location.search;
//     //     const path = location.pathname;
//     //     const pageNumb = loc.charAt(loc.length - 1);
//     //     const pagePath = path.includes("search");
//     //     const searchTerm = path.split('/').pop();
//     //     console.log("termis", searchTerm);
//     //     console.log(pageNumb);
//     //     console.log(pagePath);
//     //     console.log("ISTHIS", searchQ);

//     //     if (pagePath) {
//     //             setSearchPageNumber(pageNumb);
//     //         setSearchQ(searchTerm);

//     //     }
//     // }
//     //     return () => {
//     //         detectHome();
//     //     }
//     // }, [location])

//     // const pageURL = () => {
//     //     const loc = location.search;
//     //     const pageNumb = loc.charAt(loc.length-1);
//     //     console.log(pageNumb);
//     // }

//     // useEffect(() => {
//     //     console.log("theidhere", id);
//     //     console.log("url", url);
//     //     setPageNumber(id);
//     // }, [location])

//     return (
//         null
//     )
// }

// export default RealPagination;
