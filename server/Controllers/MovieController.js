const fetch = require('node-fetch');
const API_KEY = process.env.REACT_APP_API_KEY;

const getMovie = async(req, res) => {
    const movieID = req.params.id;
    // console.log("movieID", movieID);
    let pageNumber = 1;
    // console.log(pageNumber);
    if (req.query.page !== undefined) { pageNumber = req.query.page; console.log("hey", req.query.page) }
    try {
        const response1 = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`);
        const response2 = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`)
        const response3 = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
        const response4 = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`)
        let data = await response1.json();
        let data2 = await response2.json();
        let data3 = await response3.json();
        let data4 = await response4.json();

        res.send([data, data2, data3, data4]);
      
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getMovie
}