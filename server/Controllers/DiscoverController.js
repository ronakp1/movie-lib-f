const fetch = require('node-fetch');
 const API_KEY = process.env.REACT_APP_API_KEY;

const getDiscover = async(req, res) => {
    let filterTerm = req.params.id;
    if (filterTerm.includes("rated")) filterTerm = "top_rated";
    // console.log(filterTerm)
    // const filterTerm = discoverLookup[filter];
    let pageNumber = 1;
    // console.log(pageNumber);
    if (req.query.page !== undefined) { pageNumber = req.query.page; console.log("hey", req.query.page) }
    try {
        // console.log(filterTerm);
        const response = await fetch(`https://api.themoviedb.org/3/movie/${filterTerm}?api_key=${API_KEY}&language=en-US&page=${pageNumber}`);
        const data = await response.json();
        // console.log("serverdata", data);
        res.send(data);
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getDiscover
}