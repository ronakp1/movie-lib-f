const fetch = require('node-fetch');
const API_KEY = process.env.REACT_APP_API_KEY;

const discoverLookup = {
    popular: 'popular',
    top_rated: 'top_rated',
    upcoming: 'upcoming'
}

const filterLookup = {
    popular: "popularity.desc",
    toprated: "vote_average.desc",
    title: "original_title.asc",
    releasedate: "primary_release_date.desc"
}


const getGenre = async(req,res) => {
    const genreID = req.params.id;
    console.log("genreID", genreID);
    let pageNumber = 1;
    console.log(pageNumber);
    if (req.query.page !== undefined) { pageNumber = req.query.page; console.log("hey", req.query.page) }
    try {
        // console.log(filterTerm);
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${genreID}&with_watch_monetization_types=flatrate`);
        const data = await response.json();
        // console.log("serverdata", data);
        res.send(data);
        
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    getGenre
}