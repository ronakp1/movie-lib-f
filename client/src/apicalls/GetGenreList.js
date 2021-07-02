// import React, { useEffect, useState } from 'react';
// import reactDom from 'react-dom';
// import { getGenres } from '../apicalls/Connect';
// import NavBar from '../components/NavBar';
// function GetGenreList() {
//     const [genreList, setGenreList] = useState([]);

//     useEffect(() => {
//         const getList = async () => {
//             setGenreList(await getGenres());
//             console.log("genrelistis", genreList)
//         }
//         getList();
//     }, [])

//     return (
//         <React.Fragment>
//             {genreList.length > 0 && <NavBar list={genreList} />}
//         </React.Fragment>
//     )
// }

// export default GetGenreList
