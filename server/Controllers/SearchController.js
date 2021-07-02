const fetch = require('node-fetch');
const API_KEY = process.env.REACT_APP_API_KEY;

const getSearch = async(req, res) => {
    const searchQ = req.params.id;
    console.log("searchQ", searchQ);
    let pageNumber = 1;
    console.log(pageNumber);
    if (req.query.page !== undefined) { pageNumber = req.query.page; console.log("hey", req.query.page) }
    try {
        // console.log(filterTerm);
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${searchQ}&page=${pageNumber}`);
        const data = await response.json();
        // console.log("serverdata", data);
        res.send(data);
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getSearch
}