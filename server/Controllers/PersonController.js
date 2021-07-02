const fetch = require('node-fetch');
const API_KEY = process.env.REACT_APP_API_KEY;

const getPerson = async(req, res) => {
    const movieID = req.params.id;
    console.log("movieID", movieID);
    let pageNumber = 1;
    console.log(pageNumber);
    if (req.query.page !== undefined) { pageNumber = req.query.page; console.log("hey", req.query.page) }
    try {
        // console.log(filterTerm);
        const response1 = await fetch(`https://api.themoviedb.org/3/person/${movieID}?api_key=${API_KEY}&language=en-US`)
        const response2 = await fetch(`https://api.themoviedb.org/3/person/${movieID}/movie_credits?api_key=${API_KEY}&language=en-US`)

        // res.end();
        // let data = await response1.json();
        // console.log("serverdata", data);
        let data = await response1.json();
        let data2 = await response2.json();

        res.send([data, data2]);
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getPerson
}