import './styles/App.css';
//import React, { useState, useEffect, createContext } from 'react';
import { MovieState } from './components/services/MovieContext';
import NavMenu from './components/nav/NavMenu';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Output from './components/Output';

import Movie from './pages/Movie';
// import GetGenreList from 'apicalls/GetGenreList';
import Person from './pages/Person';
import Genres from './pages/Genres';
import RealPagination from './components/RealPagination';
import Discover from './pages/Discover';
import Search from './pages/Search';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './components/Error';
import { MyContext } from './components/GenreFilters';
import FavouritesList from './pages/FavouritesList';

const App = () => {
    return (
        <MovieState>
            <div className="App">
                <Router>
                    <NavMenu />
                    <Switch>

                        <Route path='/' exact component={Discover}>
                            <Redirect to="/discover/popular" />
                        </Route>

                        <Route path='/signup' exact component={Signup} />
                        <Route path='/login' exact component={Login} />

                        <Route path='/favourites' exact component={FavouritesList} />
                        <Route path='/discover/:name?page=:pageNumb' exact component={Discover} />

                        <Route path='/discover/:name' exact component={Discover} />

                        {/* <MyContext> */}
                            <Route path='/genre/:name?page=:pageNumb' exact component={Genres} />
                            <Route path='/genre/:id' exact component={Genres} />
                        {/* </MyContext> */}
                        <Route path='/movie/:id?page=:pageNumb' exact component={Movie} />
                        <Route path='/movie/:id' exact component={Movie} />

                        <Route path='/search/:query?page=:pageNumb' exact component={Search} />
                        <Route path='/search/:query' exact component={Search} />
                        <Route path='/person/:id' exact component={Person} />
{/* 
                        <Route component={Error} /> */}

                    </Switch>



                    <Output />
                </Router>
            </div>
        </MovieState>
    );
}

export default App;
