require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');


const path = require('path');
const app = express();
const API_KEY = process.env.REACT_APP_API_KEY;

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const dbURI = process.env.MONGO_PASSWORD;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log('Listening at port');
});
const authRoutes = require('./Routes/authRoutes');
const favouriteRoutes = require('./Routes/favouriteRoutes');
const commentRoutes = require('./Routes/commentRoutes');
app.use('/api', commentRoutes);
app.use('/api', authRoutes);
app.use('/api', favouriteRoutes);
const discoverController = require('./Controllers/DiscoverController');
const movieController = require('./Controllers/MovieController');
const searchController = require('./Controllers/SearchController');
const personController = require('./Controllers/PersonController');
const genreController = require('./Controllers/GenreController');
// const favouriteController = require('./Controllers/FavouriteController');

const { response } = require('express');


app.get(['/api/discover/:id', '/api/discover/:id?page=pageNumb'], discoverController.getDiscover);
app.get(['/movie/:id', '/movie/:id?page=pageNumber'], movieController.getMovie);
app.get(['/search/:id', '/search/:id?page=pageNumber'], searchController.getSearch);
app.get(['/person/:id', '/person/:id?page=pageNumber'], personController.getPerson);
app.get(['/genre/:id', '/genre/:id?page=pageNumb'], genreController.getGenre);
// app.post('/api/favourite/movie', favouriteController.getFavourite);

app.use(authRoutes);
app.use(favouriteRoutes);

app.get('/api/getGenres', async (req, res) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
        const data = await response.json();
        res.send(data);
        res.end();
    } catch (error) {
        console.log(error);
    }
})

if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get("*", function (request, response) {
        response.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
}

