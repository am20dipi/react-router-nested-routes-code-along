import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({movies}) => {
    // the "movies" is a prop passed from MoviesPage
    // the movies prop is an object containing all movies
    const renderMovies = Object.keys(movies).map(movieID =>
        <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    );
    //Object.keys(movies) is object destructuring; we set a constant renderMovies to an object's key "movies"
    // we then map over the movies; for each movie we create a link to the movie show page and set a key to the movie's key 
    // we create a dynamic path to each movie using movieID variable
    return (
        <div>
          {renderMovies}
        </div>
    );
};


export default MoviesList; 